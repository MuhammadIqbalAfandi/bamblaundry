<?php

namespace App\Models;

use App\Models\Helpers\HasHelper;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laundry extends Model
{
    use HasFactory, HasHelper;

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
            get:fn($value) => $this->setRupiahFormat($value)
        );
    }

    public function scopeFilter($query, $filters)
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
