<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Models\Laundry;
use App\Models\Mutation;
use App\Models\Product;
use App\Models\Transaction;
use App\Services\ExpenseService;
use App\Services\MutationService;
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
        $transactions = Transaction::whereDate('created_at', date('Y-m-d'))->get();

        $expenses = Expense::whereDate('created_at', date('Y-m-d'))->get();

        $laundries = Laundry::get();

        $products = Product::get();

        $transactionChart = Transaction::get()->groupBy([
            fn($transaction) => Carbon::parse($transaction->getRawOriginal('created_at'))->format('Y'),
            fn($transaction) => Carbon::parse($transaction->getRawOriginal('created_at'))->format('M'),
        ]);

        $mutationChart = Mutation::whereYear('created_at', date('Y'))
            ->get()
            ->groupBy([
                fn($mutation) => $mutation->type,
                fn($mutation) => Carbon::parse($mutation->getRawOriginal('created_at'))->format('M'),
            ]);

        $transactionOutletChart = Transaction::whereYear('created_at', date('Y'))
            ->whereMonth('created_at', date('m'))
            ->get()
            ->groupBy([
                fn($transaction) => Carbon::parse($transaction->getRawOriginal('created_at'))->format('M'),
                fn($transaction) => $transaction->outlet->name,
            ]);

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
                    'amount' => $laundries->count(),
                    'amountLabel' => __('words.total'),
                ],
                [
                    'title' => __('words.product_type'),
                    'icon' => 'pi pi-table',
                    'amount' => $products->count(),
                    'amountLabel' => __('words.total'),
                ],
            ],
            'chartTransactionStatistics' => [
                'transaction' => [
                    'title' => __('words.transaction_statistic'),
                    'description' => __('words.per_year') . ' ' . now()->subYear(1)->format('Y') . '-' . date('Y'),
                    'data' => (new TransactionService)->statisticData($transactionChart, -2),
                ],
                'transactionMutation' => [
                    'title' => __('words.mutation_statistic'),
                    'description' => __('words.per_year') . ' ' . date('Y'),
                    'data' => (new MutationService)->statisticData($mutationChart, -2),
                ],
            ],
            'chartOutletStatistic' => [
                'title' => __('words.transaction_outlet_statistic'),
                'description' => Carbon::parse(date('Y-m-d'))->translatedFormat('F, Y'),
                'data' => (new TransactionService)->statisticData($transactionOutletChart)->first(),
            ],
        ]);
    }
}
