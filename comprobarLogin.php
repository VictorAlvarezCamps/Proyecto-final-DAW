<?php

    include ('Modelo.php');
    include ("api2.php");

    $c = new conexionBD();
    $conexion = $c->conexion();

    $api = new api();

    //Comprobamos si las variables enviadas por POST de Email y Password existen
    if(isset($_POST["Email"]) && isset($_POST["Password"])){

        //Comprobamos si al completar el login existe el nombre del form
        if(array_key_exists('verificarLogin', $_POST)) { 
                    
            //Recogemos los valores
            $email = $_POST['Email'];
            $pass = $_POST['Password']; 
          
            //Contador para diferenciar acción
            $cont = 0;

            //Si los campos estan vacios lo enviamos de vuelta al login con un mensaje de error para el usuario
            //indicándole que los campos están vacíos
            if($email == "" && $pass == ""){

                $cont = 1;

                echo '<script src="js/api.js"></script>';
                echo '<script type="text/javascript">',
                     'enviarALogin(' . $cont .');',
                     '</script>';
            }else{

                //Variable para guardarnos los datos en caso de que el usuario sea correcto
                $datosUsuario = array();

                //Realizamos la consulta con el usuario y password indicado
                $buscarDatosUsuario = "SELECT Email,Password,ID FROM Usuario WHERE Email = '" . $email . "' AND Password = '" . $pass . "' ";

                $Usuarios = $api->Consulta($conexion,$buscarDatosUsuario);

                //Recorremos los resultados
                while ($datosUsuario = mysqli_fetch_row($Usuarios)){

                    $datosUsuario = [
                        [
                            "Email: " => $datosUsuario[0],
                            "idUser: " => $datosUsuario[2],
                        ]
                    ];

                    $datosDeUsuario = json_encode($datosUsuario);                    

        
                }

                //En caso de que haya resultado loguearemos al usuario
                if($datosDeUsuario != ""){

                    $cont = 2;
                    
                    echo '<script src="js/api.js"></script>';
                    echo '<script src="js/Login.js"></script>';
                    $api->crearCookie("datosUsuario",$datosDeUsuario);
                    echo '<script type="text/javascript">enviarALogin(' . $cont .')</script>';

                //Si no hay resultados lo enviamos de vuelta al login con mensaje de error de usuario incorrecto
                }else{

                    $cont = 3;

                    echo '<script src="js/api.js"></script>';
                    echo '<script type="text/javascript">enviarALogin(' . $cont .')</script>';   
                    
                }
                
            }
        }
    }

?>