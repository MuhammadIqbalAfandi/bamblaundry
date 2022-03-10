<?php

namespace Database\Seeders;

use App\Models\TransactionStatus;
use Illuminate\Database\Seeder;

class TransactionStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TransactionStatus::create([
            'name' => 'Baru',
        ]);

        TransactionStatus::create([
            'name' => 'Proses',
        ]);

        TransactionStatus::create([
            'name' => 'Selesai',
        ]);

        TransactionStatus::create([
            'name' => 'Diambil',
        ]);
    }
}
