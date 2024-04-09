<?php

namespace Tests\Feature\Transaction;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetTransactionTest extends TestCase
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
    public function test_get_list_transaction(): void
    {
        User::factory()->create([
            "email" => "ecosprint14@mail.com",
            "password" => "apaSajaPass",
        ]);

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint14@mail.com",
            "password" => "apaSajaPass"
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->get('/api/transaction');

        $response->assertStatus(200);
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
}
