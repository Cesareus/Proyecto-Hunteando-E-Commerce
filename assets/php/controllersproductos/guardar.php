<?php
include '../conection/Conexion.php';

$producto = $_POST["array"];
var_dump($producto[0]);
$conexion = new Conexion();

try {
    $cnn = $conexion->getConexion();
    $sql = "INSERT INTO productos(categoria, subcategoria, dir_imagen, titulo, descripcion, precio) VALUES (?,?,?,?,?,?)";
    $statement = $cnn->prepare($sql);
    $respuesta = false;

    $statement->bindParam(1, $producto[0], PDO::PARAM_STR);
    $statement->bindParam(2, $producto[1], PDO::PARAM_STR);
    $statement->bindParam(3, $producto[2], PDO::PARAM_STR);
    $statement->bindParam(4, $producto[3], PDO::PARAM_STR);
    $statement->bindParam(4, $producto[4], PDO::PARAM_STR);
    $statement->bindParam(5, $producto[5], PDO::PARAM_INT);
    $respuesta = $statement->execute();

    echo  json_encode($respuesta);

    $statement->closeCursor();
    $conexion = null;
} catch (PDOException $e) {
    echo 'PDOException : ' . $e->getMessage();
}


