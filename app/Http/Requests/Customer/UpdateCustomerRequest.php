<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
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
        return [
            'customer_number' => 'required|string|unique:customers,customer_number,' . $this->customer->id,
            'name' => 'required|string|max:50',
            'phone' => 'required|numeric|min:12|unique:customers,phone,' . $this->customer->id,
            'gender_id' => 'required|numeric',
        ];
    }
}
