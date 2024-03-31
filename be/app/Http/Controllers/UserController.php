<?php

namespace App\Http\Controllers;

use App\Helpers\JwtHelper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function Login(Request $request)
    {
        $user = User::where('email', $request->json('email'))->first();

        if (!$user) {
            return response()->json(['error' => 'email or password are wrong.'], 401);
        }


        if (password_verify($request->json('password'), $user->password)) {
            $token = JwtHelper::generateToken(['email' => $user->email]);
            return response()->json([
                'message' => [
                    'token' => $token,
                    'role' => $user->role
                ]
            ], 200);
        } else {
            return response()->json(['error' => 'email or password are wrong.'], 401);
        }
    }

    public function Register(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required|string|max:50|min:3',
            'username' => 'required|string|max:50|min:4',
            'password' => 'required|string|min:6',
            'email' => 'required|string|email|max:100',
            'address' => 'required|string|max:255',
            'phone' => 'required|string|max:13',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = new User();
        $user->name = $request->json('name');
        $user->username = $request->json('username');
        $user->password = $request->json('password');
        $user->email = $request->json('email');
        $user->address = $request->json('address');
        $user->phone = $request->json('phone');
        $user->role = "user";
        $user->save();

        return response()->json(['message' => "success create account"], 201);
    }
}
