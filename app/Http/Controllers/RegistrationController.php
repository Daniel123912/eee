<?php
// app/Http/Controllers/RegistrationController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Inertia\Inertia;

class RegistrationController extends Controller
{

    public function recording(){
        return Inertia::render('Recording');
    }
    public function register(Request $request)
    {
        // dd($request);
        // Валидация данных
        $validatedData = $request->validate([
            'surname' => 'required|string',
            'name' => 'required|string',
             'patronymic' => 'nullable|string',
             'job' => 'nullable|string',
             'country' => 'nullable|string',
            'inn' => 'nullable|string',
            'passport' => 'nullable|string',
            'password' => 'required|string',
            'phone_number' => 'required|string',
            'email' => 'required|email',
            'telegram' => 'nullable|string',
        ]);
        
        // Создание пользователя с использованием массового заполнения
        $user = Contact::create($validatedData);

        // Редирект или ответ
        return redirect()->back()->with('success', 'Регистрация прошла успешно!');
    }
    
}
// class RegistrationController extends Controller
// {
//     public function register(Request $request)
//     {
//         // Валидация данных
//         $validatedData = $request->validate([
//             'surname' => 'required|string',
//             'name' => 'required|string',
//             'patronymic' => 'nullable|string',
//             'job' => 'required|string',
//             'country' => 'required|string',
//             'inn' => 'nullable|string',
//             'passport' => 'nullable|string',
//             'phone_number' => 'required|string',
//             'email' => 'required|email',
//             'telegram' => 'nullable|string',
//         ]);
//         $user =User::create(validatedData);
//         // Создание пользователя
//         // $user = new User();
//         // $user->surname = $validatedData['surname'];
//         // $user->name = $validatedData['name'];
//         // $user->patronymic = $validatedData['patronymic'] ?? null;
//         // $user->job = $validatedData['job'];
//         // $user->country = $validatedData['country'];
//         // $user->inn = $validatedData['inn'] ?? null;
//         // $user->passport = $validatedData['passport'] ?? null;
//         // $user->phone_number = $validatedData['phone_number'];
//         // $user->email = $validatedData['email'];
//         // $user->telegram = $validatedData['telegram'] ?? null;
//         // $user->save();

//         // Редирект или ответ
//         return redirect()->back()->with('success', 'Регистрация прошла успешно!');
//     }
// }
