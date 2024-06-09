<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class indexController extends Controller
{
    public function index(){
        return Inertia::render('Mainhome');
    }
    public function browsejobs(){
        return Inertia::render('Browsejobs');
    }
    public function browseresumes(){
        return Inertia::render('Browseresumes');
    }
    public function browsecompanies(){
        return Inertia::render('Browsecompanies');
    }
    public function about(){
        return Inertia::render('About');
    }
    public function contact(){
        return Inertia::render('Contact');
    }
    public function faq(){
        return Inertia::render('Faq');
    }
    public function pricing(){
        return Inertia::render('Pricing');
    }
    public function recording(){
        return Inertia::render('Recording');
    }
    public function login(){
        return Inertia::render('Login');
    }
    public function companydetail(){
        return Inertia::render('Companydetail');
    }
    public function resume(){
        return Inertia::render('Resume');
    }
    public function addvacancyform(){
        return Inertia::render('Addvacancyform');
    }
    public function home()
    {
        return Inertia::render(
           
        );
    }
}
