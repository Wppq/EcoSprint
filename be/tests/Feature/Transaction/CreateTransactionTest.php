<?php

namespace Tests\Feature\Transaction;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateTransactionTest extends TestCase
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
    public function test_success_create_transaction(): void
    {
        $user = User::factory()->create([
            "email" => "ecosprint11@mail.com",
            "password" => "apaSajaPass",
        ]);

        $donation = Donation::factory()->create(
            ['user_id' => $user->id]
        );

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint11@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/transaction', [
                    'id' => $donation->id,
                    'amount' => 20000,
                    'payment_method' => 'BNI'
                ]);

        $response->assertStatus(201);
    }

    public function test_unauthentication()
    {

        $response = $this->postJson('/api/transaction');

        $response
            ->assertStatus(401)
            ->assertJson([
                "error" => "Unauthenticated."
            ]);
    }

    public function test_not_found(): void
    {
        User::factory()->create([
            "email" => "ecosprint12@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint12@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/transaction', [
                    'id' => 'blablabla',
                    'amount' => 20000,
                    'payment_method' => 'BNI'
                ]);

        $response->assertStatus(404);
    }

    public function test_invalid_input(): void
    {
        $user = User::factory()->create([
            "email" => "ecosprint13@mail.com",
            "password" => "apaSajaPass",
        ]);

        $donation = Donation::factory()->create(
            ['user_id' => $user->id]
        );

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint13@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/transaction', [
                    'id' => $donation->id,
                    'amount' => 1000,
                    'payment_method' => 'Mandiri'
                ]);

        $response->assertStatus(422);
    }
}
