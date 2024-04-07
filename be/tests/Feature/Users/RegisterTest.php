<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class RegisterTest extends TestCase
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
    public function test_registration_with_valid_data()
    {
        $response = $this->postJson('/api/register', [
            'name' => 'John Doe',
            'username' => 'johndoe',
            'password' => 'password123',
            'email' => 'johndoe@example.com',
            'address' => '123 Main St',
            'phone' => '1234567890',
            'role' => 'user'
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'message' => 'success create account'
            ]);
    }

    /**
     * Test registration with invalid data.
     *
     * @return void
     */
    public function test_registration_with_invalid_data()
    {
        $response = $this->postJson('/api/register', [
            "name" => "Achmad"
        ]);

        $response->assertStatus(422)
            ->assertJsonStructure([
                'username',
                'password',
                'email',
                'address',
                'phone'
            ]);
    }
}
