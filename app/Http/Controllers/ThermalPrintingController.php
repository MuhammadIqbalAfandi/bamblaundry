<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Helpers\ThermalPrinting;
use App\Models\Transaction;

class ThermalPrintingController extends Controller
{
    public function __invoke(Transaction $transaction)
    {
        $thermalPrinting = new ThermalPrinting($transaction);
        $thermalPrinting->startPrinting(1);

        return back();
    }
}
