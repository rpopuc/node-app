<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$boardgameData = [
    [
        'id' => 1,
        'name' => 'Catan',
        'description' => 'A game of trading and building in the land of Catan. Designed by Klaus Teuber.',
        'price' => 29.99
    ],
    [
        'id' => 2,
        'name' => 'Ticket to Ride',
        'description' => 'A cross-country train adventure. Players collect train cards to claim railway routes connecting cities. Designed by Alan R. Moon.',
        'price' => 39.99
    ],
    [
        'id' => 3,
        'name' => 'Pandemic',
        'description' => 'A cooperative board game in which players work as a team to fight outbreaks of diseases around the world. Designed by Matt Leacock.',
        'price' => 44.99
    ]
];

Route::get('/boardgames', function (Request $request) use ($boardgameData) {
    return [
        'ok' => true,
        'data' => $boardgameData
    ];
});

Route::get('/boardgames/{id}', function ($id) use ($boardgameData) {
    return [
        'ok' => true,
        'data' => collect($boardgameData)->firstWhere('id', $id)
    ];
});
