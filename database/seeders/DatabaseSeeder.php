<?php

namespace Database\Seeders;

use Database\Seeders\RoleSeeder;
use Database\Seeders\TransactionStatusSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DiscountSeeder::class,
            TransactionStatusSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
        ]);
    }
}
