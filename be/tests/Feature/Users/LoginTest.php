<?php

namespace Tests\Feature\Users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use UserFactory;

class LoginTest extends TestCase
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
     * Test registration with valid data.
     *
     * @return void
     */
    public function test_login_with_valid_data()
    {
        User::factory()->create([
            "email" => "ecosprint@mail.com",
            "password" => "apaSajaPass",
        ]);
        $response = $this->postJson('/api/login', [
            "email" => "ecosprint@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'message' => [
                    'token',
                    'role'
                ]
            ]);
    }

    /**
     * Test registration with invalid data.
     *
     * @return void
     */
    public function test_login_with_invalid_data()
    {
        $response = $this->postJson('/api/login', [
            "email" => "Achmad@mail.com",
            "password" => "passwords"
        ]);

        $response->assertStatus(401)
            ->assertJson([
                "error" => "email or password are wrong.",
            ]);
    }
}
