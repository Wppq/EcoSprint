<?php

namespace Tests\Feature\Donation;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetDonationTest extends TestCase
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
    public function test_get_donation_by_id(): void
    {
        $donations = Donation::factory()->count(2)->create([
            'user_id' => User::factory()->create()->id,
        ]);
        $response = $this->get('/api/donation/' . $donations[0]->id);
        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                "id",
                "title",
                "description",
                'blog',
                'status',
                'location',
                'date_line',
                'collected_trees',
                'tree_required',
                'image',
                'user_id',
            ]);
    }

    public function test_get_donation_not_found(): void
    {
        $donations = Donation::factory()->count(2)->create([
            'user_id' => User::factory()->create()->id,
        ]);
        $response = $this->get('/api/donation/' . $donations[0]->id . "aa");
        $response
            ->assertStatus(404)
            ->assertJsonStructure([
                "error"
            ])
            ->assertJson([
                'error' => 'Donation not found'
            ]);
    }
}
