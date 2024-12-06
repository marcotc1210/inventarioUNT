<?php

use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\DispositivoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TipoController;
use App\Http\Controllers\Api\EstadoController;


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

Route::controller(DispositivoController::class)->group(function () {
    Route::get('/dispositivos', 'index');
    Route::get('/dispositivo/{id}', 'show');
    Route::post('/dispositivo', 'store');
    Route::put('/dispositivo/{id}', 'update');
    Route::delete('/dispositivo/{id}', 'destroy');
    // Route::get('/dispositivosX', 'indexComplex');
});

Route::controller(EstadoController::class)->group(function () {
    Route::get('/estados', 'index');
    Route::get('/estado/{id}', 'show');
    Route::post('/estado', 'store');
    Route::put('/estado/{id}', 'update');
    Route::delete('/estado/{id}', 'destroy');
});

Route::controller(TipoController::class)->group(function () {
    Route::get('/tipos', 'index');
    Route::get('/tipo/{id}', 'show');
    Route::post('/tipo', 'store');
    Route::put('/tipo/{id}', 'update');
    Route::delete('/tipo/{id}', 'destroy');
});

Route::controller(DataController::class)->group(function () {
    Route::get('/data/dashboard', 'getDashboardData');
});
