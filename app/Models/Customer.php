<?php

namespace App\Models;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_number',
        'name',
        'phone',
        'gender_id',
    ];

    protected function genderId(): Attribute
    {
        return Attribute::make(
            get:fn($value) => $value == 1 ? __('words.female') : __('words.male'),
        );
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'customer_number', 'customer_number');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('customer_number', 'like', '%' . $search . '%')
                    ->orWhere('name', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%');
            });
        });
    }

    public function checkTransaction()
    {
        if ($this->transactions->count()) {
            return $this->transactions->chunk(7)->last()->count();
        } else {
            return 0;
        }
    }
}
