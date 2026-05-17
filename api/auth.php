<?php
require __DIR__ . '/config.php';

$action = $_GET['action'] ?? '';

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($action === 'login') {
            $data = json_decode(file_get_contents('php://input'), true);
            $username = $data['username'] ?? '';
            $password = $data['password'] ?? '';

            $stmt = $pdo->prepare("SELECT id, password FROM admin_users WHERE username = ?");
            $stmt->execute([$username]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                $_SESSION['admin_id'] = $user['id'];
                respond(["success" => true]);
            } else {
                respond(["error" => "Incorrect username or password"], 401);
            }
        } elseif ($action === 'logout') {
            session_destroy();
            respond(["success" => true]);
        } elseif ($action === 'change_password') {
            checkAuth();
            $data = json_decode(file_get_contents('php://input'), true);
            $new_password = $data['new_password'] ?? '';

            if (strlen($new_password) < 6) {
                respond(["error" => "Password must be at least 6 characters"], 400);
            }

            $hash = password_hash($new_password, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("UPDATE admin_users SET password = ? WHERE id = ?");
            $stmt->execute([$hash, $_SESSION['admin_id']]);
            respond(["success" => true]);
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if ($action === 'check') {
            if (isset($_SESSION['admin_id'])) {
                respond(["authenticated" => true]);
            } else {
                respond(["authenticated" => false], 401);
            }
        }
    }
} catch (\PDOException $e) {
    respond(["error" => "Database error: " . $e->getMessage()], 500);
} catch (\Throwable $e) {
    respond(["error" => "Server error: " . $e->getMessage()], 500);
}
