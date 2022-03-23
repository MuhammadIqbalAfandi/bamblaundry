<?php

namespace App\Models\Helpers;

trait HasHelper
{
    protected function setRupiahFormat(int $number)
    {
        return number_format($number, '0', ',', '.');
    }
}
