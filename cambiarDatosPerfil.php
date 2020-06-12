<?php

    include ('Modelo.php');
    include ("api2.php");

    $c = new conexionBD();
    $conexion = $c->conexion();

    $api = new api();

    $nuevaInfo = isset($_POST['datosNuevos']) ? $_POST['datosNuevos'] : null;
    $id = isset($_POST['id']) ? $_POST['id'] : null;

    //Datos nuevos
    $info = explode(",",$nuevaInfo);

    $dato1 = $info[0];
    $dato2 = $info[1];
    $dato3 = $info[2];
    $dato4 = $info[3];
    
    $actualizarDatosUsuario = "UPDATE USUARIO SET Nombre = '" . $info[1] . "', Password = '" . $info[2] . "' , Nick = '" . $info[0] . "', Descripcion = '" . $info[3] . "' WHERE ID = " . $id;

    $Usuarios = $api->Consulta($conexion,$actualizarDatosUsuario);

    $row = mysqli_fetch_array($Usuarios,MYSQLI_ASSOC);
       
    //header("Location: vistaLogin.php");



?>