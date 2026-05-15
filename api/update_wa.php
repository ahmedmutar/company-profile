<?php
require 'config.php';
checkAuth();

$data = json_decode(file_get_contents("php://input"), true);
$new_wa = $data['wa_number'] ?? '';

if (!$new_wa) respond(["error" => "No WA number provided"], 400);

// Path to the root folder (where the .html files are)
$dir = dirname(__DIR__);
$files = glob($dir . "/*.html");

$success_count = 0;
$error_count = 0;

foreach ($files as $file) {
    $content = file_get_contents($file);
    
    // Pattern for wa.me links
    // Handles https://wa.me/NUMBER and https://wa.me/NUMBER?text=...
    $content = preg_replace('/https:\/\/wa\.me\/[0-9]+/', "https://wa.me/" . $new_wa, $content);
    
    // Pattern for displayed phone number in contact.html (optional but good)
    // Looking for "+62 812 000 0000" style
    if (basename($file) === 'contact.html') {
        // This is a bit specific, but we can try to match the format
        $formatted_wa = '+' . substr($new_wa, 0, 2) . ' ' . substr($new_wa, 2, 3) . ' ' . substr($new_wa, 5, 3) . ' ' . substr($new_wa, 8);
        $content = preg_replace('/\+62\s812\s000\s0000/', $formatted_wa, $content);
    }

    if (file_put_contents($file, $content) !== false) {
        $success_count++;
    } else {
        $error_count++;
    }
}

respond([
    "success" => true,
    "updated_files" => $success_count,
    "errors" => $error_count
]);
