<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- Change address bar color Chrome, Firefox OS and Opera --}}
    <meta name="theme-color" content="#0275d8" />
    {{-- iOS Safari --}}
    <meta name="apple-mobile-web-app-status-bar-style" content="#0275d8">
    <meta name="description" content="The best Kenyan Online Music Store" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'One Soko') }}</title>

    <!-- Favicon  -->
    <link rel="icon" href="storage/img/favicon-32x32.png">

    {{-- Manifest --}}
    <link rel="manifest" type="application/manifest+json" href="manifest.webmanifest">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">

    {{-- IOS support --}}
    <link rel="apple-touch-icon" href="storage/img/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-status-bar" content="#0275d8">
</head>

<body>
    <noscript>
        <center>
            <h2 class="m-5">
                We're sorry but {{ config('app.name', 'One Soko') }}
                doesn't work properly without JavaScript enabled.
                Please enable it to continue.
            </h2>
        </center>
    </noscript>

    <div id="app"></div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>