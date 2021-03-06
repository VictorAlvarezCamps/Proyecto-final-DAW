/**
 * Función que enviará un correo a un usuario para recuperar el password
 * @param  {string} e String email
 */

/*function sendEmail(e) {

    /*let b = "Hola!";
    b += "Hemos recibido una solicitud nueva para la recuperación de tu cuenta.";
    b += "Si no has realizado esta solicitud, no se requiere realizar ninguna otra acción.";
    b += "Esta es tu nueva contraseña: ";
    b += "";
    b += generarPass();
    b += "";*/

    /*$.ajax({
        url: 'api2.php',
        type: 'POST',
        data: 'email='+e,
        success: function(data) {
        alert(data);
        },
        error: function(){
        alert('Error!');
        }
    });*/

    
//}


/**
 * Función para generar una contrasenya nueva para el correo perdido
 * @return {string}      Devuelve un string generado aleatoriamente con un máximo de 10 carácteres
 */
function generarPass() {

    let pass = "";

    for (let i = 0; i < 10; i++) {

        pass += devolverLetraNum();

    }

    return pass;
}

/**
 * Función que devuelve una letra o un número al azar
 * @return {string}      Devuelve una letra o un número aleatorio como string
 */
function devolverLetraNum() {

    /*GenerarPassword*/
    letrasNums = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"
        , "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z",
        , "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var random = Math.round(Math.random() * letrasNums.length);

    var r = letrasNums[random];

    return r;
}

/**
 * Función que detecta si el texto recibido es un correo
 * @param  {String} email Email string
 * @return {boolean}      True -> Es un correo, False -> No es un correo
 */
function emailCorrecto(email) {

    let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    let result = false;
    
    if(email != ""){        

        if (regexEmail.test(email)) {
            result = true;
        } else {
            result = false;
        }

    }

    return result;
}

/**
 * Función para sumar 1 receta mas a la cantidad total de recetas que tiene el usuario en el perfil
 * @return {integer}      Devuelve un integer sumándole 1 a la receta anterior
 */

function sumarCantRecetasPerfil(){

    let cant = document.getElementsByClassName("cuadroPerfil")[0].children[8];

    cant.innerHTML = parseInt(cant.innerHTML) + 1;

    return cant.innerHTML.toString;
    
}

/**
 * Devuelve una clase de css según la categoria que reciba
 * @param  {string} c Categoria de la receta
 * @return {string}      Devuelve tipo de clase de css para esa categoria
 */
function categoriaReceta(c){

    let devolverClase = "";
    
    if(c == "Pescado"){devolverClase = "circuloRecetaPescado"}    
    if(c == "Sopa"){devolverClase = "circuloRecetaSopa"}    
    if(c == "Carne"){devolverClase = "circuloRecetaCarne"}    
    if(c == "Entrante"){devolverClase = "circuloRecetaEntrante"}    
    if(c == "Arroz"){devolverClase = "circuloRecetaArroz"}    
    if(c == "Pasta"){devolverClase = "circuloRecetaPasta"}    
    if(c == "Pizza"){devolverClase = "circuloRecetaPizza"}
    if(c == "Vegano"){devolverClase = "circuloRecetaVegano"}
    if(c == "Verdura"){devolverClase = "circuloRecetaVegano"}


    return devolverClase;

}

/**
 * Función para obtener todas las recetas
 * @return {Array}      Devuelve un array con todas las recetas 
 */
function obtenerRecetas(){

    let Recetas = document.getElementsByClassName("Recetas");

    let R = new Array();

    for (let i = 0; i < Recetas.length; i++) {       

        //convertimos el string a JSON
        R[i] = JSON.parse(Recetas[i].innerHTML);

    }

    return R;
}

/**
 * Función para obtener todos los usuarios
 * @return {Array}      Devuelve un array con todos los usuarios 
 */
function obtenerUsuarios(){

    let Usuarios = document.getElementsByClassName("Usuarios");

    let U = new Array();

    for (let i = 0; i < Usuarios.length; i++) {       
        
        //convertimos el string a JSON
        U[i] = JSON.parse(Usuarios[i].innerHTML);

    }

    return U;
    
}

/**
 * Función para obtener todos los ingredientes
 * @return {Array}      Devuelve un array con todos los ingredientes 
 */
function obtenerIngredientes(){

    let Ingredientes = document.getElementsByClassName("Ingredientes");

    let I = new Array();

    for (let i = 0; i < Ingredientes.length; i++) {       
        
        //convertimos el string a JSON
        I[i] = JSON.parse(Ingredientes[i].innerHTML);

    }

    return I;

}

