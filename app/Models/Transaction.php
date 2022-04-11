<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\Mutation;
use App\Models\Outlet;
use App\Models\TransactionDetail;
use App\Models\TransactionStatus;
use App\Models\User;
use App\Services\CurrencyFormatService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_number',
        'discount',
        'customer_number',
        'transaction_status_id',
        'user_id',
        'outlet_id',
    ];

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get:fn($value) => Carbon::parse($value)->translatedFormat('l d/m/Y')
        );
    }

    protected function discount(): Attribute
    {
        return Attribute::make(
            get:fn($value) => (new CurrencyFormatService)->setRupiahFormat($value, true)
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
        return (new CurrencyFormatService)->setRupiahFormat($this->subTotal());
    }

    public function totalPrice()
    {
        $totalPrice = $this->subTotal() - $this->getRawOriginal('discount');
        if ($totalPrice < 0) {
            return 0;
        } else {
            return $totalPrice;
        }
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
