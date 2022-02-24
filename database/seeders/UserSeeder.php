<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'phone' => '',
            'email' => 'admin@laundry.com',
            'address' => '',
            'gender' => 2, // 1(female), 2(male)
            'email_verified_at' => now(),
            'password' => bcrypt('admin'),
            'role_id' => 1,
            'outlet_id' => 1,
        ]);
    }
}