/**
 * Función para obtener info del usuario
 * @return {Array}      Devuelve un array con la info de usuario
 */
function obtenerInfo() {
    
    let Info = document.getElementsByClassName("infoUsuarios");

    let d = new Array();

    for (let i = 0; i < Info.length; i++) {       
        
        //convertimos el string a JSON
        d[i] = JSON.parse(Info[i].innerHTML);

    }

    return d;

}

/**
 * Función para obtener todas las novedades
 * @return {Array}      Devuelve un array con todas las novedades
 */
function obtenerNovedades(){

    let Novedades = document.getElementsByClassName("divNovedades");

    let N = new Array();

    for (let i = 0; i < Novedades.length; i++) {       
        
        //convertimos el string a JSON
        N[i] = JSON.parse(Novedades[i].innerHTML);

    }

    return N;

}

/**
 * Función para obtener todas las recetas puntuadas
 * @return {Array}      Devuelve un array con todas las recetas puntuadas
 */
function obtenerPuntuadas(){

    let Puntuadas = document.getElementsByClassName("divPuntuadas");

    let P = new Array();

    for (let i = 0; i < Puntuadas.length; i++) {       
        
        //convertimos el string a JSON
        P[i] = JSON.parse(Puntuadas[i].innerHTML);

    }

    return P;
}


/**
 * Función para obtener todas las cantidad de recetas total de un usuario
 * @return {string}      Devuelve un string con la cantidad total de recetas de un usuario
 */
function CantTotalRecetas(){

    let cantT = document.getElementsByClassName("cantTotalRecetas");
    
    let cant = cantT[0].innerHTML.replace('"','');

    let v = cant.substr(0,cant.length-1);

    return v;

}

/**
 * Función para mostrar al usuario si el login es correcto o incorrecto
 */
function errorUsuario(){

    //Creamos los elementos
    let ventana = document.createElement("div");
    let texto = document.createElement("label");
    texto.innerHTML = "El usuario o el password es incorrecto";
    let btn =  document.createElement("button");
    btn.innerHTML = "Aceptar";

    //Añadimos las clases a los elementos
    ventana.classList.add("ventanaError");
    texto.classList.add("textoVentana");
    btn.classList.add("btnVentana");

    //Añadimos un listener al btn para poder cerrar la ventana
    btn.addEventListener("click",cerrarVentana);

    //Unimos los elementos
    ventana.appendChild(btn);
    ventana.appendChild(texto);
    document.body.appendChild(ventana);

}

/**
 * Función para mostrar a los usuarios que los campos están vacíos
 */
function ventanaCamposVacios(){

    //Creamos los elementos
    let ventana = document.createElement("div");
    let texto = document.createElement("label");
    texto.innerHTML = "Los campos están vacíos!!!!";
    let btn =  document.createElement("button");
    btn.innerHTML = "Aceptar";

    //Añadimos las clases a los elementos
    ventana.classList.add("ventanaError");
    texto.classList.add("textoVentana");
    btn.classList.add("btnVentana");

    //Añadimos un listener al btn para poder cerrar la ventana
    btn.addEventListener("click",cerrarVentana);

    //Unimos los elementos
    ventana.appendChild(btn);
    ventana.appendChild(texto);
    document.body.appendChild(ventana);

}

/**
 * Función para mostrar a los usuarios que los campos del registro estan vacíos
 */
function errorUsuario(){

    //Creamos los elementos
    let ventana = document.createElement("div");
    let texto = document.createElement("label");
    texto.innerHTML = "Los campos están vacíos!!!!";
    let btn =  document.createElement("button");
    btn.innerHTML = "Aceptar";

    //Añadimos las clases a los elementos
    ventana.classList.add("ventanaError");
    texto.classList.add("textoVentana");
    btn.classList.add("btnVentana");

    //Añadimos un listener al btn para poder cerrar la ventana
    btn.addEventListener("click",cerrarVentana);

    //Unimos los elementos
    ventana.appendChild(btn);
    ventana.appendChild(texto);
    document.body.appendChild(ventana);

}

/**
 * Función para mostrar al usuario que se ha registrado correctamente
 */
