<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
// use App\Models\Transaction;
use Hoa\Socket\Client as SocketClient;
use Hoa\Websocket\Client as WebsocketClient;

class ThermalPrintingController extends Controller
{
    public function __invoke(Transaction $transaction)
    {
        // $thermalPrinting = new ThermalPrinting($transaction);
        // $thermalPrinting->startPrinting(1);
        $transaction->load(['outlet', 'customer', 'transactionDetails.laundry']);
        $discountAsString = $transaction->discountAsString();
        $subTotalAsString = $transaction->subTotalAsString();
        $totalPriceAsString = $transaction->totalPriceAsString();
        foreach ($transaction->transactionDetails as $transactionDetail) {
            $totalPriceAsStringDetail = $transactionDetail->totalPriceAsString();
            $transactionDetail->totalPriceAsString = $totalPriceAsStringDetail;
        }

        $transaction->discountAsString = $discountAsString;
        $transaction->subTotalAsString = $subTotalAsString;
        $transaction->totalPriceAsString = $totalPriceAsString;

        try {
            $socket = new WebsocketClient(
                new SocketClient('ws://127.0.0.1:5544')
            );
            $socket->setHost('escpos-server');
            $socket->connect();
            $socket->send(json_encode($transaction));
            $socket->close();
        } catch (Exception $e) {
            return back()->with('error', __('messages.error.store.transaction'));
        }

        return back();
    }
}
