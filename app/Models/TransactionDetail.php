<?php

namespace App\Models;

use App\Models\Helpers\HasHelper;
use App\Models\Laundry;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory, HasHelper;

    protected $fillable = [
        'price',
        'discount',
        'quantity',
        'transaction_id',
        'laundry_id',
    ];

    protected function price(): Attribute
    {
        return Attribute::make(
            get:fn($value) => $this->setRupiahFormat($value)
        );
    }

    protected function discount(): Attribute
    {
        return Attribute::make(
            get:fn($value) => "{$value}%"
        );
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    public function laundry()
    {
        return $this->belongsTo(Laundry::class);
    }

    public function totalPriceAsString()
    {
        $price = $this->getRawOriginal('price') * $this->quantity;
        $totalPrice = $price - $price * ($this->getRawOriginal('discount') / 100);
        return $this->setRupiahFormat($totalPrice);
    }
}
