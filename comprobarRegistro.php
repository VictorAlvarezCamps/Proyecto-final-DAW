<?php

    include ('Modelo.php');
    include ("api2.php");

    $c = new conexionBD();
    $conexion = $c->conexion();

    $api = new api();


    //Función para generar un Nick aleatorio al registrarse un usuario
    function crearNick(){

        $Nombres = array('Johnathon', 'Anthony','Erasmo','Raleigh','Nancie','Tama','Camellia',
        'Augustine','Christeen','Luz','Diego','Lyndia','Thomas','Georgianna','Leigha','Alejandro',
        'Marquis','Joan','Stephania','Elroy','Zonia','Buffy','Sharie','Blythe','Gaylene','Elida',
        'Randy','Margarete','Margarett','Dion','Tomi','Arden','Clora','Laine','Becki','Margherita',
        'Bong','Jeanice','Qiana','Lawanda','Rebecka','Maribel','Tami','Yuri','Michele','Rubi',
        'Larisa','Lloyd','Tyisha','Samatha');

        $Apellidos = array('Mischke','Serna','Pingree','Mcnaught','Pepper','Schildgen','Mongold',
        'Wrona','Geddes','Lanz','Fetzer','Schroeder','Block','Mayoral','Fleishman','Roberie',
        'Latson','Lupo','Motsinger','Drews','Coby','Redner','Culton','Howe','Stoval','Michaud',
        'Mote','Menjivar','Wiers','Paris','Grisby','Noren','Damron','Kazmierczak','Haslett',
        'Guillemette','Buresh','Center', 'Kucera','Catt', 'Badon','Grumbles','Antes','Byron',
        'Volkman','Klemp','Pekar','Pecora','Schewe','Ramage');

        $nick = "";

        $randomNumero = rand(0,count($Nombres));

        $ramdomNumero2 = rand(0,count($Apellidos)); 

        $nick = $Nombres[$randomNumero] . " " . $Apellidos[$ramdomNumero2];

        return $nick;

    }

      //Comprobamos si las variables enviadas por POST de Email y Password existen al hacer el registro
    if(isset($_POST["EmailRegistro"]) && isset($_POST["PasswordRegistro"])){

        if(array_key_exists('verificarRegistro', $_POST)) { 

            $email = $_POST['EmailRegistro'];
            $pass = $_POST['PasswordRegistro'];

            $cont = 0;

            if($email == "" && $pass == ""){

                $cont = 4;

                echo '<script src="js/api.js"></script>';
                echo '<script type="text/javascript">',
                     'enviarALogin(' . $cont .');',
                     '</script>';

            }else{

                $nick = crearNick();

                $cont = 0;

                $insertarDatosUsuario = "INSERT INTO Usuario(Password,Email,Nick) VALUES ('" . $pass . "','" . $email . "','" . $nick ."')";

                $Usuarios = $api->Consulta($conexion,$insertarDatosUsuario);

                $cont = 5;
                
                echo $insertarDatosUsuario;

                echo '<script src="js/api.js"></script>';
                echo '<script type="text/javascript">',
                'enviarALogin(' . $cont .');',
                '</script>';

            }

        }

    }

?>