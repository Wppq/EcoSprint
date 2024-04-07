<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAuthorizationHeader
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->hasHeader('Authorization') || !$request->bearerToken()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return $next($request);
    }
}
