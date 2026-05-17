<?php
// ── CORS ──────────────────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
    header("Vary: Origin");
} else {
    header("Access-Control-Allow-Origin: *");
}
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
// ─────────────────────────────────────────────────────────────────────────

// Copy this file to config.php and fill in your actual credentials.
// config.php is listed in .gitignore and must NEVER be committed.

$host    = '127.0.0.1';
$db      = 'your_database_name';
$user    = 'your_database_user';
$pass    = 'your_database_password';
$charset = 'utf8mb4';
$port    = '3306';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed: " . $e->getMessage()]));
}

header("Content-Type: application/json");
session_start();

function respond($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function checkAuth() {
    if (!isset($_SESSION['admin_id'])) {
        respond(["error" => "Unauthorized"], 401);
    }
}
