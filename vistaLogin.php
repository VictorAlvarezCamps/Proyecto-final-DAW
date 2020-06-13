<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        @import url("css/Login.css");        
    </style>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
    <!--Para el envío de correo y recuperación de cuenta-->

</head>
<body>
    <?php
        
        include ('Modelo.php');
        include ("api2.php");

        $c = new conexionBD();
        $conexion = $c->conexion();

        $api = new api();

        if(isset($_POST["desconectar"])){

            unset($_COOKIE['datosUsuario']);
            setcookie('datosUsuario', null, -1, '/');
            header("Location: vistaLogin.php");

        }else{

    ?>
    
    <div id="formularioEntero">

        <div id="Imagen">
            <img src="img/cooking.gif" >
        </div>

        <div id="formularioDerechaLogin">

            <h1>Cooking Recipes</h1>

            <form action="comprobarLogin.php" method="POST">
                <div class="Login" id="Login">
                    
                    <div class="Inputs">
                        <input placeholder="Email" type="email" name="Email" id="field_email_Login" class='input_field'>
                    </div>
                    <div class="Inputs">
                        <input  placeholder="Password" type="password" name="Password" id="field_password_Login" class='input_field' autocomplete="on">
                    </div>

                    <input type="submit" name="verificarLogin" value="Login" id='input_submit' class='input_field' >
                                    
                    <!--<span>Has olvidado <label id="ventanaRecuperacion"><a>Usuario / Contraseña</a></label>?</span>-->
                
                </div>
            </form> 

            <form action="comprobarRegistro.php" method="POST">
                <div class="Registro" id="Registro">
                    <h1>Creando cuenta...</h1>
                    <div class="Inputs">
                        <input placeholder="Email" type="email" name="EmailRegistro" id="field_email_Register" class='input_field'>
                    </div>
                    <div class="Inputs">
                        <input  placeholder="Password" type="password" name="PasswordRegistro" id="field_password_Register" class='input_field' autocomplete="on">
                    </div>                    
                    <input type="submit" name="verificarRegistro" value="Crear una cuenta ➡" id='input_submit2' class='input_field'> </a>
                </div>
            </form>

            <div class="LoginRegistro">
                <button name="Login" id="TextoLogin" class="TextoLogin">Login</button>
                <button name="Registro" id="TextoRegistro" class="TextoRegistro">Registro</button>
            </div> 

        </div>
        <?php

        }

        ?>

        <script src="js/Login.js"></script>
        <script src="js/api.js"></script>
        <script>

            //Revisamos la acción recibida del usuario y comprobamos el item recibido

            //Login

            if(sessionStorage.getItem("camposVacios")){
                ventanaCamposVacios();  
            }

            if(sessionStorage.getItem("usuarioCorrecto")){        
                let datos = <?php echo $_COOKIE["datosUsuario"];?>                
                verificarLogin(datos);
            }

            if(sessionStorage.getItem("usuarioinCorrecto")){
                errorUsuario();
            }

            //Registro                

            if(sessionStorage.getItem("RegistroCamposVacios")){
                errorRegistro();
            }

            if(sessionStorage.getItem("RegistroUsuario")){
                verificarRegistro();
            }

        </script> 
        
           
</body>
</html>