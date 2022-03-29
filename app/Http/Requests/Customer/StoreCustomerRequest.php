<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $basicValidation = [
            'customer_number' => 'required|string',
            'name' => 'required|string|max:50',
            'phone' => 'required|numeric|min:12|unique:customers,phone',
            'gender_id' => 'required|numeric',
        ];

        if ($this->transaction_number) {
            array_push($basicValidation, ['transaction_number' => 'required|string']);

            return $basicValidation;
        } else {
            return $basicValidation;
        }
    }
}
