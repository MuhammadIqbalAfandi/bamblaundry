<?php

namespace App\Models;

use App\Models\Helpers\CurrencyFormat;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mutation extends Model
{
    use HasFactory, CurrencyFormat;

    protected $fillable = [
        'type',
        'amount',
        'outlet_id',
        'transaction_id',
        'expense_id',
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
            get:fn($value) => $this->transaction_id ? $this->setRupiahFormat($value, 2, true)
            : '- ' . $this->setRupiahFormat($value, 2, true)
        );
    }

    public function type(): Attribute
    {
        return Attribute::make(
            get:fn($value) => $value == 1 ? __('words.income') : __('words.expense')
        );
    }

    public function outlet()
    {
        return $this->belongsTo(Outlet::class);
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
