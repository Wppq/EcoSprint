<?php

namespace App\Http\Middleware;

use App\Helpers\JwtHelper;
use Closure;
use Illuminate\Http\Request;

class CheckAuthorizationHeader
{
    public function handle(Request $request, Closure $next)
    {
        try {
            $token = $request->bearerToken();
            $decode = JwtHelper::decodeToken($token);
            if (!$decode->id) {
                return response()->json(['error' => 'Unauthenticated.'], 401);
            }
            $request['auth_id'] = $decode->id;
            return $next($request);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
    }
}
