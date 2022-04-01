<?php

namespace App\Http\Controllers;

use App\Exports\MutationExport;
use App\Http\Controllers\Controller;
use App\Models\Mutation;
use App\Models\Outlet;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportMutationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('mutation/Report', [
            'filters' => request()->all('startDate', 'endDate', 'outlet'),
            'mutations' => Mutation::filter(request()->only('startDate', 'endDate', 'outlet'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
                ->through(fn($mutation) => [
                    'createdAt' => $mutation->created_at,
                    'outlet' => $mutation->outlet->name,
                    'amount' => $mutation->amount,
                    'type' => $mutation->type,
                    'transactionId' => $mutation->transaction_id,
                    'expenseId' => $mutation->expense_id,
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
        return Excel::download(new MutationExport(request()), 'report-mutation.xls');
    }
}
