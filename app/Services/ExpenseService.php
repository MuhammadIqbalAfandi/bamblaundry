<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection as SupportCollection;

class ExpenseService extends CurrencyFormatService
{
    public function totalPrice(EloquentCollection $collections)
    {
        return $collections->sum(fn($collection) => $collection->getRawOriginal('amount'));
    }

    public function totalPriceAsString(EloquentCollection $collection)
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPrice($collection), true);
    }

    public function totalPerMonth(EloquentCollection $collections)
    {
        return $collections->transform(fn($collection) => $collection->count());
    }

    public function statisticData(SupportCollection $collections)
    {
        $collections = $collections->take(-2);
        $collections->transform(fn($collections) => $this->totalPerMonth($collections));
        return $collections;
    }
}
