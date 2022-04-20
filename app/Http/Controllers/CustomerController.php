<?php

namespace App\Http\Controllers;

use App\Exports\CustomersExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\StoreCustomerRequest;
use App\Http\Requests\Customer\UpdateCustomerRequest;
use App\Models\Customer;
use App\Models\Transaction;
use App\Services\TransactionService;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('customer/Index', [
            'filters' => request()->all('search'),
            'customers' => Customer::filter(request()->only('search'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
                ->through(fn($customer) => [
                    'id' => $customer->id,
                    'customer_number' => $customer->customer_number,
                    'name' => $customer->name,
                    'phone' => $customer->phone,
                    'gender' => $customer->gender_id,
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
        return inertia('customer/Create', [
            'customer_number' => 'CS' . now()->format('YmdHis'),
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
    public function store(StoreCustomerRequest $request)
    {
        Customer::create($request->validated());

        if ($request->transaction_number) {
            return back()->with('success', __('messages.success.store.customer'));
        } else {
            return back()->with('success', __('messages.success.store.customer'));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Customer  $customer
     * @return \Inertia\Response
     */
    public function edit(Customer $customer)
    {
        return inertia('customer/Edit', [
            'customer' => [
                'id' => $customer->id,
                'customer_number' => $customer->customer_number,
                'name' => $customer->name,
                'phone' => $customer->phone,
                'gender_id' => (int) $customer->getRawOriginal('gender_id'),
                'relation' => $customer->transaction()->exists(),
            ],
            'genders' => [
                ['label' => 'Perempuan', 'value' => 1],
                ['label' => 'Laki-laki', 'value' => 2],
            ],
            'transactions' => [
                'details' => $customer->transaction()
                    ->latest()
                    ->paginate(10)
                    ->withQueryString()
                    ->through(fn($transaction) => [
                        'id' => $transaction->id,
                        'transactionNumber' => $transaction->transaction_number,
                        'createdAt' => $transaction->created_at,
                        'customer' => [
                            'number' => $customer->customer_number,
                            'name' => $customer->name,
                            'phone' => $customer->phone,
                        ],
                        'price' => $transaction->totalPriceAsFullString(),
                        'outlet' => $transaction->outlet->name,
                        'transactionStatusName' => $transaction->transactionStatus->name,
                        'transactionStatusId' => $transaction->transactionStatus->id,
                    ]),
                'totalTransaction' => $customer->transaction->count(),
                'totalValue' => (new TransactionService)->totalPriceGroupAsString($customer->fresh()->transaction),
                'totalDiscountGiven' => (new TransactionService)->totalDiscountGivenGroupAsString($customer->fresh()->transaction),
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $customer->update($request->validated());

        return back()->with('success', __('messages.success.update.customer'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        return to_route('customers.index')->with('success', __('messages.success.destroy.customer'));
    }

    /**
     * Export to excel
     */
    public function exportExcel()
    {
        return new CustomersExport(request());
    }
}
