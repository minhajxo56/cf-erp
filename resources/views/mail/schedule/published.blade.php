<x-mail::message>
# Hello {{ $user->employee->first_name ?? $user->name }},

A new shift roster has been published by **{{ $publishedBy }}** starting from **{{ $startDate }}**.

Please review your upcoming assignments below.

<table width="100%" cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; text-align:center;">
    <thead>
        <tr style="background:#f2f2f2;">
            <th>Employee</th>
            @foreach($scheduleData['dates'] as $date)
                <th>{{ \Carbon\Carbon::parse($date)->format('M d') }}</th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        @foreach($scheduleData['rows'] as $empName => $shifts)
            <tr>
                <td><strong>{{ $empName }}</strong></td>
                @foreach($scheduleData['dates'] as $date)
                    <td>
                        {{ $shifts[$date] ?? '-' }}
                    </td>
                @endforeach
            </tr>
        @endforeach
    </tbody>
</table>

<br>

<x-mail::button :url="url('/my-schedule')">
View My Full Schedule
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>