<?php

namespace App\Services;

use App\Services\CurrencyFormatService;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection as SupportCollection;

class TransactionService extends CurrencyFormatService
{
    public function getPaginator(array $items)
    {
        $total = count($items);
        $page = request('page') ?? 1;
        $perPage = 10;
        $offset = ($page - 1) * $perPage;
        $items = array_slice($items, $offset, $perPage);

        return new LengthAwarePaginator($items, $total, $perPage, $page, [
            'path' => request()->url(),
            'query' => request()->query(),
        ]);
    }

    public function totalPrice(EloquentCollection $collections)
    {
        return $collections->transform(fn($collect) => $collect->totalPrice());
    }

    public function totalPriceGroup(EloquentCollection $collections)
    {
        return $this->totalPrice($collections)->sum();
    }

    public function totalPriceGroupAsString(EloquentCollection $collections)
    {
        if ($collections->count()) {
            return $this->setRupiahFormat($this->totalPriceGroup($collections), true);
        } else {
            return $this->setRupiahFormat(0, true);
        }
    }

    public function totalDiscountGiven(EloquentCollection $collections)
    {
        return $collections->transform(fn($collect) => $collect->totalDiscountGiven());
    }

    public function totalDiscountGivenGroup(EloquentCollection $collections)
    {
        return $this->totalDiscountGiven($collections)->sum();
    }

    public function totalDiscountGivenGroupAsString(EloquentCollection $collections)
    {
        if ($collections->count()) {
            return $this->setRupiahFormat($this->totalDiscountGivenGroup($collections), true);
        } else {
            return $this->setRupiahFormat(0, true);
        }
    }

    public function totalPerMonth(EloquentCollection $collections)
    {
        return $collections->transform(fn($collection) => $collection->count());
    }

    public function statisticData(SupportCollection $collections, int $take = -1)
    {
        $collections = $collections->take($take);
        $collections->transform(fn($collections) => $this->totalPerMonth($collections));
        return $collections;
    }

    public function topTransaction(EloquentCollection $collections, int $take = 5)
    {
        return $collections
            ->transform(fn($collect) => [[
                'customerNumber' => $collect->first()->customer->customer_number,
                'name' => $collect->first()->customer->name,
                'totalPrice' => $this->totalPriceGroup($collect),
            ]])
            ->sortByDesc('totalPrice')
            ->take($take)
            ->flatten(1);
    }
}
