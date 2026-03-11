<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SchedulePublished extends Notification implements ShouldQueue
{
    use Queueable;

    public array $scheduleData;
    public string $publishedBy;
    public string $startDate;

    public function __construct(array $scheduleData, string $publishedBy, string $startDate)
    {
        $this->scheduleData = $scheduleData;
        $this->publishedBy = $publishedBy;
        $this->startDate = $startDate;
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Roster Published - ' . config('app.name'))
            ->markdown('mail.schedule.published', [
                'scheduleData' => $this->scheduleData,
                'publishedBy' => $this->publishedBy,
                'startDate' => $this->startDate,
                'user' => $notifiable,
            ]);
    }
}