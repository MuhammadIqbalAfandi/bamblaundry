<?php

namespace App\Providers;

use App\Models\Discount;
use App\Models\Outlet;
use App\Models\Transaction;
use App\Models\User;
use App\Policies\DiscountPolicy;
use App\Policies\OutletPolicy;
use App\Policies\TransactionPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Transaction::class => TransactionPolicy::class,
        User::class => UserPolicy::class,
        Outlet::class => OutletPolicy::class,
        Discount::class => DiscountPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isOwner', fn(User $user) => $user->role_id === 1);
        Gate::define('isOutletHead', fn(User $user) => $user->role_id === 2);
        Gate::define('isEmployee', fn(User $user) => $user->role_id === 3);
    }
}
