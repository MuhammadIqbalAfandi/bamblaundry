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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_number');
            $table->text('description')->nullable()->default(null);
            $table->unsignedInteger('discount');
            $table->string('customer_number');
            $table->foreign('customer_number')->references('customer_number')->on('customers');
            $table->foreignId('transaction_status_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('outlet_id')->constrained();
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
        Schema::dropIfExists('tansactions');
    }
};
