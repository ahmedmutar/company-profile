<?php
require 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

if ($method === 'GET') {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM case_studies WHERE id = ?");
        $stmt->execute([$id]);
        $cs = $stmt->fetch();
        if ($cs) {
            $cs['tags'] = json_decode($cs['tags'] ?: '[]');
            $cs['metrics'] = json_decode($cs['metrics'] ?: '[]');
            $cs['published'] = (bool)$cs['published'];
            respond($cs);
        } else {
            respond(["error" => "Not found"], 404);
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM case_studies ORDER BY created_at DESC");
        $items = $stmt->fetchAll();
        foreach($items as &$item) {
            $item['tags'] = json_decode($item['tags'] ?: '[]');
            $item['metrics'] = json_decode($item['metrics'] ?: '[]');
            $item['published'] = (bool)$item['published'];
        }
        respond($items);
    }
}

// Require authentication for POST, PUT, DELETE
checkAuth();

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO case_studies (title, industry, service, duration, summary, body, metrics, tags, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $data['title'] ?? '',
        $data['industry'] ?? '',
        $data['service'] ?? '',
        $data['duration'] ?? '',
        $data['summary'] ?? '',
        $data['body'] ?? '',
        json_encode($data['metrics'] ?? []),
        json_encode($data['tags'] ?? []),
        !empty($data['published']) ? 1 : 0
    ]);
    respond(["success" => true, "id" => $pdo->lastInsertId()]);
}

if ($method === 'PUT') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE case_studies SET title=?, industry=?, service=?, duration=?, summary=?, body=?, metrics=?, tags=?, published=? WHERE id=?");
    $stmt->execute([
        $data['title'] ?? '',
        $data['industry'] ?? '',
        $data['service'] ?? '',
        $data['duration'] ?? '',
        $data['summary'] ?? '',
        $data['body'] ?? '',
        json_encode($data['metrics'] ?? []),
        json_encode($data['tags'] ?? []),
        !empty($data['published']) ? 1 : 0,
        $id
    ]);
    respond(["success" => true]);
}

if ($method === 'DELETE') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $stmt = $pdo->prepare("DELETE FROM case_studies WHERE id=?");
    $stmt->execute([$id]);
    respond(["success" => true]);
}
