<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Laundry;
use App\Models\Product;
use App\Models\Transaction;
use App\Services\ExpenseService;
use App\Services\TransactionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function __invoke(Request $request)
    {
        $transactions = Transaction::filter(['startDate' => today()])->get();
        $expenses = Expense::filter(['startDate' => today()])->get();
        $laundries = Laundry::get();
        $products = Product::get();

        return inertia('home/Index', [
            'cardStatistics' => [
                [
                    'label' => __('words.transaction'),
                    'icon' => 'pi pi-shopping-cart',
                    'amount' => $transactions->count(),
                    'amountLabel' => __('words.today'),
                    'value' => (new TransactionService)->totalPriceGroupAsString($transactions),
                ],
                [
                    'label' => __('words.expense'),
                    'icon' => 'pi pi-wallet',
                    'amount' => $expenses->count(),
                    'amountLabel' => __('words.today'),
                    'value' => (new ExpenseService)->totalPriceAsString($expenses),
                ],
                [
                    'label' => __('words.laundry_type'),
                    'icon' => 'pi pi-table',
                    'amountLabel' => __('words.total'),
                    'amount' => $laundries->count(),
                ],
                [
                    'label' => __('words.product_type'),
                    'icon' => 'pi pi-table',
                    'amountLabel' => __('words.total'),
                    'amount' => $products->count(),
                ],
            ],
            'chartStatistics' => [
                [
                    'label' => __('words.transaction_statistic'),
                    'data' => $transactions->groupBy([])
                ],
            ],
        ]);
    }
}
