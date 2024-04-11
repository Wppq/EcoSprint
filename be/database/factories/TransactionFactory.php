<?php

namespace Database\Factories;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Transaction::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'donation_id' => \App\Models\Donation::factory(),
            'amount' => $this->faker->randomFloat(2, 20000, 1000000),
            'payment_method' => $this->faker->randomElement(['BNI', 'BRI', 'BSI', 'GOPAY']),
            'status' => 'pending',
            'sender' => $this->faker->name,
            'image_path' => $this->faker->imageUrl(),
        ];
    }
}
