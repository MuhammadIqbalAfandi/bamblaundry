<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Helpers\ThermalPrinting;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Http\Requests\Transaction\UpdateTransactionRequest;
use App\Models\Customer;
use App\Models\Laundry;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            'transactions' => $transactions
                ->filter(request()->only(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($transaction) => [
                    'id' => $transaction->id,
                    'transactionNumber' => $transaction->transaction_number,
                    'dateLaundry' => $transaction->created_at,
                    'customer' => [
                        'number' => $transaction->customer->customer_number,
                        'name' => $transaction->customer->name,
                        'phone' => $transaction->customer->phone,
                    ],
                    'price' => $transaction->totalPrice(),
                    'outlet' => $transaction->outlet->name,
                    'transactionStatusName' => $transaction->transactionStatus->name,
                    'transactionStatusId' => $transaction->transactionStatus->id,
                ]),
            'transactionsStatus' => TransactionStatus::all()
                ->transform(fn($transactionStatus) => [
                    'label' => $transactionStatus->name,
                    'value' => $transactionStatus->id,
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
                    'id' => $customer->id,
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
                'user_id' => $request->user()->id,
                'customer_id' => $request->customer_id,
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

            DB::commit();

            $transaction = Transaction::latest()->first();

            $thermalPrinting = new ThermalPrinting($transaction);
            $thermalPrinting->startPrinting(2);

            return to_route('transactions.index')->with('success', __('Transaksi berhasil ditambahkan'));
        } catch (QueryException $e) {
            return back()->with('error', __('Penambahan transaksi gagal'));

            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Int  $id
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
                'price' => $transaction->totalPrice(),
                'dateLaundry' => $transaction->created_at,
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
                    'laundry' => "{$transactionDetail->laundry->name} {$transactionDetail->laundry->price}/{$transactionDetail->laundry->unit}",
                    'quantity' => $transactionDetail->quantity,
                    'discount' => $transactionDetail->discount,
                    'price' => $transactionDetail->price,
                    'totalPrice' => $transactionDetail->totalPrice(),
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
     * @param  Int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->validated());

        return back()->with('success', __('Transaksi berhasil diperbaharui'));
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
