<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'address',
        'status',
        'password',
        'gender_id',
        'role_id',
        'outlet_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function genderId(): Attribute
    {
        return Attribute::make(
            get:fn($value) => $value == 1 ? __('words.female') : __('words.male'),
        );
    }

    protected function status(): Attribute
    {
        return Attribute::make(
            get:fn($value) => $value ? __('Aktif') : __('Non Aktif'),
        );
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function outlet()
    {
        return $this->belongsTo(Outlet::class);
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%');
            });
        });
    }

    public function hasRole($role)
    {
        return $this->role()->where('name', $role)->first() ? true : false;
    }
}
