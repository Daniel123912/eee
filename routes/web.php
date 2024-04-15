<?php

use App\Http\Controllers\indexController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\ResumeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
Route::get('/', [indexController::class, 'index'])->name('home');
Route::get('/browsejobs', [indexController::class, 'browsejobs'])->name('browsejobs');
Route::get('/browseresumes', [indexController::class, 'browseresumes'])->name('browseresumes');
Route::get('/browsecompanies', [indexController::class, 'browsecompanies'])->name('browsecompanies');
Route::get('/about', [indexController::class, 'about'])->name('about');
Route::get('/contact', [indexController::class, 'contact'])->name('contact'); //contact
Route::get('/faq', [indexController::class, 'faq'])->name('faq');
Route::get('/pricing', [indexController::class, 'pricing'])->name('pricing');
Route::get('/recording', [indexController::class, 'recording'])->name('recording'); //recording
Route::get('/resume', [indexController::class, 'resume'])->name('resume');
Route::post('/resume', [ResumeController::class, 'store'])->name('resumes.store');

Route::get('/recording', [RegistrationController::class, 'recording'])->name('recording');
Route::get('/companydetail', [indexController::class, 'companydetail'])->name('companydetail');



