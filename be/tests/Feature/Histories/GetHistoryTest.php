<?php

namespace Tests\Feature\Histories;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetHistoryTest extends TestCase
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
    public function test_success_get_list_history(): void
    {
        $user = User::factory()->create([
            "email" => "ecosprint10@mail.com",
            "password" => "apaSajaPass",
        ]);

        $donation = Donation::factory()->create(
            ['user_id' => $user->id]
        );

        $token = $this->postJson('/api/login', [
            "email" => "ecosprint10@mail.com",
            "password" => "apaSajaPass"
        ]);

        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->postJson('/api/volunteer', [
                    'id' => $donation->id,
                ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token['token'],
        ])->get('/api/history');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                "*" => [
                    'id',
                    'type',
                    'title',
                    'score',
                    'status',
                ]
            ]);
    }
}
