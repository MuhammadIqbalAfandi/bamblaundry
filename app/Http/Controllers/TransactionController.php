<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Http\Requests\Transaction\UpdateTransactionRequest;
use App\Models\Customer;
use App\Models\Discount;
use App\Models\Laundry;
use App\Models\Outlet;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use Exception;
use Hoa\Socket\Client as SocketClient;
use Hoa\Websocket\Client as WebsocketClient;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(Transaction::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        if (Gate::allows('isOutletHead')) {
            request()->merge(['outlet' => request()->user()->outlet_id]);
        } else if (Gate::allows('isEmployee')) {
            request()->merge(['outlet' => request()->user()->outlet_id]);
        }

        return inertia('transaction/Index', [
            'filters' => request()->all('search', 'startDate', 'endDate', 'outlet'),
            'transactions' => Transaction::latest()
                ->filter(request()->only('search', 'startDate', 'endDate', 'outlet'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
                ->through(fn($transaction) => [
                    'id' => $transaction->id,
                    'transactionNumber' => $transaction->transaction_number,
                    'createdAt' => $transaction->created_at,
                    'customer' => [
                        'number' => $transaction->customer->customer_number,
                        'name' => $transaction->customer->name,
                        'phone' => $transaction->customer->phone,
                    ],
                    'price' => $transaction->totalPriceAsFullString(),
                    'outlet' => $transaction->outlet->name,
                    'transactionStatusName' => $transaction->transactionStatus->name,
                    'transactionStatusId' => $transaction->transactionStatus->id,
                ]),
            'transactionsStatus' => TransactionStatus::all()
                ->transform(fn($transactionStatus) => [
                    'label' => $transactionStatus->name,
                    'value' => $transactionStatus->id,
                ]),
            'outlets' => Outlet::all()
                ->transform(fn($outlet) => [
                    'label' => $outlet->name,
                    'value' => $outlet->id,
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return inertia('transaction/Create', [
            'transactionNumber' => 'TS' . now()->format('YmdHis'),
            'customers' => Inertia::lazy(
                fn() => Customer::filter(request('customer'))
                    ->latest()
                    ->get()
                    ->transform(fn($customer) => [
                        'name' => $customer->name,
                        'customerNumber' => $customer->customer_number,
                        'phone' => $customer->phone,
                        'checkTransaction' => $customer->checkTransaction(),
                    ])
            ),
            'discount' => Discount::first()->discount,
            'laundries' => Inertia::lazy(
                fn() => Laundry::filter(request('laundry'))
                    ->latest()
                    ->get()
                    ->transform(fn($laundry) => [
                        'id' => $laundry->id,
                        'name' => $laundry->name,
                        'unit' => $laundry->unit,
                        'price' => $laundry->getRawOriginal('price'),
                    ])
            ),
            'products' => Inertia::lazy(
                fn() => Product::filter(request('product'))
                    ->get()
                    ->transform(fn($product) => [
                        'id' => $product->id,
                        'name' => $product->name,
                        'unit' => $product->unit,
                        'price' => $product->getRawOriginal('price'),
                    ])
            ),
            'customerNumber' => fn() => 'CS' . now()->format('YmdHis'),
            'genders' => [
                ['label' => 'Perempuan', 'value' => 1],
                ['label' => 'Laki-laki', 'value' => 2],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTransactionRequest $request)
    {
        DB::beginTransaction();

        try {
            $transaction = Transaction::create([
                'transaction_number' => $request->transaction_number,
                'description' => $request->description,
                'discount' => $request->discount,
                'transaction_status_id' => 1,
                'customer_number' => $request->customer_number,
                'user_id' => $request->user()->id,
                'outlet_id' => $request->user()->outlet_id,
            ]);

            if ($request->laundries) {
                foreach ($request->laundries as $laundry) {
                    $transaction->transactionDetails()->create([
                        'price' => $laundry['price'],
                        'discount' => $laundry['discount'],
                        'quantity' => $laundry['quantity'],
                        'laundry_id' => $laundry['id'],
                    ]);
                }
            }

            if ($request->products) {
                foreach ($request->products as $product) {
                    $transaction->transactionDetails()->create([
                        'price' => $product['price'],
                        'discount' => $product['discount'],
                        'quantity' => $product['quantity'],
                        'product_id' => $product['id'],
                    ]);
                }
            }

            if ($request->discount) {
                $transaction->mutation()->create([
                    'type' => 1,
                    'amount' => $transaction->totalPrice() < 0 ? $transaction->subTotal() : $transaction->totalPrice(),
                    'outlet_id' => $request->user()->outlet_id,
                ]);

                $transaction->mutation()->create([
                    'type' => 2,
                    'amount' => $transaction->totalPrice() < 0 ? $transaction->subTotal() : $transaction->totalPrice(),
                    'outlet_id' => $request->user()->outlet_id,
                ]);
            } else {
                $transaction->mutation()->create([
                    'type' => 1,
                    'amount' => $transaction->totalPrice(),
                    'outlet_id' => $request->user()->outlet_id,
                ]);
            }

            DB::commit();

            $transaction->load(['outlet', 'customer', 'transactionDetails.laundry', 'transactionDetails.product']);

            $subTotalAsString = $transaction->subTotalAsString();
            $totalPriceAsString = $transaction->totalPriceAsString();
            foreach ($transaction->transactionDetails as $transactionDetail) {
                $totalPriceAsStringDetail = $transactionDetail->totalPriceAsString();
                $transactionDetail->totalPriceAsString = $totalPriceAsStringDetail;
            }

            $transaction->subTotalAsString = $subTotalAsString;
            $transaction->totalPriceAsString = $totalPriceAsString;

            try {
                $socket = new WebsocketClient(
                    new SocketClient('ws://103.157.96.20:5544')
                );
                $socket->setHost('escpos-server');
                $socket->connect();
                $socket->send(json_encode($transaction));
                $socket->close();
            } catch (Exception $e) {
                return back()->with('error', __('messages.error.store.transaction'));
            }

            Http::post('https://gerbangchatapi.dijitalcode.com/chat/send?id=bambslaundry', [
                'receiver' => $transaction->customer->phone,
                'message' => 'Terima kasih sudah mempercayakan layanan laundry kepada Bamb\'s Laundry. Nomor transaksi Anda adalah *' . $request->transaction_number . '*',
            ]);

            return back()->with('success', __('messages.success.store.transaction'));
        } catch (Exception $e) {
            DB::rollBack();

            return back()->with('error', __('messages.error.store.transaction'));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Transaction  $transaction
     * @return \Inertia\Response
     */
    public function show(Transaction $transaction)
    {
        return inertia('transaction/Show', [
            'transaction' => [
                'number' => $transaction->transaction_number,
                'statusId' => $transaction->transactionStatus->id,
                'status' => $transaction->transactionStatus->name,
                'description' => $transaction->description,
                'discount' => $transaction->discount,
                'price' => $transaction->totalPriceAsFullString(),
                'dateLaundry' => $transaction->created_at,
            ],
            'user' => [
                'name' => $transaction->user->name,
                'phone' => $transaction->user->phone,
                'email' => $transaction->user->email,
            ],
            'customer' => [
                'number' => $transaction->customer->customer_number,
                'name' => $transaction->customer->name,
                'phone' => $transaction->customer->phone,
                'address' => $transaction->customer->address,
            ],
            'outlet' => [
                'name' => $transaction->outlet->name,
                'address' => $transaction->outlet->address,
            ],
            'transactionDetails' => $transaction->transactionDetails
                ->transform(fn($transactionDetail) => [
                    'item' => $transactionDetail->laundry->name ?? $transactionDetail->product->name,
                    'unit' => $transactionDetail->laundry->unit ?? $transactionDetail->product->unit,
                    'quantity' => $transactionDetail->quantity,
                    'discount' => $transactionDetail->discount,
                    'price' => $transactionDetail->price,
                    'totalPrice' => $transactionDetail->totalPriceAsFullString(),
                ]),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->validated());

        if ($transaction->transaction_status_id == 2) {
            $statusMessage = " sudah diproses, harap menunggu sampai pemberitahuan selanjutnya.";
        } else if ($transaction->transaction_status_id == 3) {
            $statusMessage = " sudah selesai, silahkan diambil.";
        } else {
            $statusMessage = " sudah diambil. Silahkan datang lagi di kemudian hari jika ingin laundry kembali, terima kasih.";
        }

        Http::post('https://gerbangchatapi.dijitalcode.com/chat/send?id=bambslaundry', [
            'receiver' => $transaction->customer->phone,
            'message' => 'Layanan laundry Anda dengan nomor transaksi *' . $transaction->transaction_number . '*' . $statusMessage,
        ]);

        return back()->with('success', __('messages.success.update.transaction_status'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
