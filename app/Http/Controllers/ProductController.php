<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('product/Index', [
            'filters' => request()->all('search'),
            'products' => Product::filter(request()->only('search'))
                ->latest()
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
        return inertia('product/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated());

        return to_route('products.index')->with('success', __('messages.success.store.product'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product  $product
     * @return \Inertia\Response
     */
    public function edit(Product $product)
    {
        return inertia('product/Edit', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->getRawOriginal('price'),
                'unit' => $product->unit,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return back()->with('success', __('messages.success.update.product'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return to_route('laundries.index')->with('success', __('messages.success.destroy.product'));
    }
}
