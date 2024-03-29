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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone')->unique();
            $table->string('email')->unique();
            $table->boolean('status')->default(true); // true(active) false(not active)
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->default(bcrypt('12345678'));
            $table->enum('gender_id', [1, 2]); // 1(female) 2(male)
            $table->foreignId('role_id')->constrained();
            $table->foreignId('outlet_id')->nullable()->default(null)->constrained();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
