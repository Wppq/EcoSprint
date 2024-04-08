<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Volunteer extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $fillable = ['id', 'user_id', 'donation_id'];

    /**
     * Get the user that belongs to the volunteer.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the donation that belongs to the volunteer.
     */
    public function donation()
    {
        return $this->belongsTo(Donation::class);
    }

    protected $primaryKey = 'id';
    public $incrementing = false;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }

    public static function addVolunteer($userId, $donationId)
    {
        $existingVolunteer = self::where('user_id', $userId)->where('donation_id', $donationId)->first();

        if ($existingVolunteer) {
            return false;
        }

        self::create([
            'id' => (string) Str::uuid(),
            'user_id' => $userId,
            'donation_id' => $donationId,
        ]);

        return true;
    }
}
