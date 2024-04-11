<?php

namespace Tests\Feature\Volunteers;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateVolunteerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        cache()->clear();
    }

    protected function tearDown(): void
    {
        cache()->clear();
    }
    /**
     * A basic feature test example.
     */
    public function test_success_create_volunteer(): void
    {
        $user = User::factory()->create([
            "email" => "ecosprint7@mail.com",
            "password" => "apaSajaPass",
        ]);

        $donation = Donation::factory()->create(
            ['user_id' => $user->id]
        );

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint7@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/volunteer', [
                    'id' => $donation->id,
                ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'message' => 'Successfully joined the activity as a volunteer',
            ]);

    }

    public function test_unauthentication()
    {

        $response = $this->postJson('/api/volunteer');

        $response
            ->assertStatus(401)
            ->assertJson([
                "error" => "Unauthenticated."
            ]);
    }

    public function test_not_found()
    {
        User::factory()->create([
            "email" => "ecosprint8@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint8@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/volunteer', [
                    'id' => 'blablabla',
                ]);
        $response
            ->assertStatus(404)
            ->assertJson([
                "message" => "Donation not found."
            ]);
    }
}
