<?php

namespace App\Http\Controllers;

use App\Exports\TransactionExport;
use App\Models\Outlet;
use App\Models\Transaction;
use App\Services\TransactionService;
use Illuminate\Support\Facades\Gate;
use Inertia\Controller;
use Inertia\Inertia;

class ReportTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        if (Gate::allows('isOutletHead')) {
            request()->merge(['outlet' => request()->user()->outlet_id]);
        } else if (Gate::allows('isEmployee')) {
            request()->merge(['outlet' => request()->user()->outlet_id]);
        }

        $transactions = Transaction::filter(request()->only('startDate', 'endDate', 'outlet'))->get();

        $transactionGroupBy = $transactions->groupBy('created_at')
            ->transform(fn($transactions) => [[
                'date' => $transactions->first()->getRawOriginal('created_at'),
                'createdAt' => $transactions->first()->created_at,
                'totalTransaction' => $transactions->count(),
                'totalPrice' => (new TransactionService)->totalPriceGroupAsString($transactions),
            ]])
            ->flatten(1)
            ->toArray();

        $transaction = (new TransactionService)->getPaginator($transactionGroupBy);

        return inertia('transaction/Report', [
            'filters' => request()->all('startDate', 'endDate', 'outlet'),
            'transactions' => Inertia::lazy(
                fn() => [
                    'totalTransaction' => $transactions->count(),
                    'totalAmount' => (new TransactionService)->totalPriceGroupAsString($transactions),
                    'details' => $transaction,
                ]
            ),
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
        return new TransactionExport(request());
    }
}
