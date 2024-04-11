<?php

namespace Database\Factories;

use App\Models\Volunteer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Volunteer>
 */
class VolunteerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Volunteer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = \App\Models\User::all();
        $donations = \App\Models\Donation::all();

        $user = $users->random();
        $donation = $donations->random();

        $existingVolunteer = Volunteer::where('user_id', $user->id)->where('donation_id', $donation->id)->first();

        while ($existingVolunteer) {
            $user = $users->random();
            $donation = $donations->random();
            $existingVolunteer = Volunteer::where('user_id', $user->id)->where('donation_id', $donation->id)->first();
        }

        return [
            'user_id' => $user->id,
            'donation_id' => $donation->id,
        ];
    }
}
