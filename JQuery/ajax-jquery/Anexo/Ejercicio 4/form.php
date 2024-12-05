<?php
    $nombre = $_POST['nombre'] ?? null;
    $clave = $_POST['clave'] ?? null;

    if (strtolower($nombre) == 'pepe' && strtolower($clave) == 'hola') {
        echo '<h1>Usuario correcto</h1>';
    } else {
        echo '<h1>Usuario incorrecto</h1>';
    }
?>