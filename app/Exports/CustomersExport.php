<?php

namespace App\Exports;

use App\Models\Customer;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class CustomersExport implements ShouldAutoSize, Responsable, FromView, WithStyles
{
    use Exportable;

    private $fileName = 'customers-report.xls';

    public function __construct(private Request $request)
    {}

    public function view(): View
    {
        $customers = Customer::filter($this->request->only('search'))->get();
        return view('excel.customer-report', compact('customers'));
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 12],
                'alignment' => ['vertical' => 'center', 'horizontal' => 'center'],
            ],
            3 => [
                'font' => ['bold' => true],
            ],
            'E' => ['alignment' => ['horizontal' => 'left']],
        ];
    }
}
