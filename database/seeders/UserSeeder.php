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
            'name' => 'Owner',
            'phone' => '',
            'email' => 'owner@laundry.com',
            'email_verified_at' => now(),
            'password' => bcrypt('owner123'),
            'gender_id' => 2, // 1(female), 2(male)
            'role_id' => 1,
        ]);

        // User::factory(199)->create();
    }
}
