<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $donations = Donation::all();
        for ($i = 0; $i < 15; $i++) {
            $user = $users->random();
            $donation = $donations->random();
            if ($user->role !== "admin") {
                Transaction::factory()->create([
                    'user_id' => $user->id,
                    'donation_id' => $donation->id,
                ]);
            }
        }
    }
}
