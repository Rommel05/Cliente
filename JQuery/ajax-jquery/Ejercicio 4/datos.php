<?php
    $nombre = $_POST['nombre'] ?? null;
    $apellido = $_POST['apellido'] ?? null;

    echo $nombre." ".$apellido;
?>