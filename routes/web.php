<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\LaundryController;
use App\Http\Controllers\OutletController;
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
    Route::get('/', [UserController::class, 'index']);

    Route::delete('/users/block/{user}', [UserController::class, 'block'])->name('users.block');
    Route::resource('/users', UserController::class);

    Route::resource('/customers', CustomerController::class);

    Route::resource('/outlets', OutletController::class);

    Route::resource('/laundries', LaundryController::class);
});

require __DIR__ . '/auth.php';
