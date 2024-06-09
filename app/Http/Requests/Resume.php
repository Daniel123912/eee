<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Resume extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
           'full_name' => 'required|string|max:255',
            'contact_info' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'professional_goal' => 'nullable|string',
            'education' => 'nullable|string',
            'work_experience' => 'nullable|string',
            'skills' => 'nullable|string',
            'courses' => 'nullable|string',
            'languages' => 'nullable|string',
            'additional_info' => 'nullable|string',
            'salary' => 'nullable|integer',
            'age' => 'nullable|integer',
            'phone' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255',
            'github' => 'nullable|string|max:255',
        ];
    }
}
