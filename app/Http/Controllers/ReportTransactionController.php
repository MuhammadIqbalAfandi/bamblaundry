<?php

namespace App\Http\Controllers;

use App\Exports\TransactionExport;
use App\Models\Outlet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('transaction/Report', [
            'filters' => request()->all('startDate', 'endDate', 'outlet'),
            'transactions' => Transaction::latest()
                ->filter(request()->only('startDate', 'endDate', 'outlet'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn($transaction) => [
                    'id' => $transaction->id,
                    'transactionNumber' => $transaction->transaction_number,
                    'createdAt' => $transaction->created_at,
                    'outlet' => $transaction->outlet->name,
                    'price' => $transaction->totalPriceAsFullString(),
                    'transactionStatusName' => $transaction->transactionStatus->name,
                    'transactionStatusId' => $transaction->transactionStatus->id,
                    'user' => $transaction->user->name,
                ]),
            'outlets' => Outlet::all()
                ->transform(fn($outlet) => [
                    'label' => $outlet->name,
                    'value' => $outlet->id,
                ]),
        ]);
    }

    /**
     * Export to excel
     */
    public function exportExcel()
    {
        return Excel::download(new TransactionExport(request()), 'report-transaction.xls');
    }
}
