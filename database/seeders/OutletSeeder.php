<?php

namespace Database\Seeders;

use App\Models\Outlet;
use Illuminate\Database\Seeder;

class OutletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Outlet::create([
            'outlet_number' => 'OT' . now()->format('YmdHis'),
            'name' => 'Semua Outlet',
            'address' => '',
            'phone' => '',
        ]);
    }
}
