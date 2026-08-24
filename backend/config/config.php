<?php
// Jordan Story Tours — PHP API Configuration

return [
    'db' => [
        'host'     => getenv('DB_HOST') ?: '127.0.0.1',
        'port'     => getenv('DB_PORT') ?: '3306',
        'dbname'   => getenv('DB_NAME') ?: 'jordan_story_db',
        'user'     => getenv('DB_USER') ?: 'root',
        'password' => getenv('DB_PASS') ?: '',
        'charset'  => 'utf8mb4',
    ],
    'app' => [
        'name'            => 'Jordan Story Tours API',
        'env'             => getenv('APP_ENV') ?: 'development',
        'allowed_origins' => explode(',', getenv('ALLOWED_ORIGINS') ?: 'http://localhost:3000,http://localhost:3001,https://jordanstorytours.com'),
        'jwt_secret'      => getenv('JWT_SECRET') ?: 'jordan-story-secret-key-change-in-production',
        'admin_email'     => getenv('ADMIN_EMAIL') ?: 'info@jordanstorytours.com',
    ]
];
