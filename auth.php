<?php
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['user'];
    $password = $_POST['password'];

    // Vérification des identifiants
    if ($user === 'user' && $password === 'password') {
        $message = 'Vous êtes connecté';
    } else {
        $message = 'Identifiants incorrects';
    }

    echo $message;
    exit;
}
?>