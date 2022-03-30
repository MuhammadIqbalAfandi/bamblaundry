<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used for various
    | messages that we need to display to the user.
    |
     */

    'user' => [
        'active_user' => 'Successfully active the user',
        'no_active_user' => 'Successfully block user',
    ],

    'success' => [
        'email' => [
            'verify_email' => 'Email Verification link successfully sent',
        ],
        'store' => [
            'expense' => 'Expense successfully added',
            'transaction' => 'Transaction successfully added',
            'user' => 'User Account successfully added',
            'customer' => 'Customer Account successfully added',
            'outlet' => 'Outlet Data successfully added',
            'laundry' => 'Laundry Data successfully added',
        ],
        'update' => [
            'transaction_status' => 'Transaction Status successfully changed',
            'user' => 'User Account successfully changed',
            'customer' => 'User Customer successfully changed',
            'outlet' => 'Outlet Data successfully changed',
            'laundry' => 'Laundry Data successfully changed',
        ],
        'destroy' => [
            'user' => 'User Account successfully deleted',
            'customer' => 'User Customer successfully deleted',
            'outlet' => 'Outlet Date successfully deleted',
            'laundry' => 'Laundry Data successfully deleted',
        ],
    ],

    'error' => [
        'store' => [
            'expense' => 'Expense failed to be added',
            'transaction' => 'Transaction failed to be added',
        ],
    ],
];
