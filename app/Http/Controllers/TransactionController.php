<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Http\Requests\Transaction\UpdateTransactionRequest;
use App\Models\Customer;
use App\Models\Laundry;
use App\Models\Outlet;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use Exception;
use FontLib\Table\Type\name;
use Hoa\Socket\Client as SocketClient;
use Hoa\Websocket\Client as WebsocketClient;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        if (Auth::user()->hasRole('Admin')) {
            $transactions = Transaction::latest();
        } else {
            $transactions = Transaction::where('outlet_id', Auth::user()->outlet_id)->latest();
        }

        return inertia('transaction/Index', [
            'filters' => request()->all('search', 'startDate', 'endDate', 'outlet'),
            'transactions' => $transactions
                ->filter(request()->only('search', 'startDate', 'endDate', 'outlet'))
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
            'customers' => fn() => Customer::latest()
                ->filter(request('customer'))
                ->get()
                ->transform(fn($customer) => [
                    'name' => $customer->name,
                    'customerNumber' => $customer->customer_number,
                    'phone' => $customer->phone,
                ]),
            'laundries' => fn() => Laundry::latest()
                ->filter(request('laundry'))
                ->get()
                ->transform(fn($laundry) => [
                    'id' => $laundry->id,
                    'name' => $laundry->name,
                    'unit' => $laundry->unit,
                    'price' => $laundry->getRawOriginal('price'),
                ]),
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
                'discount' => $request->discount_all,
                'transaction_status_id' => 1,
                'customer_number' => $request->customer_number,
                'user_id' => $request->user()->id,
                'outlet_id' => $request->user()->outlet_id,
            ]);

            foreach ($request->laundries as $laundry) {
                $transaction->transactionDetails()->create([
                    'price' => $laundry['price'],
                    'discount' => $laundry['discount'],
                    'quantity' => $laundry['quantity'],
                    'laundry_id' => $laundry['laundryId'],
                ]);
            }

            $transaction->mutation()->create([
                'type' => 1,
                'amount' => $transaction->totalPrice(),
                'outlet_id' => $request->user()->outlet_id,
            ]);

            DB::commit();

            $transaction = Transaction::with(['outlet', 'customer', 'transactionDetails.laundry'])->latest()->first();

            $discountAsString = $transaction->discountAsString();
            $subTotalAsString = $transaction->subTotalAsString();
            $totalPriceAsString = $transaction->totalPriceAsString();
            foreach ($transaction->transactionDetails as $transactionDetail) {
                $totalPriceAsStringDetail = $transactionDetail->totalPriceAsString();
                $transactionDetail->totalPriceAsString = $totalPriceAsStringDetail;
            }

            $transaction->discountAsString = $discountAsString;
            $transaction->subTotalAsString = $subTotalAsString;
            $transaction->totalPriceAsString = $totalPriceAsString;

            // $thermalPrinting = new ThermalPrinting($transaction);
            // $thermalPrinting->startPrinting(2);
            try {
                $socket = new WebsocketClient(
                    new SocketClient('ws://127.0.0.1:5544')
                );
                $socket->setHost('escpos-server');
                $socket->connect();
                $socket->send(json_encode($transaction));
                $socket->close();
                // dd($socket->getConnection()->getCurrentNode());
            } catch (Exception $e) {
                return back()->with('error', __('messages.error.store.transaction'));
            }

            Http::post('https://gerbangchatapi.dijitalcode.com/chat/send?id=bambslaundry', [
                'receiver' => $transaction->customer->phone,
                'message' => 'Terima kasih sudah mempercayakan layanan laundry kepada Bamb\'s Laundry. Nomor transaksi Anda adalah *' . $request->transaction_number . '*',
            ]);

            return to_route('transactions.index')->with('success', __('messages.success.store.transaction'));
        } catch (QueryException $e) {
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
                    'laundry' => "{$transactionDetail->laundry->name} {$transactionDetail->laundry->getRawOriginal('price')}/{$transactionDetail->laundry->unit}",
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
