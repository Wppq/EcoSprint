<?php

namespace App\Http\Controllers;

use App\Models\Rank;
use Illuminate\Http\Request;

class RankController extends Controller
{
    public function index()
    {
        $ranks = Rank::orderBy('score', 'desc')
            ->join('users', 'ranks.user_id', '=', 'users.id')
            ->select('ranks.*', 'users.name')
            ->get();
        return response()->json($ranks, 200);
    }
}
