<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'phone' => 'required|numeric|min:12|unique:users,phone',
            'email' => 'required|email|unique:users,email',
            'gender_id' => 'required|numeric',
            'outlet_id' => 'required|numeric',
            'role_id' => 'required|numeric',
        ];
    }
}
