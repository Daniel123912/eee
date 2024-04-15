<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'surname' => 'required|string',
            // 'name' => 'required|string',
            'name' => 'required|string|max:255',
            'patronymic' => 'nullable|string',
            'job' => 'nullable|string',
            'country' => 'nullable|string',
            'inn' => 'nullable|string',
            'passport' => 'nullable|string',
            'phone_number' => 'required|string',
            // 'email' => 'required|email',
            'telegram' => 'nullable|string',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'surname' => $request->surname,
            'patronymic' => $request->patronymic,
            'job' => $request->job,
            'country' => $request->country,
            'inn' => $request->inn,
            'passport' => $request->passport,
            'phone_number' => $request->phone_number,
            'name' => $request->name,
            'telegram' => $request->telegram,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Models\Contact;
// use App\Models\Сontact;
// use Illuminate\Auth\Events\Registered;
// use Illuminate\Http\RedirectResponse;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Validation\Rules;
// use Inertia\Inertia;
// use Inertia\Response;

// class RegisteredUserController extends Controller
// {
//     /**
//      * Display the registration view.
//      */
//     public function create(): Response
//     {
//         return Inertia::render('Auth/Register');
//     }

//     /**
//      * Handle an incoming registration request.
//      *
//      * @throws \Illuminate\Validation\ValidationException
//      */
//     public function store(Request $request): RedirectResponse
//     {
//         $request->validate([
//             'surname' => 'required|string|max:255',
//             'name' => 'required|string|max:255',
//             'patronymic' => 'nullable|string|max:255',
//             'job' => 'nullable|string|max:255',
//             'country' => 'nullable|string|max:255',
//             'inn' => 'nullable|string|max:255',
//             'passport' => 'nullable|string|max:255',
//             'phone_number' => 'nullable|string|max:255',
//             'email' => 'required|string|lowercase|email|max:255|unique:users',
//             'telegram' => 'nullable|string|max:255',
//             'password' => ['required', 'confirmed', Rules\Password::defaults()],
//         ]);

//         $user = Contact::create([
//             'surname' => $request->surname,
//             'name' => $request->name,
//             'patronymic' => $request->patronymic,
//             'job' => $request->job,
//             'country' => $request->country,
//             'inn' => $request->inn,
//             'passport' => $request->passport,
//             'phone_number' => $request->phone_number,
//             'email' => $request->email,
//             'telegram' => $request->telegram,
//             'password' => Hash::make($request->password),
//         ]);

//         event(new Registered($user));

//         Auth::login($user);

//         return redirect(route('dashboard', absolute: false));
//     }
// }
