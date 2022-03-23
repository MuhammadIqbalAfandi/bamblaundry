<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Outlet\StoreOutletRequest;
use App\Http\Requests\Outlet\UpdateOutletRequest;
use App\Models\Outlet;
use Illuminate\Support\Facades\Auth;

class OutletController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        if (!Auth::user()->hasRole('Admin')) {
            return inertia('Access');
        }

        return inertia('outlet/Index', [
            'outlets' => Outlet::latest()
                ->filter(request()->search)
                ->paginate(10)
                ->withQueryString()
                ->through(fn($outlet) => [
                    'id' => $outlet->id,
                    'outlet_number' => $outlet->outlet_number,
                    'name' => $outlet->name,
                    'phone' => $outlet->phone,
                    'address' => $outlet->address,
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
        if (!Auth::user()->hasRole('Admin')) {
            return inertia('Access');
        }

        return inertia('outlet/Create', [
            'outlet_number' => 'OT' . now()->format('YmdHis'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOutletRequest $request)
    {
        Outlet::create($request->validated());

        return to_route('outlets.index')->with('success', __('messages.success.store.outlet'));
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
     * @param  Outlet  $outlet
     * @return \Inertia\Response
     */
    public function edit(Outlet $outlet)
    {
        if (!Auth::user()->hasRole('Admin')) {
            return inertia('Access');
        }

        return inertia('outlet/Edit', [
            'outlet' => [
                'id' => $outlet->id,
                'outlet_number' => $outlet->outlet_number,
                'name' => $outlet->name,
                'phone' => $outlet->phone,
                'address' => $outlet->address,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Outlet  $outlet
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOutletRequest $request, Outlet $outlet)
    {
        $outlet->update($request->validated());

        return back()->with('success', __('messages.success.update.outlet'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Outlet  $Outlet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Outlet $outlet)
    {
        $outlet->delete();

        return to_route('outlets.index')->with('success', __('messages.success.destroy.outlet'));
    }
}
