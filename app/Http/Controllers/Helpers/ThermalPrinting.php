<?php

namespace App\Http\Controllers\Helpers;

use App\Models\Transaction;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;
use Mike42\Escpos\Printer;

class ThermalPrinting
{
    public function __construct(private Transaction $transaction)
    {}

    public function startPrinting(int $repeat = 1)
    {
        if ($repeat >= 1) {
            /* Start the printer */
            $connector = new FilePrintConnector("/dev/usb/lp1"); // Port usb connection example: /dev/usb/lp1
            $printer = new Printer($connector);

            /* Brand */
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->selectPrintMode(Printer::MODE_DOUBLE_WIDTH);
            $printer->text("BAMB'S LAUNDRY\n");
            $printer->selectPrintMode();
            $printer->feed();

            /* Unique Id */
            $printer->text('ID TRANSAKSI' . "\n");
            $printer->setBarcodeTextPosition(Printer::BARCODE_TEXT_BELOW);
            $printer->setBarcodeHeight(48);
            $printer->setBarcodeWidth(2);
            $printer->barcode("{B" . $this->transaction->transaction_number, Printer::BARCODE_CODE128);
            $printer->feed();

            /* Title of receipt */
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer->setLineSpacing(6);
            $printer->setEmphasis(true);
            $printer->text("DETAIL TRANSAKSI\n");
            $printer->setEmphasis(false);
            $printer->setLineSpacing();
            $printer->feed();
            $printer->text("WAKTU      : " . strtoupper($this->transaction->created_at) . "\n");
            $printer->text("OUTLET     : {$this->transaction->outlet->name}\n");
            $printer->text("ID KUSTOMER: {$this->transaction->customer->customer_number}\n");
            $printer->feed();

            /* Detail Transaction */
            $titleType = str_pad("Jenis Laundry", 20);
            $titleQty = str_pad("Qty", 7);
            $titlePrice = str_pad("@", 11);
            $titleTotalPrice = str_pad("Harga", 10, ' ', STR_PAD_LEFT);
            $printer->text("$titleType$titleQty$titlePrice$titleTotalPrice\n");
            foreach ($this->transaction->transactionDetails as $transactionDetail) {
                $type = str_pad("{$transactionDetail->laundry->name}/{$transactionDetail->laundry->unit}", 20);
                $qty = str_pad("{$transactionDetail->quantity}", 7);
                $price = str_pad("{$transactionDetail->price}", 11);
                $totalPrice = str_pad("{$transactionDetail->totalPriceAsString()}", 10, ' ', STR_PAD_LEFT);
                $printer->text("$type$qty$price$totalPrice\n");
                $printer->text("DISKON: {$transactionDetail->discount}\n");
            }

            /* Discount and total */
            $printer->feed();
            $printer->text($this->textSpacing('SUBTOTAL', $this->transaction->subTotalAsString()));
            $printer->text($this->textSpacing('DISKON', $this->transaction->discount));
            $printer->setEmphasis(true);
            $printer->text($this->textSpacing('TOTAL', "Rp{$this->transaction->totalPriceAsString()}"));
            $printer->setEmphasis(false);
            $printer->feed();

            /* Footer */
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->text("** TERIMA KASIH **\n");
            $printer->feed();

            /* Cut the receipt */
            $printer->cut();
            $printer->close();

            $this->startPrinting($repeat - 1);
        }
    }

    public function textSpacing(string $name, string $price)
    {
        $left = str_pad($name, 20);

        $right = str_pad($price, 28, ' ', STR_PAD_LEFT);

        return "$left$right\n";
    }
}
