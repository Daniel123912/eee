<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = [
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
    public function user()
    {
        return $this ->hasOne(User::class);
    }
}
