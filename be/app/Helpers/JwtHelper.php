<?php

namespace App\Helpers;

use Firebase\JWT\JWT as FirebaseJWT;

class JwtHelper
{
  /**
   * Generate a JWT token.
   *
   * @param array $payload
   * @return string
   */
  public static function generateToken(array $payload)
  {
    $key = env('JWT_SECRET');
    $algorithm = env('JWT_ALGORITHM', 'HS256');
    $ttl = env('JWT_TTL', 60);

    $payload['iat'] = time();
    $payload['exp'] = time() + ($ttl * 60);

    return FirebaseJWT::encode($payload, $key, $algorithm);
  }

  /**
   * Decode a JWT token.
   *
   * @param string $token
   * @return object|null
   */
  public static function decodeToken(string $token)
  {
    $key = env('JWT_SECRET');

    try {
      return FirebaseJWT::decode($token, $key, ['HS256']);
    } catch (\Exception $e) {
      return null;
    }
  }
}
