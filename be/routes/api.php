<?php

use App\Http\Controllers\DonationController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VolunteerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::group(['middleware' => 'cors'], function () {
    Route::group(['middleware' => 'token'], function () {
        Route::get('/user', [UserController::class, 'index']);
        Route::put('/user', [UserController::class, 'update']);

        Route::post('/volunteer', [VolunteerController::class, 'create']);

        Route::get('/history', [HistoryController::class, 'index']);
    });
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'register']);

    Route::get('/donation', [DonationController::class, 'index']);
    Route::get('/donation/{id}', [DonationController::class, 'show']);
});
