<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        @import url("css/style.css");       
    </style>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
    <script type='text/javascript' src='https://cdn.scaledrone.com/scaledrone.min.js'></script>
    
    <!--Librerias-->

    <!--JQUERY-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" ></script>

    <!--Encriptar y desencriptar-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>

    <!--Filtros-->


    
    <script src="js/api.js"></script>
    <script src="js/inicio.js"></script>

</head>
<body>
    <?php
        //$con = null;

        //$IDUsuario = $_POST["ID_USUARIO"];
						
        include ("Modelo.php");
        include ("api2.php");   
        $c = new conexionBD();
        $conexion = $c->conexion();

        $api = new api();

        //ID Usuario
        $url = explode('=', $_SERVER['REQUEST_URI']);

        //Consultas        
        $buscarIngredientes = "SELECT * FROM INGREDIENTE WHERE IngredienteUsuario = ". $url[1];
        $buscarRecetas = "SELECT * FROM RECETA WHERE RecetaUsuario = ". $url[1];        
        $buscarUsuarios = "SELECT * FROM USUARIO WHERE ID = ". $url[1];
        $contarRecetasUsuario = "SELECT Count(RecetaUsuario) AS Total FROM Receta WHERE RecetaUsuario = ". $url[1];
        $todasRecetas = "SELECT * FROM RECETA";
        $novedades = "SELECT * FROM Receta R INNER JOIN Usuario U ON R.RecetaUsuario = U.ID ORDER BY R.ID_Receta DESC LIMIT 3";
        
        //Realizar consultas
        $Ingredientes = $api->Consulta($conexion,$buscarIngredientes);
        $Recetas = $api->Consulta($conexion,$buscarRecetas);
        $Usuarios = $api->Consulta($conexion,$buscarUsuarios);
        $totalRecetas = $api->Consulta($conexion,$contarRecetasUsuario);
        $todasRecetasBD = $api->Consulta($conexion,$todasRecetas);
        $recetasNovedades = $api->Consulta($conexion,$novedades);

        //Construimos los objetos para poder mostrar los datos de recetas, ingredientes y la info de usuarios
        $api->objetoSQL($Ingredientes,"Ingrediente");
        $api->objetoSQL($Recetas,"Receta");
        $api->objetoSQL($Usuarios,"Usuario");
        $api->objetoSQL($totalRecetas,"totalRecetas");
        $api->objetoSQL($recetasNovedades,"recetasNovedades");
        //$api->objetoSQL($mejoresRecetas,"mejoresRecetasPuntuadas");


    ?>
    <header>
        <div class="background-Logo"><img class="Logo" src="img/logo.jpg"></div>
        <div class="background-Menu">
            <p id="nameUser">Usuario</p>
            <div class="circle">
                <img class="imgPerfil">
            </div>
        </div>
        <div class="menu">
            <div class="textMenu">Menú</div>
            <ol class="icons">
                <li>
                    <a href="#" class="icon-li"><img src="https://webstockreview.net/images/facebook-clipart-dark-7.png" style="background-color: black;" class="icon-li"></a>
                </li>
                <li>                
                    <a href="#" class="icon-li"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-512.png" class="icon-li"></a>                    
                </li>
                <li>                    
                    <a href="#" class="icon-li"><img src="https://cdn.icon-icons.com/icons2/887/PNG/128/Instagram_New_icon-icons.com_69008.png" class="icon-li"></a>                    
                </li>
            </ol>
            <ol class="nav">
                <li>
                <div class="circleMenu">
                    <img class="imgPerfilMenu">
                </div>
                </li>
                <li class="menu-item"><a href="#0">Inicio</a></li>
                <li class="menu-item"><a href="#0">Mis ingredientes</a></li>
                <li class="menu-item"><a href="#0">Recetas que puedo realizar</a></li>
                <li class="menu-item"><a href="#0">Todas las recetas</a></li>
                <li class="menu-item"><a href="#0">Mi perfil</a></li>
                <li class="menu-item cierre"><a href="#0">Desconectar</a></li>         
            </ol>
        </div>     
    </header>

    <content class="contentPage">
        <div class="Contenido">    
        </div>        
    </content>
 
    <script src="js/apiSecciones.js"></script>
</body>
</html>