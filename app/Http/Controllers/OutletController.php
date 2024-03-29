<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Outlet\StoreOutletRequest;
use App\Http\Requests\Outlet\UpdateOutletRequest;
use App\Models\Outlet;

class OutletController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(Outlet::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('outlet/Index', [
            'filters' => request()->all('search'),
            'outlets' => Outlet::filter(request()->only('search'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
                ->through(fn($outlet) => [
                    'id' => $outlet->id,
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
        return inertia('outlet/Create');
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

        return back()->with('success', __('messages.success.store.outlet'));
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
        return inertia('outlet/Edit', [
            'outlet' => [
                'id' => $outlet->id,
                'name' => $outlet->name,
                'phone' => $outlet->phone,
                'address' => $outlet->address,
                'relation' => $outlet->users()->exists(),
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
