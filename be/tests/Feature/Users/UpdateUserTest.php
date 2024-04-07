<?php

namespace Tests\Feature\Users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateUserTest extends TestCase
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
    public function test_update_user_data(): void
    {
        User::factory()->create([
            "email" => "ecosprint4@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint4@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->putJson('/api/user', [
                    "name" => "Budi",
                    "username" => "budi1234",
                    'address' => '123 Main St',
                    'phone' => '1234567890',
                ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                "message" => "Successfully user updated."
            ]);
    }

    public function test_unauthentication()
    {

        $response = $this->putJson('/api/user');

        $response
            ->assertStatus(401)
            ->assertJson([
                "error" => "Unauthenticated."
            ]);
    }

    public function test_update_user_with_invalid_data()
    {
        User::factory()->create([
            "email" => "ecosprint5@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint5@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->putJson('/api/user', [
                    "name" => "Budi",
                ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                "username",
                "address",
                "phone"
            ]);
    }
}
