<?php
include '../conection/Conexion.php'; 

$producto = $_POST["array"];
var_dump($producto[0]);

$conexion = new Conexion();
$cnn = $conexion->getConexion();
$sql = "DELETE FROM `tbl_personal` WHERE `id`=:id";
$statement = $cnn->prepare($sql);

$statement -> bindParam(':id', $id, PDO::PARAM_INT);
$id=trim($_POST['id']);
$respuesta = false;

?>