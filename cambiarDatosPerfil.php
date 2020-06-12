<?php

    include ('Modelo.php');
    include ("api2.php");

    $c = new conexionBD();
    $conexion = $c->conexion();

    $api = new api();

    //$imagen = isset($_POST['imagen']) ? $_POST['imagen'] : null;
    $usuario = isset($_POST['usuario']) ? $_POST['usuario'] : null;
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : null;
    $correo = isset($_POST['correo']) ? $_POST['correo'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : null;
    $id = isset($_POST['id']) ? $_POST['id'] : null;
    
    $actualizarDatosUsuario = "UPDATE Usuario SET Nombre = '" . $nombre . "', Password = '" . $password . "', Nick = '" . $usuario . "', Descripcion = '" . $descripcion . "' WHERE ID = " . $id;

    echo $actualizarDatosUsuario;

    $Usuarios = $api->Consulta($conexion,$actualizarDatosUsuario);

    var_dump($Usuarios);

    $row = mysqli_fetch_array($Usuarios,MYSQLI_ASSOC);
       
    header("Location: vistaLogin.php");



?>