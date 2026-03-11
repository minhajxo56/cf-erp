<?php

namespace App\Http\Requests;

use App\Models\Role;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Return true as the UserPolicy handles the "can edit this specific user" logic.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $currentUserRoleName = $this->user()->role->name;
        $userBeingUpdatedId = $this->route('user')->id ?? $this->route('user'); 

        $allowedRolesQuery = Role::query();

        if ($currentUserRoleName === 'CEO') {
            $allowedRolesQuery->where('name', '!=', 'Admin');
        } elseif ($currentUserRoleName === 'HR') {
            $allowedRolesQuery->whereNotIn('name', ['Admin', 'CEO', 'HR']);
        }

        $allowedRoleIds = $allowedRolesQuery->pluck('id')->toArray();

        return [
            'first_name'    => ['required', 'string', 'max:255'],
            'last_name'     => ['required', 'string', 'max:255'],
            'email'         => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($userBeingUpdatedId)],
            'phone'         => ['nullable', 'string', 'max:20'],
            'department_id' => ['required', 'exists:departments,id'],
            'role_id'       => ['required', Rule::in($allowedRoleIds)],
            'status'        => ['required', 'in:active,probation,inactive'],
            'joining_date'  => ['required', 'date'],
        ];
    }

    public function messages(): array
    {
        return [
            'role_id.in' => 'You do not have permission to assign this role.',
        ];
    }
}