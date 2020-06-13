/*IMPORTS*/

/*Forms*/
let Botones;

/*Divs*/

let login = document.getElementById("formularioDerechaLogin").children[1];
let registro = document.getElementById("formularioDerechaLogin").children[2];
let ventanaRecuperarCuenta = document.getElementById("ventanaRecuperacion");

/*Inputs login*/
let inputEmail = login.children[0].children[0].children[0];
let inputPassword = login.children[0].children[1].children[0];

/*Botones login*/
let btnLogin = login.children[0].children[2];

/*Inputs registro*/
let inputEmailRegistro = registro.children[0].children[1].children[0];
let inputPasswordRegistro = registro.children[0].children[2].children[0];

/*Botones registro*/
let btnCrearCuenta = registro.children[0].children[3].children[0];


/*Cierra ventana de recuperación de cuenta*/
function cerrarVentana(){

    let p = document.body;

    let ventana = document.getElementsByClassName("ventanaError");    

    p.removeChild(ventana[0]);

}

/*Muestra la ventana para recuperar correo/contraseña*/
function ventanaRecuperacion(){    

    if(inputEmail[0] != ""){ 

        if(emailCorrecto(inputEmail[0].value) == true){
            
            //Añadimos un div como ventana
            let vRecuperacion = document.createElement("div");
            vRecuperacion.classList.add("ventanaRecuperacion");

            //Añade una imagen de un aspa
            let aspa = document.createElement("div");
            aspa.addEventListener("click",cerrarVentanaRecuperacion);
            aspa.classList.add("aspa");

            //Texto para la ventana
            let texto = " Revisa el correo, se ha enviado a tu correo una nueva contraseña."
            let t = document.createElement("h1");
            t.innerText = texto;
            t.classList.add("textoVentanaRecuperacion");

            //Botón de aceptar
            let btn = document.createElement("btn");
            btn.classList.add("btnVentanaRecuperacion");
            btn.innerText = "Aceptar";

            //Añadimos los componentes
            //vRecuperacion.appendChild(btn);
            vRecuperacion.appendChild(t);
            vRecuperacion.appendChild(aspa);
            document.body.appendChild(vRecuperacion);

            sendEmail(inputEmail[0].value);

        }else{
            alert("introduce un email correcto!");
        }
        
    }

}

/*Mostrar ventana usuario erróneo*/
function ventanaUsuarioIncorrecto(){
    let p = document.body;
    let texto = "Usuario incorrecto, comprueba de nuevo";

    let ventana = document.createElement("div");
    ventana.classList.add("ventanaRecuperacion");

    let aspa = document.createElement("div");
    aspa.classList.add("aspa");
    aspa.addEventListener("click",cerrarVentana);

    let t = document.createElement("h1");
    t.innerText = texto;

    ventana.appendChild(t);
    ventana.appendChild(aspa);
    p.appendChild(ventana);
}

/*Función para logear*/
function verificarLogin(datos){

    if(jsonVacio(datos) == false){

        let info = JSON.stringify(datos);

        let id = info.substring(info.length-4,info.length-3);
      
        window.location.href = "inicio.php?i=" + id + "";

    }
        
}


/*Login*/
function mostrarLogin(){
    registro.style.display = "none";
    login.style.display = "block";
}

/*Registro*/
function mostrarRegistro(){    
    login.style.display = "none";
    registro.style.display = "block";
}

function init() {

    //Ocultamos Registro por defecto
    document.getElementById("formularioDerechaLogin").children[2].style.display = "none";    

    //Eventos para cambiar a Login o Registro
    Botones = document.getElementsByClassName("LoginRegistro");
    Botones[0].children[0].addEventListener("click",mostrarLogin);
    Botones[0].children[1].addEventListener("click",mostrarRegistro);        
}


window.onload = init;