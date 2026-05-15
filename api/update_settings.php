<?php
require 'config.php';
checkAuth();

$data = json_decode(file_get_contents("php://input"), true);
$new_wa = $data['wa_number'] ?? '';
$new_formspree = $data['formspree_id'] ?? '';

if (!$new_wa) respond(["error" => "No settings provided"], 400);

$dir = dirname(__DIR__);
$files = glob($dir . "/*.html");

$success_count = 0;
$error_count = 0;

foreach ($files as $file) {
    $content = file_get_contents($file);
    $filename = basename($file);
    
    // Pattern for wa.me links
    $content = preg_replace('/https:\/\/wa\.me\/[0-9]+/', "https://wa.me/" . $new_wa, $content);
    
    // Pattern for displayed phone number in contact.html
    if ($filename === 'contact.html') {
        // Formatted WA number replace
        $formatted_wa = '+' . substr($new_wa, 0, 2) . ' ' . substr($new_wa, 2, 3) . ' ' . substr($new_wa, 5, 3) . ' ' . substr($new_wa, 8);
        $content = preg_replace('/\+62\s812\s000\s0000/', $formatted_wa, $content);

        // Formspree ID replace
        if ($new_formspree) {
            $content = preg_replace('/https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+/', "https://formspree.io/f/" . $new_formspree, $content);
        }
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
