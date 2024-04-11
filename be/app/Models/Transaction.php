<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'user_id', 'donation_id', 'amount', 'payment_method', 'status', 'sender', 'image_path'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }
    /**
     * Get the user that owns the transaction.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the donation that owns the transaction.
     */
    public function donation()
    {
        return $this->belongsTo(Donation::class);
    }
}
