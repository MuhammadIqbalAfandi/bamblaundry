<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\StoreCustomerRequest;
use App\Http\Requests\Customer\UpdateCustomerRequest;
use App\Models\Customer;

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
            'customers' => Customer::latest()
                ->filter(request()->search)
                ->paginate(10)
                ->withQueryString()
                ->through(fn($customer) => [
                    'id' => $customer->id,
                    'customer_number' => $customer->customer_number,
                    'name' => $customer->name,
                    'phone' => $customer->phone,
                    'address' => $customer->address,
                    'gender' => $customer->gender,
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

        return to_route('customers.index')->with('success', __('messages.success.store.customer'));
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
                'address' => $customer->address,
                'gender' => $customer->getRawOriginal('gender'),
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
}
