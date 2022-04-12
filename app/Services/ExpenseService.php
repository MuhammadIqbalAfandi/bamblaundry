<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;

class ExpenseService extends CurrencyFormatService
{
    public function totalPrice(Collection $collections)
    {
        return $collections->sum(fn($collection) => $collection->getRawOriginal('amount'));
    }

    public function totalPriceAsString(Collection $collection)
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPrice($collection), true);
    }
}
