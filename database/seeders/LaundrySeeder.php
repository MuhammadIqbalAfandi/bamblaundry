<?php

namespace Database\Seeders;

use App\Models\Laundry;
use Illuminate\Database\Seeder;

class LaundrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Laundry::factory()->count(5000)->create();
    }
}
