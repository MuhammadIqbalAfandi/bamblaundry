<?php

namespace App\Services;

use App\Services\CurrencyFormatService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

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

    public function totalPrice(Collection $collections)
    {
        return $collections->transform(fn($transactions) => $transactions->totalPrice());
    }

    public function totalPriceGroup(Collection $collections)
    {
        return $this->totalPrice($collections)->sum();
    }

    public function totalPriceGroupAsString(Collection $collections)
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPriceGroup($collections), true);
    }
}
