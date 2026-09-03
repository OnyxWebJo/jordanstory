<?php
/**
 * Jordan Story Tours — Database Backup & Verification Utility
 * Specification 07: Admin Security, Roles & Backups
 */

require_once __DIR__ . '/../backend/config/config.php';
$config = require __DIR__ . '/../backend/config/config.php';

class DatabaseBackupManager {
    private array $dbConfig;
    private string $backupDir;

    public function __construct(array $config) {
        $this->dbConfig = $config['db'];
        $this->backupDir = __DIR__ . '/../backups';
        if (!is_dir($this->backupDir)) {
            mkdir($this->backupDir, 0750, true);
        }
    }

    /**
     * Create an SQL dump backup file
     */
    public function createBackup(string $prefix = 'manual'): array {
        $timestamp = date('Y-m-d_His');
        $filename = sprintf('db_backup_%s_%s.sql', $prefix, $timestamp);
        $filepath = $this->backupDir . '/' . $filename;

        try {
            $dsn = sprintf(
                "mysql:host=%s;port=%s;dbname=%s;charset=%s",
                $this->dbConfig['host'],
                $this->dbConfig['port'],
                $this->dbConfig['dbname'],
                $this->dbConfig['charset']
            );
            $pdo = new PDO($dsn, $this->dbConfig['user'], $this->dbConfig['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);

            $handle = fopen($filepath, 'w');
            if (!$handle) {
                throw new Exception("Unable to create backup file at {$filepath}");
            }

            fwrite($handle, "-- Jordan Story Tours Database Backup\n");
            fwrite($handle, "-- Generated: " . date('c') . "\n");
            fwrite($handle, "-- Host: " . $this->dbConfig['host'] . " | Database: " . $this->dbConfig['dbname'] . "\n\n");
            fwrite($handle, "SET FOREIGN_KEY_CHECKS = 0;\n\n");

            // Fetch list of tables
            $tablesStmt = $pdo->query("SHOW TABLES");
            $tables = $tablesStmt->fetchAll(PDO::FETCH_COLUMN);

            foreach ($tables as $table) {
                // Table create statement
                $createStmt = $pdo->query("SHOW CREATE TABLE `{$table}`")->fetch(PDO::FETCH_ASSOC);
                fwrite($handle, "-- Table structure for `{$table}`\n");
                fwrite($handle, "DROP TABLE IF EXISTS `{$table}`;\n");
                fwrite($handle, $createStmt['Create Table'] . ";\n\n");

                // Dump table data
                $rowsStmt = $pdo->query("SELECT * FROM `{$table}`");
                $rows = $rowsStmt->fetchAll(PDO::FETCH_ASSOC);
                if (!empty($rows)) {
                    fwrite($handle, "-- Dumping data for table `{$table}`\n");
                    foreach ($rows as $row) {
                        $cols = array_map(function($col) { return "`{$col}`"; }, array_keys($row));
                        $vals = array_map(function($val) use ($pdo) {
                            if ($val === null) return "NULL";
                            return $pdo->quote($val);
                        }, array_values($row));
                        fwrite($handle, "INSERT INTO `{$table}` (" . implode(', ', $cols) . ") VALUES (" . implode(', ', $vals) . ");\n");
                    }
                    fwrite($handle, "\n");
                }
            }

            fwrite($handle, "SET FOREIGN_KEY_CHECKS = 1;\n");
            fclose($handle);

            $fileSize = filesize($filepath);

            return [
                'success' => true,
                'filename' => $filename,
                'path' => $filepath,
                'size_bytes' => $fileSize,
                'created_at' => date('c'),
                'tables_count' => count($tables)
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Verify backup readability and structure
     */
    public function verifyBackup(string $filepath): array {
        if (!file_exists($filepath) || !is_readable($filepath)) {
            return [
                'valid' => false,
                'error' => 'Backup file not found or not readable'
            ];
        }

        $content = file_get_contents($filepath, false, null, 0, 1024);
        $hasHeader = strpos($content, 'Jordan Story Tours Database Backup') !== false;
        $hasFkChecks = strpos($content, 'SET FOREIGN_KEY_CHECKS') !== false;

        return [
            'valid' => $hasHeader && $hasFkChecks,
            'size_bytes' => filesize($filepath),
            'verified_at' => date('c')
        ];
    }
}

// CLI execution handling
if (php_sapi_name() === 'cli' && basename(__FILE__) === basename($_SERVER['SCRIPT_FILENAME'] ?? '')) {
    $manager = new DatabaseBackupManager($config);
    echo "Starting backup process...\n";
    $result = $manager->createBackup('cli');
    if ($result['success']) {
        echo "✓ Backup created successfully: {$result['filename']} ({$result['size_bytes']} bytes, {$result['tables_count']} tables)\n";
        $verify = $manager->verifyBackup($result['path']);
        echo "✓ Backup verification: " . ($verify['valid'] ? 'PASSED' : 'FAILED') . "\n";
    } else {
        echo "✗ Backup failed: " . ($result['error'] ?? 'Unknown error') . "\n";
    }
}
