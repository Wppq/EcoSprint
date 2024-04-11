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
        $treeRequired = $this->faker->numberBetween(15, 1000);
        $collectedTrees = $this->faker->numberBetween(0, $treeRequired);
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'blog' => $this->faker->text,
            'status' => 'pending',
            'location' => $this->faker->address,
            'date_line' => $this->faker->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
            'collected_trees' => $collectedTrees,
            'tree_required' => $treeRequired,
            'image' => $this->faker->imageUrl(),
        ];
    }
}
