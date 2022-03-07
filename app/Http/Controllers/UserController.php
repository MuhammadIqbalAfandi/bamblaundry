<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\Outlet;
use App\Models\Role;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('user/Index', [
            'users' => User::latest()
                ->filter(request()->search)
                ->paginate(10)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'phone' => $user->phone,
                    'email' => $user->email,
                    'address' => $user->address,
                    'gender' => $user->gender_id,
                    'role' => $user->role->name,
                    'status' => $user->status,
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return inertia('user/Create', [
            'roles' => Role::whereNotIn('id', [1])
                ->get()
                ->transform(fn($role) => [
                    'label' => $role->name,
                    'value' => $role->id,
                ]),
            'outlets' => Outlet::all()
                ->transform(fn($outlet) => [
                    'label' => $outlet->name,
                    'value' => $outlet->id,
                ]),
            'genders' => [
                ['label' => 'Perempuan', 'value' => 1],
                ['label' => 'Laki-laki', 'value' => 2],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        User::create($request->validated());

        return to_route('users.index')->with('success', __('messages.success.store.user'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return inertia('user/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'phone' => $user->phone,
                'email' => $user->email,
                'address' => $user->address,
                'gender' => $user->getRawOriginal('gender_id'),
                'outlet' => $user->outlet_id,
                'role' => $user->role_id,
            ],
            'roles' => Role::whereNotIn('id', [1])
                ->get()
                ->transform(fn($role) => [
                    'label' => $role->name,
                    'value' => $role->id,
                ]),
            'outlets' => Outlet::all()
                ->transform(fn($outlet) => [
                    'label' => $outlet->name,
                    'value' => $outlet->id,
                ]),
            'genders' => [
                ['label' => 'Perempuan', 'value' => 1],
                ['label' => 'Laki-laki', 'value' => 2],
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());

        return back()->with('success', __('messages.success.update.user'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return to_route('users.index')->with('success', __('messages.success.destroy.user'));
    }

    /**
     * Block user
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function block(User $user)
    {
        $user->status = !$user->getRawOriginal('status');
        $user->update();

        if ($user->getRawOriginal('status')) {
            $msg = __('messages.user.active_user');
        } else {
            $msg = __('messages.user.no_active_user');
        }

        return back()->with('success', $msg);
    }
}
