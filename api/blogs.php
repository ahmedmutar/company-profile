<?php
require 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

if ($method === 'GET') {
    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
        $stmt->execute([$id]);
        $blog = $stmt->fetch();
        if ($blog) {
            $blog['tags'] = json_decode($blog['tags'] ?: '[]');
            $blog['published'] = (bool)$blog['published'];
            respond($blog);
        } else {
            respond(["error" => "Not found"], 404);
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM blogs ORDER BY created_at DESC");
        $blogs = $stmt->fetchAll();
        foreach($blogs as &$b) {
            $b['tags'] = json_decode($b['tags'] ?: '[]');
            $b['published'] = (bool)$b['published'];
        }
        respond($blogs);
    }
}

// Require authentication for POST, PUT, DELETE
checkAuth();

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO blogs (title, category, author, excerpt, body, readtime, tags, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $data['title'] ?? '',
        $data['category'] ?? '',
        $data['author'] ?? '',
        $data['excerpt'] ?? '',
        $data['body'] ?? '',
        $data['readtime'] ?? '',
        json_encode($data['tags'] ?? []),
        !empty($data['published']) ? 1 : 0
    ]);
    respond(["success" => true, "id" => $pdo->lastInsertId()]);
}

if ($method === 'PUT') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE blogs SET title=?, category=?, author=?, excerpt=?, body=?, readtime=?, tags=?, published=? WHERE id=?");
    $stmt->execute([
        $data['title'] ?? '',
        $data['category'] ?? '',
        $data['author'] ?? '',
        $data['excerpt'] ?? '',
        $data['body'] ?? '',
        $data['readtime'] ?? '',
        json_encode($data['tags'] ?? []),
        !empty($data['published']) ? 1 : 0,
        $id
    ]);
    respond(["success" => true]);
}

if ($method === 'DELETE') {
    if (!$id) respond(["error" => "ID is required"], 400);
    $stmt = $pdo->prepare("DELETE FROM blogs WHERE id=?");
    $stmt->execute([$id]);
    respond(["success" => true]);
}
