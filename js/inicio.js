/*Variables*/

/////Info Datos BD/////

//Recetas
let Recetas;

//Usuarios
let Usuarios;

//Ingredientes
let Ingredientes;

//Info Usuario
let Info;

//Cant total Recetas por usuario
let cantTotal;

//Novedades
let Novedades;

//Puntuadas
let Puntuadas;

/////SECCIONES/////

/*Seccion recetas*/
let todasRecetas;
let arrayRecetas = new Array();

/*Seccion novedades*/
let novedades;

/*Sección donde aparece todo el contenido*/
let general;
let divSeccion;
let todasSecciones;

/////MENU/////

/*Menu*/
let divMenu = document.getElementsByClassName("Menu")[0];
let botonesMenu;

/*Función con la que construiremos todo el contenido principal*/
function contenidoPrincipal(){

    //Recogemos el div que contiene todo el contenido
    todasSecciones = document.getElementsByClassName("Contenido")[0];

    //Nos guardamos la sección general donde estará el contenido
    general = todasSecciones;    

    //Ponemos un evento a cada botón del menú para diferenciar el contenido en el div de Recetas
    botonesMenu = document.getElementsByClassName("menu-item");
    
    for(let i = 0; i < botonesMenu.length; i++) {
        botonesMenu[i].addEventListener("click",seccionPuesta);
    }


}

/*Función para quitar sección que ya esté activa*/
function quitarSeccion(){
    //Seleccionamos los hijos que contiene el div general
    let contenidoPuesto = document.querySelector(".Contenido").children;    
    
    //Recorremos y eliminamos todos los anteriores para dejar paso al nuevo
    for (let i = 0; i < contenidoPuesto.length; i++) {       
        general.removeChild(contenidoPuesto[i]);        
    }
}

/*Función para poner la nueva sección elegida*/
function construirSeccion(nombre){
    //Construimos un div
    divSeccion = document.createElement("div");
    //Le damos una id
    divSeccion.id = nombre;
    //Lo unimos al div general
    general.appendChild(divSeccion);
}

/*Función para diferenciar las secciones*/
function seccionPuesta(){
    //Nos guardamos la sección
    seccion = this.children[0].innerText;

    switch (seccion) {
        case "Inicio":
            quitarSeccion();
            construirSeccion("Inicio");
            mostrarInicio();
            break;
        case "Mis ingredientes":
            quitarSeccion();
            construirSeccion("MisIngredientes");
            mostrarMisIngredientes();
            break;
        case "Recetas que puedo realizar":
            quitarSeccion();
            construirSeccion("MisRecetas");
            mostrarRecetasUsuario();
            break;
        case "Todas las recetas":
            quitarSeccion();
            construirSeccion("TodasLasRecetas");
            mostrarRecetas();
            break;
        case "Mi perfil":
            quitarSeccion();
            construirSeccion("MiPerfil");
            construirPerfil(Usuarios);
            bloquearTodoPerfil();
            break;
        case "Desconectar":
            desconectar();
            break;
        default:
            break;
    }
}

/*Función principal*/
function init(){

    //Recetas
    Recetas = obtenerRecetas();    

    //Usuarios
    Usuarios = obtenerUsuarios();

    //Ingredientes
    Ingredientes = obtenerIngredientes();

    //Cantidad total de Recetas
    cantTotal = CantTotalRecetas();

    //Novedades
    Novedades = obtenerNovedades();

    //Puntuadas
    //Puntuadas = obtenerPuntuadas();

    //Llamamos a la función que nos construirá el contenido principal
    contenidoPrincipal();
    
    //Por defecto construiremos el contenido y mostraremos los datos de inicio
    construirSeccion("Inicio");
    mostrarInicio();
    Header();

}

window.onload = init;