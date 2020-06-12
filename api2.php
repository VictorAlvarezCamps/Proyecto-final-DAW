<?php

    //include ('Modelo.php');

    class api{
            
        /*Función par la recuperación de cuenta*/
        function enviarCorreo($email){

            //$destinatario = "cookingrecipesworld@gmail.com"; 
            $destinatario = $email;
            $asunto = "Este mensaje es de prueba"; 
            $cuerpo = ' 
            <html> 
            <head> 
            <title>Recuperación de cuenta de correo</title> 
            </head> 
            <body> 
            <h1>Hola!</h1> 
            <p> 
            <b>Hemos recibido una solicitud nueva para la recuperación de tu cuenta.
            Si no has realizado esta solicitud, no se requiere realizar ninguna otra acción.
            Esta es tu nueva contraseña: 
            </p> 
            </body> 
            </html> 
            '; 

            echo $cuerpo;

            //para el envío en formato HTML 
            $headers = "MIME-Version: 1.0\r\n"; 
            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

            //dirección del remitente 
            $headers .= "From: Cooking Recipes <cookingrecipesworld@gmail.com>\r\n"; 

            //dirección de respuesta, si queremos que sea distinta que la del remitente 
            $headers .= "Reply-To: cookingrecipesworld@gmail.com\r\n"; 

            //ruta del mensaje desde origen a destino 
            $headers .= "Return-path: cookingrecipesworld@gmail.com\r\n"; 

            //direcciones que recibián copia 
            //$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

            //direcciones que recibirán copia oculta 
            //$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

            mail($destinatario,$asunto,$cuerpo,$headers); 

        }




        //Función para construir objetos de la BD
        function objetoSQL($result,$tipo){

            $nuevoIngrediente = array();
            $nuevaReceta = array();
            $nuevoUsuario = array();
            $novedadesRecetas = array();
            $mejoresPuntuadas = array();

            if($tipo == "Receta"){

                while ($Receta = mysqli_fetch_row($result)){   

                    $Receta = [
                        [
                            "ID_Receta" => $Receta[0],
                            "Nombre" => $Receta[1],
                            "Descripcion" => $Receta[2],
                            "Imagen" => base64_encode($Receta[3]),
                            "Ingredientes" => $Receta[4],
                            "Categoria" => $Receta[5],
                            "RecetaUsuario" => $Receta[6]
                        ]
                    ];
        
                    $nuevaReceta = json_encode($Receta);
                    echo '<div class="Recetas">' . $nuevaReceta . '</div>';
                    
                }   

            }
            //Creamos tantos objetos como Ingredientes hayan en la BD
            if($tipo == "Ingrediente"){

                while ($Ingrediente = mysqli_fetch_row($result)){

        
                    $Ingrediente = [
                        [
                            "ID_Ingrediente" => $Ingrediente[0],
                            "Nombre" => $Ingrediente[1],
                            "Imagen" => base64_encode($Ingrediente[2]),
                            "Categoria" => $Ingrediente[3],
                            "ingredienteUsuario" => $Ingrediente[4]
                        ]
                    ];
        
                    $nuevoIngrediente = json_encode($Ingrediente);
                    echo '<div class="Ingredientes">' . $nuevoIngrediente . '</div>';
        
                }

            }

            //Creamos tantos objetos como usuarios hayan en la BD
            if($tipo == "Usuario"){

                while ($Usuario = mysqli_fetch_row($result)){

                    $Usuario = [
                        [
                            "ID" => $Usuario[0],
                            "Nombre" => $Usuario[1],
                            "Password" => $Usuario[2],
                            "Email" => $Usuario[3],
                            "Imagen" => base64_encode($Usuario[4]),
                            "Nick" => $Usuario[5],
                            "Descripcion" => $Usuario[6]
                        ]
                    ];
        
                    $nuevoUsuario = json_encode($Usuario);
                    echo '<div class="Usuarios">' . $nuevoUsuario . '</div>';
        
                }   

            }

            //Cantidad total de recetas
            if($tipo == "totalRecetas"){

                while ($total = mysqli_fetch_row($result)){

                    $totalR = json_encode($total[0]);
                    echo '<div class="cantTotalRecetas">' . $totalR . '</div>';

                }
            }

            //Novedades de recetas
            if($tipo == "recetasNovedades"){

                while ($novedades = mysqli_fetch_row($result)){

                    $novedades = [
                        [
                            "ID_Receta" => $novedades[0],
                            "Nombre" => $novedades[1],
                            "Descripcion" => $novedades[2],
                            "Imagen" => base64_encode($novedades[3]),
                            "Ingredientes" => $novedades[4],
                            "Categoria" => $novedades[5],
                            "RecetaUsuario" => $novedades[6]
                        ]
                    ];

                    $novedadesRecetas = json_encode($novedades);
                    echo '<div class="divNovedades">' . $novedadesRecetas . '</div>';

                }

            }

            //Mejores recetas puntuadas
            if($tipo == "mejoresRecetasPuntuadas"){

                while ($puntuadas = mysqli_fetch_row($result)){

                    $puntuadas = [
                        [
                            "ID_Receta" => $puntuadas[0],
                            "Nombre" => $puntuadas[1],
                            "Descripcion" => $puntuadas[2],
                            "Imagen" => base64_encode($puntuadas[3]),
                            "Puntuacion" => $puntuadas[4],
                            "Ingredientes" => $puntuadas[5],
                            "Categoria" => $puntuadas[6],
                            "ID_Usuario" => $puntuadas[7],
                            "Nick" => $puntuadas[15]
                        ]
                    ];

                    $mejoresPuntuadas = json_encode($puntuadas);
                    echo '<div class="divPuntuadas">' . $mejoresPuntuadas . '</div>';

                }

            }

        }

        //Función para crear una cookie
        function crearCookie($nombre,$valor){
            setcookie($nombre,$valor, time() + (86400 * 30), "/");
        }

        

        ///////////////////////////////////////////////////////////
        ///////                      SQL                    /////// 
        ///////////////////////////////////////////////////////////

        /*Consultas SQL*/
        function Consulta($con,$consulta){

            $result = mysqli_query($con, $consulta) ;

            return $result;

        }



    }

?>