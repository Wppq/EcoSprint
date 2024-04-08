<?php

namespace App\Http\Controllers;

use App\Helpers\JwtHelper;
use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function index(Request $request)
    {
        try {
            $userId = $request['auth_id'];
            $histories = History::where('user_id', $userId)->get();
            return response()->json($histories, 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'somthing make it happen'], 500);
        }
    }
}
