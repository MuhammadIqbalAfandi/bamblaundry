<?php

namespace App\Services;

class CurrencyFormatService
{
    public function setRupiahFormat(int $number, int $decimal = 0, bool $sign = false)
    {
        if ($sign) {
            return 'Rp' . number_format($number, $decimal, ',', '.');
        } else {
            return number_format($number, $decimal, ',', '.');
        }
    }
}