function verificarRegistro(){

    //Creamos los elementos
    let ventana = document.createElement("div");
    let texto = document.createElement("label");
    texto.innerHTML = "Registro completado";
    let btn =  document.createElement("button");
    btn.innerHTML = "Aceptar";

    //Añadimos las clases a los elementos
    ventana.classList.add("ventanaError");
    texto.classList.add("textoVentana");
    btn.classList.add("btnVentana");

    //Añadimos un listener al btn para poder cerrar la ventana
    btn.addEventListener("click",cerrarVentana);

    //Unimos los elementos
    ventana.appendChild(btn);
    ventana.appendChild(texto);
    document.body.appendChild(ventana);

}

/**
 * Función que sirve para enviar al usuario al login, con un identificador
 */
function enviarALogin(cont){    

    //Login

    if(cont == 1){
        sessionStorage.setItem("camposVacios", true);
        window.location.href = "vistaLogin.php";
    }

    if(cont == 2){
        sessionStorage.setItem("usuarioCorrecto", true);
        window.location.href = "vistaLogin.php";
    }

    if(cont == 3){
        sessionStorage.setItem("usuarioinCorrecto", true);
        window.location.href = "vistaLogin.php";
    }

    //Registro

    if(cont == 4){
        sessionStorage.setItem("RegistroCamposVacios", true);
        window.location.href = "vistaLogin.php";
    }
    
    if(cont == 5){
        sessionStorage.setItem("RegistroUsuario", true);
        window.location.href = "vistaLogin.php";
    }

}


/**
 * Función para comprobar si el JSON está vacío
 * @param  {JSON} obj JSON 
 * @return {boolean}      Devuelve true si no está vacío, false si está vacío
 */
function jsonVacio(obj){
    for(var key in obj) {
        if(obj.hasOwnProperty(key))return false;
    }
    return true;
}

/**
 * Función para filtrar de una lista Ul elementos
 * @param  {String} value Texto a buscar
 * @param  {tag} li Elemento li en el que buscar de la lista 
 * @return {Array}      Devuelve un array con los elementos li que coincidan con el valor buscado
 */
function filtrar(value,li){
    let ListaLi = [];   

    for (let item of li) {
        //valor del li
        let valor = item.children[1].innerHTML.toLowerCase();

        if(value != ""){
            
            if(eval('/'+value+'/').test(valor)){
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }

        }else{
            item.style.display = "block";
        } 

    }

    return ListaLi;
}

/**
 * Función para desactivar campos del perfil
 * @param  {input} input Input a desactivar
 * 
 */
function desactivarCampo(input){
    input.disabled = true;
    input.style.backgroundColor = "gray";
}

/**
 * Función para activar campos del perfil
 * @param  {input} input Input a activar
 * 
 */
function activarCampo(input){
    input.disabled = false;
    input.style.backgroundColor = "white";
}

/**
 * Función para comparar 2 objetos
 * @param  {Object} a Datos del primero objeto
 * @param  {Object} b Datos del segundo objeto
 * @return {Array}     Devuelve un array con los nuevos cambios
 */
function comparar(a,b){

    //Imagen
    //let datoAntiguo1 = a[0].files;

    //Usuario
    let datoAntiguo2 = a[0].value;

    //Nombre
    let datoAntiguo3 = a[1].value;

    //Correo
    let datoAntiguo4 = a[2].value;

    //Password
    let datoAntiguo5 = a[3].value;

    //Descripcion
    let datoAntiguo6 = a[4].value; 

    
    //Imagen
    //let datoNuevo1 = b[0].files;

    //Usuario
    let datoNuevo2 = b[0].value;

    //Nombre
    let datoNuevo3 = b[1].value;

    //Correo
    let datoNuevo4 = b[2].value;

    //Password
    let datoNuevo5 = b[3].value;

    //Descripcion
    let datoNuevo6 = b[4].value; 

    let nuevosDatos = new Array();

    //if(datoAntiguo1 != datoNuevo1){nuevosDatos.push(datoNuevo1);}else{nuevosDatos.push(datoAntiguo1);}
    if(datoAntiguo2 != datoNuevo2){nuevosDatos.push(datoNuevo2);}else{nuevosDatos.push(datoAntiguo2);}
    if(datoAntiguo3 != datoNuevo3){nuevosDatos.push(datoNuevo3);}else{nuevosDatos.push(datoAntiguo3);}
    if(datoAntiguo4 != datoNuevo4){nuevosDatos.push(datoNuevo4);}else{nuevosDatos.push(datoAntiguo4);}
    if(datoAntiguo5 != datoNuevo5){nuevosDatos.push(datoNuevo5);}else{nuevosDatos.push(datoAntiguo5);}
    if(datoAntiguo6 != datoNuevo6){nuevosDatos.push(datoNuevo6);}else{nuevosDatos.push(datoAntiguo6);}

    return nuevosDatos;
}


