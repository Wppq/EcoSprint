<?php

namespace Tests\Feature\Donation;

use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ListDonationTest extends TestCase
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
    public function test_get_list_donation(): void
    {
        Donation::factory()->count(2)->create([
            'user_id' => User::factory()->create()->id,
        ]);
        $response = $this->get('/api/donation');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                "*" => [
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
                ]
            ]);
    }
}
