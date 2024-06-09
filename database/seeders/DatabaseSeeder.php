<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\AdminModels;
use App\Models\User;
use Database\Factories\AdminFactory;
use Database\Factories\AdminModelsFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
            
        // ]);
        AdminModels::factory(1)->create([
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('12345678'),
            ]);
    }
}
