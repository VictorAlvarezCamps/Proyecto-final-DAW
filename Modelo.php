<?php   

    class conexionBD{

        function conexion(){

            session_start();

            //AWARDSPACE
            /*$servername = "fdb23.awardspace.net";
            $database = "3150438_cookingrecipes";
            $username = "3150438_cookingrecipes";
            $password = "A7spxfcd2f!";*/

            //LOCAL
            
            $servername = "localhost";
            $database = "CookingRecipes";
            $username = "root";
            $password = "";

            $conn = mysqli_connect($servername, $username, $password, $database);

            

            mysqli_set_charset($conn,"utf8");

            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }

            return $conn;
        }

        function cerrarConexion($conexion){
            mysqli_close($conexion);
        }
        
    }

?>