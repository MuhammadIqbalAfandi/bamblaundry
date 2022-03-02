<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Laundry\StoreLaundryRequest;
use App\Http\Requests\Laundry\UpdateLaundryRequest;
use App\Models\Laundry;

class LaundryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('laundry/Index', [
            'laundries' => Laundry::latest()
                ->filter(request()->search)
                ->paginate(10)
                ->withQueryString()
                ->through(fn($laundry) => [
                    'id' => $laundry->id,
                    'name' => $laundry->name,
                    'price' => $laundry->price,
                    'unit' => $laundry->unit,
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
        return inertia('laundry/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLaundryRequest $request)
    {
        Laundry::create($request->validated());

        return to_route('laundries.index')->with('success', __('messages.success.store.laundry'));
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
     * @param  Laundry  $laundry
     * @return \Inertia\Response
     */
    public function edit(Laundry $laundry)
    {
        return inertia('laundry/Edit', [
            'laundry' => [
                'id' => $laundry->id,
                'name' => $laundry->name,
                'price' => $laundry->getRawOriginal('price'),
                'unit' => $laundry->unit,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Laundry  $laundry
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLaundryRequest $request, Laundry $laundry)
    {
        $laundry->update($request->validated());

        return back()->with('success', __('messages.success.update.laundry'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Laundry  $laundry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Laundry $laundry)
    {
        $laundry->delete();

        return to_route('laundries.index')->with('success', __('messages.success.destroy.laundry'));
    }
}
