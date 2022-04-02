<?php

namespace App\Models\Helpers;

use Illuminate\Database\Eloquent\Collection;

trait HasMutation
{
    use CurrencyFormat;

    protected static function totalIncome(Collection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 1) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    protected static function totalExpense(Collection $collections)
    {
        foreach ($collections->chunk(100) as $chunk) {
            return $chunk->sum(function ($collect) {
                if ($collect->getRawOriginal('type') == 2) {
                    return $collect->getRawOriginal('amount');
                }
            });
        }
    }

    protected static function totalIncomeAsString(Collection $collections)
    {
        return parent::setRupiahFormat(self::totalIncome($collections), 0, true);

    }

    protected static function totalExpenseAsString(Collection $collections)
    {
        return '- ' . parent::setRupiahFormat(self::totalExpense($collections), 0, true);
    }

    protected static function totalAmount(Collection $collections)
    {
        $amount = self::totalIncome($collections) - self::totalExpense($collections);
        if ($amount < 0) {
            return '- ' . parent::setRupiahFormat(abs($amount), 0, true);
        } else {
            return parent::setRupiahFormat($amount, 0, true);
        }
    }
}
