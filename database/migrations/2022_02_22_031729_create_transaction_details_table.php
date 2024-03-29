<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('price');
            $table->unsignedInteger('discount');
            $table->unsignedFloat('quantity');
            $table->foreignId('transaction_id')->constrained();
            $table->foreignId('laundry_id')->nullable()->default(null)->constrained();
            $table->foreignId('product_id')->nullable()->default(null)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transacation_details');
    }
};
