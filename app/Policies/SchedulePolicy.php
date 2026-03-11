<?php

namespace App\Policies;

use App\Models\Schedule;
use App\Models\User;

class SchedulePolicy
{
    /**
     * Determine if the user can view the planner and schedules.
     */
    public function viewAny(User $user): bool
    {
        // Global access for upper management
        if (in_array($user->role->name, ['Super_Admin', 'Admin', 'HR'])) {
            return true;
        }

        // Team In Charge can view ONLY if they are assigned to manage at least one department
        if ($user->role->name === 'Team_In_Charge') {
            return $user->managedDepartments()->exists();
        }

        return false;
    }

    /**
     * Determine if the user can create/publish schedules.
     */
    public function create(User $user): bool
    {
        if (in_array($user->role->name, ['Super_Admin', 'Admin', 'HR'])) {
            return true;
        }

        if ($user->role->name === 'Team_In_Charge') {
            return $user->managedDepartments()->exists();
        }

        return false;
    }

    /**
     * Determine if the user can update the schedule.
     */
    public function update(User $user, Schedule $schedule): bool
    {
        if (in_array($user->role->name, ['Super_Admin', 'Admin', 'HR'])) {
            return true;
        }

        if ($user->role->name === 'Team_In_Charge') {
            // Check if the user manages the department this schedule belongs to
            return $user->managedDepartments()->where('departments.id', $schedule->department_id)->exists();
        }

        return false;
    }

    /**
     * Determine if the user can delete the schedule.
     */
    public function delete(User $user, Schedule $schedule): bool
    {
        return in_array($user->role->name, ['Super_Admin', 'Admin', 'HR']);
    }
}