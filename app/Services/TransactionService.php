<?php

namespace App\Services;

use App\Services\CurrencyFormatService;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection as SupportCollection;

class TransactionService
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
        return $collections->transform(fn($transactions) => $transactions->totalPrice());
    }

    public function totalPriceGroup(EloquentCollection $collections)
    {
        return $this->totalPrice($collections)->sum();
    }

    public function totalPriceGroupAsString(EloquentCollection $collections)
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPriceGroup($collections), true);
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
}
