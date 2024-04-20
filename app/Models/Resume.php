<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'headline',
        'description',
        'location',
        'website',
        'salary',
        'age',
        'phone',
        'email',
        'facebook',
        'google_plus',
        'dribbble',
        'pinterest',
        'twitter',
        'github',
        'instagram',
        'youtube',
    ];

    public function resume()
    {
        return $this->belongsTo(User::class); // 'user_id' - это имя столбца в таблице resumes, связывающее с таблицей users
    }
}
