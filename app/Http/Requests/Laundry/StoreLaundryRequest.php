<?php

namespace App\Http\Requests\Laundry;

use Illuminate\Foundation\Http\FormRequest;

class StoreLaundryRequest extends FormRequest
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
            'name' => 'required|string|max:50',
            'price' => 'required|integer|numeric',
            'unit' => 'required|string|max:50',
        ];
    }
}
