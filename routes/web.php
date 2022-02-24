<?php

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
    Route::get('/', function () {
        return inertia('user/Index');
    });

    Route::delete('/users/block/{user}', [UserController::class, 'block'])->name('users.block');
    Route::resource('/users', UserController::class);
});

require __DIR__ . '/auth.php';
