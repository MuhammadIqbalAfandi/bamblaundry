<?php

namespace App\Exports;

use App\Models\Transaction;
use App\Services\TransactionService;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class TransactionExport implements ShouldAutoSize, Responsable, FromView, WithStyles
{
    use Exportable;

    private $fileName = 'transaction-report.xls';

    public function __construct(private Request $request)
    {}

    public function view(): View
    {
        $transactions = Transaction::filter(request()->only('startDate', 'endDate', 'outlet'))
            ->get()
            ->groupBy('created_at')
            ->transform(fn($transactions) => [[
                'date' => $transactions->first()->getRawOriginal('created_at'),
                'createdAt' => $transactions->first()->created_at,
                'totalTransaction' => $transactions->count(),
                'totalPrice' => (new TransactionService)->totalPriceGroup($transactions),
            ]])
            ->flatten(1);

        return view('excel.transaction-report', compact('transactions'));
    }

    public function styles(Worksheet $sheet)
    {
        $lastRow = $sheet->getHighestDataRow();
        $lastSecondRow = $lastRow - 1;

        return [
            1 => [
                'font' => ['bold' => true, 'size' => 12],
                'alignment' => ['vertical' => 'center', 'horizontal' => 'center'],
            ],
            2 => [
                'font' => ['bold' => true, 'size' => 12],
                'alignment' => ['vertical' => 'center', 'horizontal' => 'center'],
            ],
            4 => [
                'font' => ['bold' => true],
            ],
            $lastRow => [
                'font' => ['bold' => true, 'size' => 12],
                'alignment' => ['horizontal' => 'left'],
            ],
            $lastSecondRow => [
                'font' => ['bold' => true, 'size' => 12],
                'alignment' => ['horizontal' => 'left'],
            ],
        ];
    }
}
