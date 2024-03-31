<?php

namespace Database\Factories;

use App\Models\Donation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Donation>
 */
class DonationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Donation::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'exp_date' => $this->faker->date(),
            'collected_trees' => $this->faker->numberBetween(0, 50),
            'tree_required' => $this->faker->numberBetween(50, 100),
            'image' => $this->faker->imageUrl(),
        ];
    }
}
