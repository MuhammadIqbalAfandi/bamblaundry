<?php

namespace App\Models;

use App\Models\Helpers\CurrencyFormat;
use App\Models\Mutation;
use App\Models\Outlet;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory, CurrencyFormat;

    protected $fillable = [
        'description',
        'amount',
        'user_id',
        'outlet_id',
    ];

    public function createdAt(): Attribute
    {
        return Attribute::make(
            get:fn($value) => Carbon::parse($value)->translatedFormat('l d/m/Y')
        );
    }

    public function amount(): Attribute
    {
        return Attribute::make(
            get:fn($value) => '- ' . $this->setRupiahFormat($value, 0, true)
        );
    }

    public function outlet()
    {
        return $this->belongsTo(Outlet::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mutation()
    {
        return $this->hasOne(Mutation::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['startDate'] ?? null, function ($query, $date) {
            $query->whereDate('created_at', '>=', $date);
        })->when($filters['endDate'] ?? null, function ($query, $date) {
            $query->whereDate('created_at', '<=', $date);
        })->when($filters['outlet'] ?? null, function ($query, $outlet) {
            $query->where('outlet_id', $outlet);
        });
    }
}
