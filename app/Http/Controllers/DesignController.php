<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DesignController extends Controller
{
    /**
     * Display the template selection dashboard.
     */
    public function index()
    {
        return Inertia::render('Designs/Index');
    }

    /**
     * Display a specific design module.
     * * @param string $module
     */
    public function showModule($module)
    {
        // Add basic logic to load different components based on the URL parameter
        if ($module === 'quote-card') {
            return Inertia::render('Designs/Modules/QuoteEditor');
        }

        if ($module === 'youtube-thumb') {
            return Inertia::render('Designs/Modules/YTThumbEditor');
        }

        if ($module === 'match-day') {
            // return Inertia::render('Designs/Modules/MatchDayRoster');
            abort(404, 'Match Day module under construction.');
        }

        abort(404, 'Template not found.');
    }
}