<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\LaundryController;
use App\Http\Controllers\MutationController;
use App\Http\Controllers\OutletController;
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

Route::middleware(['auth'])->group(function () {
    Route::get('/', [TransactionController::class, 'index']);

    Route::delete('/users/block/{user}', [UserController::class, 'block'])->name('users.block');
    Route::resource('/users', UserController::class);

    Route::resource('/customers', CustomerController::class);

    Route::resource('/outlets', OutletController::class);

    Route::resource('/laundries', LaundryController::class);

    Route::resource('/transactions', TransactionController::class);

    Route::resource('/expenses', ExpenseController::class);

    Route::resource('/mutations', MutationController::class);

    Route::get('/thermal-printing/{transaction:transaction_number}', ThermalPrintingController::class);
});

require __DIR__ . '/auth.php';
