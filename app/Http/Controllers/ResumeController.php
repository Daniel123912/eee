<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resume; 

class ResumeController extends Controller
{
    public function store(Request $request)
    {
        // Validate the form data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'headline' => 'required|string',
            'description' => 'nullable|string',
            'location' => 'nullable|string',
            'website' => 'nullable|url',
            'salary' => 'nullable|numeric',
            'age' => 'nullable|integer',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'facebook' => 'nullable|url',
            'google_plus' => 'nullable|url',
            'dribbble' => 'nullable|url',
            'pinterest' => 'nullable|url',
            'twitter' => 'nullable|url',
            'github' => 'nullable|url',
            'instagram' => 'nullable|url',
            'youtube' => 'nullable|url',
        ]);
        

        
        $resume = new Resume();
        $resume->fill($validatedData);

    
        $resume->save();
        
        return redirect()->back()->with('success', 'Resume submitted successfully!');
    }
}
