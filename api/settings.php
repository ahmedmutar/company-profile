<?php
require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT setting_key, setting_value FROM settings");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    respond($settings);
}

// Ensure auth for POST/PUT/DELETE
checkAuth();

if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!is_array($data)) respond(["error" => "Invalid data"], 400);

    $pdo->beginTransaction();
    try {
        $stmt = $pdo->prepare("INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)");
        foreach ($data as $key => $value) {
            $stmt->execute([$key, $value]);
        }
        $pdo->commit();
        respond(["success" => true]);
    } catch (Exception $e) {
        $pdo->rollBack();
        respond(["error" => "Failed to update settings"], 500);
    }
}
