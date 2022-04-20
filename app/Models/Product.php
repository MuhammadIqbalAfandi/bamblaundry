<?php

namespace App\Models;

use App\Services\CurrencyFormatService;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'unit',
    ];

    protected function name(): Attribute
    {
        return Attribute::make(
            set:fn($value) => ucwords($value)
        );
    }

    protected function unit(): Attribute
    {
        return Attribute::make(
            set:fn($value) => strtoupper($value)
        );
    }

    protected function price(): Attribute
    {
        return Attribute::make(
            get:fn($value) => (new CurrencyFormatService)->setRupiahFormat($value, true)
        );
    }

    public function transactionDetails()
    {
        return $this->hasMany(TransactionDetail::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('price', 'like', '%' . $search . '%')
                    ->orWhere('unit', 'like', '%' . $search . '%');
            });
        });
    }
}
