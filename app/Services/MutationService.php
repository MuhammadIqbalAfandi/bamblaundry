<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection as SupportCollection;

class MutationService extends CurrencyFormatService
{
    public function totalIncome(EloquentCollection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 1) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    public function totalExpense(EloquentCollection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 2) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    public function totalIncomeAsString(EloquentCollection $collections)
    {
        return $this->setRupiahFormat($this->totalIncome($collections), true);
    }

    public function totalExpenseAsString(EloquentCollection $collections)
    {
        return $this->setRupiahFormat($this->totalExpense($collections), true);
    }

    public function totalAmount(EloquentCollection $collections)
    {
        $amount = $this->totalIncome($collections) - $this->totalExpense($collections);
        return $this->setRupiahFormat($amount, true);
    }

    public function totalPerMonth(EloquentCollection $collections)
    {
        return $collections->transform(fn($collection) => $collection->sum(fn($collect) => $collect->getRawOriginal('amount')));
    }

    public function statisticData(SupportCollection $collections, int $take = -1)
    {
        $collections = $collections->take($take);
        $collections->transform(fn($collections) => $this->totalPerMonth($collections));
        return $collections;
    }
}
