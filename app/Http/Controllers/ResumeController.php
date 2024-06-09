<?php

namespace App\Http\Controllers;

use App\Http\Requests\Resume as RequestsResume;
use Illuminate\Http\Request;
use App\Models\Resume;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ResumeController extends Controller
{
    public function store(RequestsResume $request)
    {

        
        // Валидация данных формы    $validated = $request->validate([
            $validated = $request->validated();

          // Создание резюме
          Resume::create(array_merge($validated, ['user_id' => auth()->id()]));   
        return Redirect::route('home');
        // Перенаправляем пользователя с сообщением об успешном сохранении
        // return redirect()->back()->with('success', 'Резюме успешно добавлено!');
    }
}

