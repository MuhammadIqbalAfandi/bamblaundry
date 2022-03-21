<?php

namespace App\Models;

use App\Models\Customer;
use App\Models\Helpers\HasHelper;
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
    use HasFactory, HasHelper;

    protected $fillable = [
        'transaction_number',
        'discount',
        'transaction_status_id',
        'user_id',
        'customer_id',
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
        return $this->belongsTo(Customer::class);
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

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('transaction_number', 'like', '%' . $search . '%')
                    ->orWhere('customer.customer_number', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%');
            });
        });
    }

    public function totalPrice()
    {
        $price = $this->transactionDetails->sum(function ($transactionDetail) {
            $price = $transactionDetail->getRawOriginal('price') * $transactionDetail->quantity;
            return $price - $price * ($transactionDetail->getRawOriginal('discount') / 100);
        });

        $totalPrice = $price - $price * ($this->getRawOriginal('discount') / 100);

        return $this->setRupiahFormat($totalPrice);
    }

}
