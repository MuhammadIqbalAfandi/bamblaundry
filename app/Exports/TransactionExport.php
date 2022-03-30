<?php

namespace App\Exports;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class TransactionExport implements ShouldAutoSize, FromCollection
{
    public function __construct(private Request $request)
    {}

    public function collection()
    {
        $transaction = Transaction::filter($this->request->only('startDate', 'endDate', 'outlet'))->get();

        return $transaction;
    }

    // public function view(): View
    // {
    //     $startDate = $this->request->startDate;
    //     $endDate = $this->request->endDate;
    //     $mutations = Mutation::filter($startDate, $endDate)->get();

    //     return inertia('excel.dashboard.payment-report.index', [
    //         'mutations' => $mutations,
    //         'startDate' => Carbon::parse($startDate)->format('d/m/Y'),
    //         'endDate' => Carbon::parse($endDate)->subDay()->format('d/m/Y'),
    //     ]);
    // }

    // public function styles(Worksheet $sheet)
    // {
    //     $lastRow = $sheet->getHighestDataRow();
    //     $lastSecondRow = $lastRow - 1;

    //     $sheet->getRowDimension($lastSecondRow)->setRowHeight(16);

    //     return [
    //         1 => [
    //             'font' => ['bold' => true, 'size' => 16],
    //             'alignment' => ['vertical' => 'center', 'horizontal' => 'center'],
    //         ],
    //         3 => ['font' => ['bold' => true]],
    //         $lastSecondRow => ['font' => ['bold' => true, 'size' => 12]],
    //         $lastRow => [
    //             'font' => ['bold' => true, 'size' => 12],
    //             'alignment' => ['horizontal' => 'left'],
    //         ],
    //     ];
    // }
}
