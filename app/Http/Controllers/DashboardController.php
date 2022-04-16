<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Laundry;
use App\Models\Product;
use App\Models\Transaction;
use App\Services\ExpenseService;
use App\Services\TransactionService;
use Carbon\Carbon;
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

        $transactionChartStatistic = Transaction::get()->groupBy([
            fn($transaction) => Carbon::parse($transaction->getRawOriginal('created_at'))->format('Y'),
            fn($transaction) => Carbon::parse($transaction->getRawOriginal('created_at'))->format('M'),
        ]);

        $expenseChartStatistic = Expense::get()->groupBy([
            fn($expense) => Carbon::parse($expense->getRawOriginal('created_at'))->format('Y'),
            fn($expense) => Carbon::parse($expense->getRawOriginal('created_at'))->format('M'),
        ]);

        $transactionOutletChartStatistic = Transaction::get()->groupBy('outlet.name');

        return inertia('home/Index', [
            'cardStatistics' => [
                [
                    'title' => __('words.transaction'),
                    'icon' => 'pi pi-shopping-cart',
                    'amount' => $transactions->count(),
                    'amountLabel' => __('words.today'),
                    'value' => (new TransactionService)->totalPriceGroupAsString($transactions),
                ],
                [
                    'title' => __('words.expense'),
                    'icon' => 'pi pi-wallet',
                    'amount' => $expenses->count(),
                    'amountLabel' => __('words.today'),
                    'value' => (new ExpenseService)->totalPriceAsString($expenses),
                ],
                [
                    'title' => __('words.laundry_type'),
                    'icon' => 'pi pi-table',
                    'amountLabel' => __('words.total'),
                    'amount' => $laundries->count(),
                ],
                [
                    'title' => __('words.product_type'),
                    'icon' => 'pi pi-table',
                    'amountLabel' => __('words.total'),
                    'amount' => $products->count(),
                ],
            ],
            'transactionStatistics' => [
                [
                    'title' => __('words.transaction_statistic'),
                    'data' => (new TransactionService)->statisticData($transactionChartStatistic),
                ],
                [
                    'title' => __('words.expense_statistic'),
                    'data' => (new ExpenseService)->statisticData($expenseChartStatistic),
                ],
            ],
            'transactionOutletStatistics' => [
                'title' => __('words.transaction_outlet_statistic'),
                'data' => (new TransactionService)->totalPerMonth($transactionOutletChartStatistic),
            ],
        ]);
    }
}
