<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\Helpers\CurrencyFormat;
use App\Models\Mutation;
use App\Models\Outlet;
use App\Models\TransactionDetail;
use App\Models\TransactionStatus;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory, CurrencyFormat;

    protected $fillable = [
        'transaction_number',
        'discount',
        'customer_number',
        'transaction_status_id',
        'user_id',
        'outlet_id',
    ];

    public function createdAt(): Attribute
    {
        return Attribute::make(
            get:fn($value) => Carbon::parse($value)->translatedFormat('l d/m/Y')
        );
    }

    public function discount(): Attribute
    {
        return Attribute::make(
            get:fn($value) => "{$value}%"
        );
    }

    public function transactionDetails()
    {
        return $this->hasMany(TransactionDetail::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_number', 'customer_number');
    }

    public function outlet()
    {
        return $this->belongsTo(Outlet::class);
    }

    public function transactionStatus()
    {
        return $this->belongsTo(TransactionStatus::class);
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
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('transaction_number', 'like', '%' . $search . '%')
                    ->orWhereHas('customer', function ($query) use ($search) {
                        $query->where('customer_number', 'like', '%' . $search . '%')
                            ->orWhere('phone', 'like', '%' . $search . '%');
                    });
            });
        })->when($filters['startDate'] ?? null, function ($query, $date) {
            $query->whereDate('created_at', '>=', $date);
        })->when($filters['endDate'] ?? null, function ($query, $date) {
            $query->whereDate('created_at', '<=', $date);
        })->when($filters['outlet'] ?? null, function ($query, $outlet) {
            $query->where('outlet_id', $outlet);
        });
    }

    public function totalPrice()
    {
        $price = $this->transactionDetails->sum(function ($transactionDetail) {
            $price = $transactionDetail->getRawOriginal('price') * $transactionDetail->quantity;
            return $price - $price * ($transactionDetail->getRawOriginal('discount') / 100);
        });

        return $price - $price * ($this->getRawOriginal('discount') / 100);
    }

    public function totalPriceAsString()
    {
        return $this->setRupiahFormat($this->totalPrice());
    }

    public function totalPriceAsFullString()
    {
        return $this->setRupiahFormat($this->totalPrice(), 2, true);
    }

    public function subTotal()
    {
        $subTotal = $this->transactionDetails->sum(function ($transactionDetail) {
            $price = $transactionDetail->getRawOriginal('price') * $transactionDetail->quantity;
            return $price - $price * ($transactionDetail->getRawOriginal('discount') / 100);
        });

        return $subTotal;
    }

    public function subTotalAsString()
    {
        return $this->setRupiahFormat($this->subTotal());
    }

    public function discountAsString()
    {
        $discount = $this->getRawOriginal('discount') / 100;

        return $this->setRupiahFormat($discount * $this->subTotal());
    }
}
