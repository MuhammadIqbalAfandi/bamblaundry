<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Http\Requests\Transaction\UpdateTransactionRequest;
use App\Models\Customer;
use App\Models\Laundry;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;
use Mike42\Escpos\Printer;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('transaction/Index', [
            'transactions' => Transaction::latest()
                ->filter(request()->only(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($transaction) => [
                    'id' => $transaction->id,
                    'transactionNumber' => $transaction->transaction_number,
                    'dateLaundry' => $transaction->created_at,
                    'customer' => [
                        'number' => $transaction->customer->customer_number,
                        'name' => $transaction->customer->name,
                        'phone' => $transaction->customer->phone,
                    ],
                    'price' => $transaction->totalPrice(),
                    'outlet' => $transaction->outlet->name,
                    'transactionStatusName' => $transaction->transactionStatus->name,
                    'transactionStatusId' => $transaction->transactionStatus->id,
                ]),
            'transactionsStatus' => TransactionStatus::all()
                ->transform(fn($transactionStatus) => [
                    'label' => $transactionStatus->name,
                    'value' => $transactionStatus->id,
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return inertia('transaction/Create', [
            'transactionNumber' => 'TS' . now()->format('YmdHis'),
            'customers' => fn() => Customer::latest()
                ->filter(request('customer'))
                ->get()
                ->transform(fn($customer) => [
                    'id' => $customer->id,
                    'name' => $customer->name,
                    'customerNumber' => $customer->customer_number,
                    'phone' => $customer->phone,
                ]),
            'laundries' => fn() => Laundry::latest()
                ->filter(request('laundry'))
                ->get()
                ->transform(fn($laundry) => [
                    'id' => $laundry->id,
                    'name' => $laundry->name,
                    'unit' => $laundry->unit,
                    'price' => $laundry->getRawOriginal('price'),
                ]),
            'customerNumber' => fn() => 'CS' . now()->format('YmdHis'),
            'genders' => [
                ['label' => 'Perempuan', 'value' => 1],
                ['label' => 'Laki-laki', 'value' => 2],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTransactionRequest $request)
    {
        DB::beginTransaction();

        try {
            $transaction = Transaction::create([
                'transaction_number' => $request->transaction_number,
                'discount' => $request->discount_all,
                'transaction_status_id' => 1,
                'user_id' => $request->user()->id,
                'customer_id' => $request->customer_id,
                'outlet_id' => $request->user()->outlet_id,
            ]);

            foreach ($request->laundries as $laundry) {
                $transaction->transactionDetails()->create([
                    'price' => $laundry['price'],
                    'discount' => $laundry['discount'],
                    'quantity' => $laundry['quantity'],
                    'laundry_id' => $laundry['laundryId'],
                ]);
            }

            DB::commit();

            // /* Information for the receipt */
            // $items = array(
            //     new item("Example item #1", "4.00"),
            //     new item("Another thing", "3.50"),
            //     new item("Something else", "1.00"),
            //     new item("A final item", "4.45"),
            // );
            // $subtotal = new item('Subtotal', '12.95');
            // $tax = new item('A local tax', '1.30');
            // $total = new item('Total', '14.25', true);
            // /* Date is kept the same for testing */
            // // $date = date('l jS \of F Y h:i:s A');
            // $date = "Monday 6th of April 2015 02:56:25 PM";

            // /* Start the printer */
            // // $logo = EscposImage::load(public_path('images/escpos-php.png'), false);
            // $connector = new FilePrintConnector("/dev/usb/lp1");
            // $printer = new Printer($connector);

            // /* Print top logo */
            // $printer->setJustification(Printer::JUSTIFY_CENTER);
            // // $printer->graphics($logo);

            // /* Name of shop */
            // $printer->selectPrintMode(Printer::MODE_DOUBLE_WIDTH);
            // $printer->text("ExampleMart Ltd.\n");
            // $printer->selectPrintMode();
            // $printer->text("Shop No. 42.\n");
            // $printer->feed();

            // /* Title of receipt */
            // $printer->setEmphasis(true);
            // $printer->text("SALES INVOICE\n");
            // $printer->setEmphasis(false);

            // /* Items */
            // $printer->setJustification(Printer::JUSTIFY_LEFT);
            // $printer->setEmphasis(true);
            // $printer->text(new item('', '$'));
            // $printer->setEmphasis(false);
            // foreach ($items as $item) {
            //     $printer->text($item);
            // }
            // $printer->setEmphasis(true);
            // $printer->text($subtotal);
            // $printer->setEmphasis(false);
            // $printer->feed();

            // /* Tax and total */
            // $printer->text($tax);
            // $printer->selectPrintMode(Printer::MODE_DOUBLE_WIDTH);
            // $printer->text($total);
            // $printer->selectPrintMode();

            // /* Footer */
            // $printer->feed(2);
            // $printer->setJustification(Printer::JUSTIFY_CENTER);
            // $printer->text("Thank you for shopping at ExampleMart\n");
            // $printer->text("For trading hours, please visit example.com\n");
            // $printer->feed(2);
            // $printer->text($date . "\n");

            // /* Cut the receipt and open the cash drawer */
            // $printer->cut();
            // $printer->pulse();

            // $printer->close();

            $transaction = Transaction::latest()->first();

            $connector = new FilePrintConnector("/dev/usb/lp1");
            $printer = new Printer($connector);

            /* Brand */
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->selectPrintMode(Printer::MODE_DOUBLE_WIDTH);
            $printer->text("BAMB'S LAUNDRY \n");
            $printer->selectPrintMode();
            $printer->feed();

            /* Unique Id */
            $printer->barcode($transaction->transaction_number, Printer::BARCODE_CODE39);
            $printer->text("Id Transaksi: {$transaction->transaction_number} \n");
            $printer->feed(2);

            /* Title of receipt */
            $printer->setEmphasis(true);
            $printer->text("DETAIL TRANSAKSI\n");
            $printer->setEmphasis(false);

            /* Footer */
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->text("** Terima Kasih ** \n");
            $printer->feed();
            $printer->text($transaction->created_at . "\n");

            /* Cut the receipt */
            $printer->cut();
            $printer->pulse();

            $printer->close();

            return to_route('transactions.index')->with('success', __('messages.success.store.transaction'));
        } catch (QueryException $e) {
            return back()->with('error', __('messages.error.store.transaction'));

            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Int  $id
     * @return \Inertia\Response
     */
    public function show(Transaction $transaction)
    {
        return inertia('transaction/Show', [
            'transaction' => [
                'number' => $transaction->transaction_number,
                'statusId' => $transaction->transactionStatus->id,
                'status' => $transaction->transactionStatus->name,
                'discount' => $transaction->discount,
                'price' => $transaction->totalPrice(),
                'dateLaundry' => $transaction->created_at,
            ],
            'customer' => [
                'number' => $transaction->customer->customer_number,
                'name' => $transaction->customer->name,
                'phone' => $transaction->customer->phone,
                'address' => $transaction->customer->address,
            ],
            'outlet' => [
                'name' => $transaction->outlet->name,
                'address' => $transaction->outlet->address,
            ],
            'transactionDetails' => $transaction->transactionDetails
                ->transform(fn($transactionDetail) => [
                    'laundry' => "{$transactionDetail->laundry->name} {$transactionDetail->laundry->price}/{$transactionDetail->laundry->unit}",
                    'quantity' => $transactionDetail->quantity,
                    'discount' => $transactionDetail->discount,
                    'price' => $transactionDetail->price,
                    'totalPrice' => $transactionDetail->totalPrice(),
                ]),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->validated());

        return back()->with('success', __('messages.success.update.transaction_status'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

class item
{
    private $name;
    private $price;
    private $dollarSign;

    public function __construct($name = '', $price = '', $dollarSign = false)
    {
        $this->name = $name;
        $this->price = $price;
        $this->dollarSign = $dollarSign;
    }

    public function __toString()
    {
        $rightCols = 10;
        $leftCols = 38;
        if ($this->dollarSign) {
            $leftCols = $leftCols / 2 - $rightCols / 2;
        }
        $left = str_pad($this->name, $leftCols);

        $sign = ($this->dollarSign ? '$ ' : '');
        $right = str_pad($sign . $this->price, $rightCols, ' ', STR_PAD_LEFT);
        return "$left$right\n";
    }
}
