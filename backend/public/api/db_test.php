<?php
// Quick Database Diagnostic Tool for Jordan Story Tours
header('Content-Type: application/json; charset=utf-8');

$configPath = file_exists(__DIR__ . '/../config/config.php')
    ? __DIR__ . '/../config/config.php'
    : (file_exists(__DIR__ . '/../../config/config.php') ? __DIR__ . '/../../config/config.php' : __DIR__ . '/config.php');

$config = file_exists($configPath) ? require $configPath : null;

$dbConfig = $config['db'] ?? [
    'host' => 'localhost',
    'port' => '3306',
    'dbname' => 'jorddhrw_newstory',
    'user' => 'jorddhrw_shadi',
    'password' => '5SfyqV8Rv^PR}qx*',
    'charset' => 'utf8mb4'
];

$tests = [];
$hosts = ['localhost', '127.0.0.1'];

foreach ($hosts as $h) {
    try {
        $dsn = "mysql:host={$h};port={$dbConfig['port']};dbname={$dbConfig['dbname']};charset={$dbConfig['charset']}";
        $pdo = new PDO($dsn, $dbConfig['user'], $dbConfig['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5
        ]);
        
        $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
        
        $tests[$h] = [
            'status' => 'CONNECTED_SUCCESSFULLY',
            'tables_count' => count($tables),
            'tables_sample' => array_slice($tables, 0, 8)
        ];
    } catch (PDOException $e) {
        $tests[$h] = [
            'status' => 'FAILED',
            'error_message' => $e->getMessage(),
            'error_code' => $e->getCode()
        ];
    }
}

echo json_encode([
    'diagnostics' => $tests,
    'config_checked' => [
        'database' => $dbConfig['dbname'],
        'user' => $dbConfig['user'],
        'config_file_found' => !empty($config)
    ]
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
