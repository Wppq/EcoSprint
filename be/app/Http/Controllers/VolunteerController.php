<?php

namespace App\Http\Controllers;

use App\Helpers\JwtHelper;
use App\Models\Donation;
use App\Models\History;
use App\Models\Volunteer;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    public function create(Request $request)
    {
        try {
            $userId = $request['auth_id'];
            $donationFound = Donation::where('id', $request->json('id'))->first();
            if (!$donationFound) {
                return response()->json(['message' => 'Donation not found.'], 404);
            }

            if (Volunteer::addVolunteer($userId, $donationFound->id)) {
                History::create([
                    'user_id' => $userId,
                    'type' => 'volunteer',
                    'title' => $donationFound->title,
                    'score' => 0,
                    'status' => 'pending',
                ]);
                return response()->json(['message' => 'Successfully joined the activity as a volunteer'], 201);
            }

            return response()->json(['message' => 'Volunteer already exists'], 422);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'something make it happen'], 500);
        }
    }
}
