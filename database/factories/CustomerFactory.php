<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'customer_number' => 'CS202004' . $this->faker->unique()->randomNumber(8, true),
            'name' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
            'gender_id' => random_int(1, 2),
        ];
    }
}
