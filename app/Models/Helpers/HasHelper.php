<?php

namespace App\Models\Helpers;

trait HasHelper
{
    protected function setRupiahFormat(int $number)
    {
        return 'Rp. ' . number_format($number, '2', ',', '.');
    }
}
