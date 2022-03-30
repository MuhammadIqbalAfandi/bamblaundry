<?php

namespace App\Models\Helpers;

trait CurrencyFormat
{
    protected function setRupiahFormat(int $number, int $decimal = 0, bool $sign = false)
    {
        if ($sign) {
            return 'Rp' . number_format($number, $decimal, ',', '.');

        } else {
            return number_format($number, $decimal, ',', '.');
        }
    }
}
