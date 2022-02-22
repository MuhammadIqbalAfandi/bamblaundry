<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_number',
        'discount',
        'transaction_status_id',
        'user_id',
        'customer_id',
        'laundry_id',
        'outlet_id',
    ];
}
