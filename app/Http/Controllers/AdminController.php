<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function login(){
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'role'=>'admin']);
    }
    public function login_proccess(Request $request){
      $data = $request->validate([
        'email' => ['required', 'exists:admins,email'],
        'password' => ['required'],
      ]);

      if (auth()->guard('admin')->attempt($data)){
        return Redirect::route('adminMainPage');
    }
    
 }
 public function index(){
        return Inertia::render('Auth/Login',['role'=>'admin']);
    }
    public function adminpfof(){
      return Inertia::render('');
    }
}
