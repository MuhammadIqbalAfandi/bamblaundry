<?php

namespace Database\Seeders;

use Database\Seeders\CustomerSeeder;
use Database\Seeders\OutletSeeder;
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
            TransactionStatusSeeder::class,
            CustomerSeeder::class,
            OutletSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
        ]);
    }
}
