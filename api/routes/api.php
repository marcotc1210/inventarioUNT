<?php

use App\Http\Controllers\Api\DispositivoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Models\Api\Dispositivo;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


 
Route::controller(UserController::class)->group(function () {
    Route::get('/usuarios', 'index');
    Route::get('/usuario/{id}', 'show');
    Route::post('/usuario', 'store');
    Route::put('/usuario/{id}', 'update');
    Route::delete('/usuario/{id}', 'destroy');
});

// Route::controller(DispositivoController::class)->group(function () {
//     Route::get('/dispositivos', 'index');
//     Route::get('/dispositivo/{id}', 'show');
//     Route::post('/dispositivo', 'store');
//     Route::put('/dispositivo/{id}', 'update');
//     Route::delete('/dispositivo/{id}', 'destroy');
// });
