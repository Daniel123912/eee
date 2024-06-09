<?php

namespace App\Models;
use Illuminate\Notifications\Notifiable;;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminModels extends Model
{
    use HasFactory, Notifiable, HasApiTokens;
    
    public $timestamps = false;

    protected $guard = 'admin';

    protected $fillabel = [
        'name',
        'email',
        'password',
        'status'
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
