<?php
    $nombre = $_GET["nombre"] ?? "No se ha encontrado el primer dato";
    $apellido = $_GET["apellido"] ?? "No se ha encontrado el segundo dato";

    echo $nombre." ".$apellido;
?>