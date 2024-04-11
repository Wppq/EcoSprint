<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory([
            'email' => 'ecosprint@mail.com',
            'password' => 'password',
            'role' => 'admin'
        ])->create();

        User::factory([
            'email' => 'siapa@mail.com',
            'password' => 'password',
            'role' => 'user'
        ])->create();

        User::factory([
            'email' => 'saha@mail.com',
            'password' => 'password',
            'role' => 'user'
        ])->create();

        User::factory([
            'email' => 'budi@mail.com',
            'password' => 'password',
            'role' => 'user'
        ])->create();
    }
}
