<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'full_name',
        'contact_info',
        'city',
        'professional_goal',
        'education',
        'work_experience',
        'skills',
        'courses',
        'languages',
        'additional_info',
        'salary',
        'age',
        'phone',
        'email',
        'github',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

