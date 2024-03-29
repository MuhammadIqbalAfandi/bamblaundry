<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\LaundryController;
use App\Http\Controllers\OutletController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportMutationController;
use App\Http\Controllers\ReportTransactionController;
use App\Http\Controllers\ThermalPrintingController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', DashboardController::class);

    Route::get('/dashboards', DashboardController::class);

    Route::delete('/users/block/{user}', [UserController::class, 'block'])->name('users.block');
    Route::post('/users/change-password/{user}', [UserController::class, 'changePassword'])->name('users.change-password');
    Route::resource('/users', UserController::class);

    Route::resource('/customers', CustomerController::class);
    Route::get('/reports/customers/export/excel', [CustomerController::class, 'exportExcel'])->name('customers.excel');

    Route::resource('/outlets', OutletController::class);

    Route::resource('/laundries', LaundryController::class);

    Route::resource('/products', ProductController::class);

    Route::resource('/discounts', DiscountController::class);

    Route::resource('/transactions', TransactionController::class);

    Route::resource('/expenses', ExpenseController::class);

    Route::get('/reports/mutations', [ReportMutationController::class, 'index']);
    Route::get('/reports/mutations/export/excel', [ReportMutationController::class, 'exportExcel'])->name('mutations.excel');

    Route::get('/reports/transactions', [ReportTransactionController::class, 'index']);
    Route::get('/reports/transactions/export/excel', [ReportTransactionController::class, 'exportExcel'])->name('transactions.excel');

    Route::get('/thermal-printing/{transaction:transaction_number}', ThermalPrintingController::class);
});

require __DIR__ . '/auth.php';
