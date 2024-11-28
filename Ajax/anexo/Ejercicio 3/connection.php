<?php
$opciones = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_PERSISTENT => true
);

try {
    $pdo = new PDO(
        'mysql:host=localhost;dbname=libros;charset=utf8',
        'root',
        'sa',
        $opciones
    );
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
};

$libroId = $_POST['id'] ?? null;

if ($libroId) {
    $sql = "SELECT * FROM libro WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $libroId, PDO::PARAM_INT);
    $stmt->execute();

    $libro = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($libro ) {
        echo "<table border='1'>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>Título</th>";
        echo "<th>Autor</th>";
        echo "<th>Año de Publicación</th>";
        echo "<th>Género</th>";
        echo "</tr>";
        echo "<tr>";
        echo "<td>" . $libro['id'] . "</td>";
        echo "<td>" . $libro['titulo'] . "</td>";
        echo "<td>" . $libro['autor'] . "</td>";
        echo "<td>" . $libro['anio_publicacion'] . "</td>";
        echo "<td>" . $libro['genero'] . "</td>";
        echo "</tr>";
        echo "</table>";
    } else {
        echo "Libro no encontrado.";
    }
} else {
    echo "No se ha proporcionado un ID de libro.";
};

?>