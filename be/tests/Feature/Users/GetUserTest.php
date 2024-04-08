<?php

namespace Tests\Feature\Users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetUserTest extends TestCase
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
    public function test_get_user_success()
    {
        User::factory()->create([
            "email" => "ecosprint1@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint1@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->get('/api/user');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'name',
                'username',
                'address',
                'phone'
            ]);
    }

    public function test_unauthentication()
    {

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . "salah",
        ])->get('/api/user');

        $response
            ->assertStatus(401)
            ->assertJson([
                "error" => "Unauthenticated."
            ]);
    }
}