/**
 * Función para enviar a la base de datos la nueva info del perfil
 * @param  {Array} a Datos con la info del usuario
 * 
 */
function guardarInfoBD(nuevaInfo){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('i');

    //let imagen;
    let usuario;
    let nombre;
    let correo;
    let password;
    let descripcion;

    //leerArchivo(nuevaInfo[0][0]);

    //let divImagen = document.body.getElementsByClassName("imagenSubidaPerfil");     

    console.log(nuevaInfo);
    

    //imagen = divImagen;
    usuario = nuevaInfo[0];
    nombre = nuevaInfo[1];
    correo = nuevaInfo[2];
    password = nuevaInfo[3];
    descripcion = nuevaInfo[4];   

    //for (let div of divImagen) {
        
        var form = $('<form action="cambiarDatosPerfil.php" method="post">' +
        //'<input type="text" name="imagen" value="' + b64toBlob(div.innerText) + '" />' +
        '<input type="text" name="usuario" value="' + usuario + '" />' +
        '<input type="text" name="nombre" value="' + nombre + '" />' +
        '<input type="text" name="correo" value="' + correo + '" />' +
        '<input type="text" name="password" value="' + password + '" />' +
        '<input type="text" name="descripcion" value="' + descripcion + '" />' +
        '<input type="text" name="id" value="' + id + '" />' +
        '</form>');
        $('body').append(form);

        //document.body.removeChild(div);
        form.submit();
    //}
}


/**
 * Función para leer el archivo imagen subido a ingrediente
 * @param  {file} a File del input de la imagen
 * @return {String} Devuelve string de la imagen
 */
function leerArchivo(file) {
    var r = new FileReader();

    let res;

    r.onload = function (res) {
        res = r.result;
        let div = document.createElement("div");
        div.classList.add("imagenSubidaPerfil");
        div.innerText = res;
        document.body.appendChild(div);        
    };   

    res = r.result;
    r.readAsDataURL(file);
    
}

/**
 * Función para borrar el div con los datos de la imagen
 */
function borrarDIVImagen(div){

    let divImagen = document.getElementById(div);

    document.body.removeChild(divImagen);
}

/**
 * Función para convertir de base64 a blob
 * @param  {base64} dataURI String base64
 * @return {Blob} Devuelve blob de la imagen
 */
function b64toBlob(dataURI) {

    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
}


/**
 * Función para añadir a la base de datos un ingrediente
 * @param  {input} inputNombre Input del nombre del ingrediente
 * @param  {input} inputCategoria Input del nombre de la categoria 
 */
function anyadirIngredienteBD(inputNombre,inputCategoria){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('i');    

    let nombreIngrediente = inputNombre.value;
    //let imagenIngrediente = imagen.files[0];
    let categoriaIngrediente = inputCategoria.value;

    //leerArchivo(imagenIngrediente);

    //let divImagen = document.body.getElementsByClassName("imagenSubida");   

    //for (let div of divImagen) {
        
        var form = $('<form action="anyadirIngredienteBD.php" method="post">' +
        '<input type="text" name="nombreIngrediente" value="' + nombreIngrediente + '" />' +
        //'<input type="text" name="imagenIngrediente" value="' + b64toBlob(div.innerText) + '" />' +
        '<input type="text" name="categoriaIngrediente" value="' + categoriaIngrediente + '" />' +
        '<input type="text" name="id" value="' + id + '" />' +
        '</form>');
        $('body').append(form);

        //document.body.removeChild(div);
        form.submit();

    //}
}

/**
 * Función para buscar si un ingrediente de los que tiene el usuario existe en alguna de las recetas
 * @param  {String} IngredientesRecetas String con los ingredientes de una receta
 * @return  {Array} Devuelve la búsqueda de todas las recetas que contengan ingredientes que tiene el usuario 
 */
function buscarIngredientes(IngredientesRecetas) {

    let r = Ingredientes.map(i => eval('/'+i[0].Nombre+'/').test(IngredientesRecetas) == true);

    return r;
}

/**
 * Función para comprar si coincide algún ingrediente del usuario con los de la receta
 * @param  {Array} array Array true o false de los ingredientes que coinciden
 * @return  {boolean} Devuelve true si coincide algún ingrediente
 */
function comprobarIngredientes(array) {
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] == true){
            return true;
        }
        
    }
}