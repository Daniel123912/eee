<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::prefix('admin')->group(function(){

    Route::get('/login', [AdminController::class, 'index']);
    Route::post('/login', [AdminController::class, 'login_proccess'] )->name('loginAdmin');
    Route::middleware('auth:admin')->group(function(){

    });
});


