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
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'blog' => $this->faker->text,
            'status' => $this->faker->randomElement(['finished', 'pandding']),
            'location' => $this->faker->address,
            'date_line' => $this->faker->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
            'collected_trees' => $this->faker->numberBetween(0, 1000),
            'tree_required' => $this->faker->numberBetween(0, 1000),
            'image' => $this->faker->imageUrl(),
            'user_id' => $this->faker->uuid(),
        ];
    }
}
