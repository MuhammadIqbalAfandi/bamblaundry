<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Collection;

class MutationService extends CurrencyFormatService
{
    public function totalIncome(Collection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 1) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    public function totalExpense(Collection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 2) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    public function totalIncomeAsString(Collection $collections)
    {
        return $this->setRupiahFormat($this->totalIncome($collections), true);
    }

    public function totalExpenseAsString(Collection $collections)
    {
        return $this->setRupiahFormat($this->totalExpense($collections), true);
    }

    public function totalAmount(Collection $collections)
    {
        $amount = $this->totalIncome($collections) - $this->totalExpense($collections);
        return $this->setRupiahFormat($amount, true);
    }
}
