<?php

namespace App\Helpers;

use Firebase\JWT\JWT as FirebaseJWT;
use Firebase\JWT\Key;

class JwtHelper
{
  /**
   * Generate a JWT token.
   *
   * @param array $payload
   * @return string|null
   */
  public static function generateToken(array $payload)
  {
    try {
      $key = env('JWT_SECRET');
      $algorithm = env('JWT_ALGORITHM', 'HS256');
      $ttl = env('JWT_TTL', 60);

      $payload['iat'] = time();
      $payload['exp'] = time() + ($ttl * 60);

      return FirebaseJWT::encode($payload, $key, $algorithm);
    } catch (\Exception $e) {
      // Handle exception (e.g., log error)
      return null;
    }
  }

  /**
   * Decode a JWT token.
   *
   * @param string $token
   * @return object|null
   */
  public static function decodeToken(string $token)
  {
    try {
      $key = env('JWT_SECRET');
      return FirebaseJWT::decode($token, new Key($key, 'HS256'));
    } catch (\Exception $e) {
      return null;
    }
  }
}
