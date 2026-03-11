<x-mail::message>
# Hello {{ $user->employee->first_name ?? $user->name }},

A new shift roster has been published by **{{ $publishedBy }}** starting from **{{ $startDate }}**. 

Please review your upcoming assignments below.

<x-mail::table>
| Employee | @foreach($scheduleData['dates'] as $date) {{ \Carbon\Carbon::parse($date)->format('M d') }} | @endforeach
|:---| @foreach($scheduleData['dates'] as $date) :--- | @endforeach
@foreach($scheduleData['rows'] as $empName => $shifts)
| **{{ $empName }}** | @foreach($scheduleData['dates'] as $date) {{ $shifts[$date] ?? '-' }} | @endforeach
@endforeach
</x-mail::table>

<x-mail::button :url="url('/my-schedule')">
View My Full Schedule
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>