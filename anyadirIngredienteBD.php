<?php

    include ('Modelo.php');
    include ("api2.php");

    $c = new conexionBD();
    $conexion = $c->conexion();

    $api = new api();

    $nombre = isset($_POST['nombreIngrediente']) ? $_POST['nombreIngrediente'] : null;
    $blobImagen = isset($_POST['imagenIngrediente']) ? $_POST['imagenIngrediente'] : null;
    $categoria = isset($_POST['categoriaIngrediente']) ? $_POST['categoriaIngrediente'] : null;
    $id = isset($_POST['id']) ? $_POST['id'] : null;

    $imagen =  base64_encode(addslashes($blobImagen));

    $insertarIngrediente = "INSERT INTO Ingrediente(Nombre,Categoria,IngredienteUsuario) VALUES ('" . $nombre . "','" . $categoria ."'," . $id .")";

    $Ingrediente = $api->Consulta($conexion,$insertarIngrediente);

    header("Location: vistaLogin.php");

?>