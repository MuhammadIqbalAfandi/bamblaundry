<?php

namespace App\Http\Controllers;

use App\Exports\TransactionExport;
use App\Models\Outlet;
use App\Models\Transaction;
use Carbon\Carbon;
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
            'transactions' => Transaction::filter(request()->only('startDate', 'endDate', 'outlet'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
                ->through(fn($transaction) => [
                    'startDate' => Carbon::parse($transaction->getRawOriginal('created_at'))->translatedFormat('Y-m-d'),
                    'createdAt' => $transaction->created_at,
                    'price' => $transaction->totalPriceAsFullString(),
                ])
            ,
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
