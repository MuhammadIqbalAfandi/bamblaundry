<?php

namespace Database\Seeders;

use Database\Seeders\OutletSeeder;
use Database\Seeders\RoleSeeder;
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
            OutletSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
        ]);
    }
}
