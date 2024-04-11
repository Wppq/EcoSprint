<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function show(string $image_path)
    {
        $path = public_path('images/' . $image_path);

        if (!file_exists($path)) {
            abort(404);
        }

        $file = file_get_contents($path);
        $type = mime_content_type($path);

        return response($file)
            ->header('Content-Type', $type);
    }
}
