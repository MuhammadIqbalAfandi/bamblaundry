<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Exception;
use Hoa\Socket\Client as SocketClient;
use Hoa\Websocket\Client as WebsocketClient;

class ThermalPrintingController extends Controller
{
    public function __invoke(Transaction $transaction)
    {
        $transaction->load(['outlet', 'customer', 'transactionDetails.laundry']);
        $discount = $transaction->discount;
        $subTotalAsString = $transaction->subTotalAsString();
        $totalPriceAsString = $transaction->totalPriceAsString();
        foreach ($transaction->transactionDetails as $transactionDetail) {
            $totalPriceAsStringDetail = $transactionDetail->totalPriceAsString();
            $transactionDetail->totalPriceAsString = $totalPriceAsStringDetail;
        }

        $transaction->discount = $discount;
        $transaction->subTotalAsString = $subTotalAsString;
        $transaction->totalPriceAsString = $totalPriceAsString;

        try {
            $socket = new WebsocketClient(
                new SocketClient('ws://103.157.96.20:5544')
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
