<?php
// Router for PHP Built-in Web Server
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Serve static files directly if they exist
if ($uri !== '/' && file_exists(__DIR__ . $uri)) {
    return false;
}

// Otherwise forward all requests to the front controller
require_once __DIR__ . '/api/index.php';
