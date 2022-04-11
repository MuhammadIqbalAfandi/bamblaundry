<?php

namespace App\Models;

use App\Models\Laundry;
use App\Models\Product;
use App\Models\Transaction;
use App\Services\CurrencyFormatService;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'price',
        'discount',
        'quantity',
        'transaction_id',
        'laundry_id',
        'product_id',
    ];

    protected function price(): Attribute
    {
        return Attribute::make(
            get:fn($value) => (new CurrencyFormatService)->setRupiahFormat($value, true)
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

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function totalPrice()
    {
        $price = $this->getRawOriginal('price') * $this->quantity;
        $totalPrice = $price - $price * ($this->getRawOriginal('discount') / 100);

        return $totalPrice;
    }

    public function totalPriceAsString()
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPrice());
    }

    public function totalPriceAsFullString()
    {
        return (new CurrencyFormatService)->setRupiahFormat($this->totalPrice(), true);
    }
}
