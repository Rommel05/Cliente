<?php
$xml = file_get_contents('php://input');

header('Content-Type: application/xml');

echo $xml;
?>
