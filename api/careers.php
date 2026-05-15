<?php
require 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

if ($method === 'GET') {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM careers WHERE id = ?");
        $stmt->execute([$id]);
        $career = $stmt->fetch();
        if ($career) {
            $career['published'] = (bool)$career['published'];
            respond($career);
        } else {
            respond(["error" => "Not found"], 404);
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM careers ORDER BY created_at DESC");
        $items = $stmt->fetchAll();
        foreach($items as &$item) {
            $item['published'] = (bool)$item['published'];
        }
        respond($items);
    }
}

// Require authentication for POST, PUT, DELETE
checkAuth();

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO careers (title, department, location, type, description, requirements, published) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $data['title'] ?? '',
        $data['department'] ?? '',
        $data['location'] ?? '',
        $data['type'] ?? '',
        $data['description'] ?? '',
        $data['requirements'] ?? '',
        !empty($data['published']) ? 1 : 0
    ]);
    respond(["success" => true, "id" => $pdo->lastInsertId()]);
}

if ($method === 'PUT') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE careers SET title=?, department=?, location=?, type=?, description=?, requirements=?, published=? WHERE id=?");
    $stmt->execute([
        $data['title'] ?? '',
        $data['department'] ?? '',
        $data['location'] ?? '',
        $data['type'] ?? '',
        $data['description'] ?? '',
        $data['requirements'] ?? '',
        !empty($data['published']) ? 1 : 0,
        $id
    ]);
    respond(["success" => true]);
}

if ($method === 'DELETE') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $stmt = $pdo->prepare("DELETE FROM careers WHERE id=?");
    $stmt->execute([$id]);
    respond(["success" => true]);
}
