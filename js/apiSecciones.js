/*Variables*/

/*Tarjetas*/
let tarjeta;
let informacion;
let informacion2;
let tituloReceta;
let letraTitulo;
let letraTitulo2;

/*Seccion perfil*/
let divPerfil;
let cuadroPerfil;
let form;
let imgPerfil;
let usuario;
let nombre;
let correo;
let password;
let descripcion;
let cantRecetasCreadas;
let txtUsuario;
let txtNombre;
let txtCorreo;
let txtPassword;
let txtCambiarFoto;
let cantRecetasCreadas2;

////Header///

function Header(){   

    let nombreUsuario = document.getElementById("nameUser");

    nombreUsuario.innerHTML = Usuarios[0][0].Nick;

    let img = document.getElementsByClassName("circle")[0].children[0];

    img.style.backgroundImage = "url('data:image/jpeg;base64," + Usuarios[0][0].Imagen + "')";

    let img2 = document.getElementsByClassName("imgPerfilMenu")[0];

    img2.style.backgroundImage = "url('data:image/jpeg;base64," + Usuarios[0][0].Imagen + "')";

}

////INICIO////
function mostrarInicio(){

    let divInicio = document.getElementById("Inicio");

    let divTablas = document.createElement("div");
    divTablas.classList.add("TablasInicio");

    let txtNovedades = document.createElement("h2");
    txtNovedades.innerText = "Recetas nuevas:";
    txtNovedades.classList.add("txtNovedades");

    //Secciones Inicio

    seccionNovedades(divTablas);


    divInicio.appendChild(divTablas);
    divInicio.appendChild(txtNovedades);
    
}

function seccionNovedades(div){

    //Creamos la tabla
    let tablaNovedades = document.createElement("table");
    tablaNovedades.classList.add("tablaNovedades");

    //Obtenemos el total de novedades
    let totalNovedades = Novedades.length;


    for (let i = 0; i < totalNovedades; i++) {

        let fila = document.createElement("li");
        fila.classList.add("tarjetaNovedades");

        let cuerpoTarjeta = document.createElement("div");
        cuerpoTarjeta.classList.add("cuerpoTarjeta");

        let usuarioTarjeta = document.createElement("span");
        usuarioTarjeta.classList.add("usuarioTarjeta");
        usuarioTarjeta.innerText = "Categoria: " + Novedades[i][0].Categoria;

        let nombreReceta = document.createElement("h2");
        nombreReceta.classList.add("nombreRecetaTarjeta");
        nombreReceta.innerText = Novedades[i][0].Nombre;

        let textoVerReceta = document.createElement("div");
        textoVerReceta.classList.add("textoVerTarjeta");         

        let imagenReceta = document.createElement("img");
        imagenReceta.classList.add("imagenTarjeta");
        imagenReceta.style.backgroundImage = "url('data:image/jpeg;base64," + Novedades[i][0].Imagen + "')";

        cuerpoTarjeta.appendChild(imagenReceta);
        cuerpoTarjeta.appendChild(textoVerReceta);
        cuerpoTarjeta.appendChild(nombreReceta);
        cuerpoTarjeta.appendChild(usuarioTarjeta);
        fila.appendChild(cuerpoTarjeta);
        tablaNovedades.appendChild(fila);
        
    }

    div.appendChild(tablaNovedades);
}

function seccionPuntuadas(div){

    //Creamos la tabla
    let tablaPuntuadas = document.createElement("table");
    tablaPuntuadas.classList.add("tablaPuntuadas");

    //Obtenemos el total de puntuadas
    let totalPuntuadas = Puntuadas.length;


    for (let i = 0; i < totalPuntuadas; i++) {
        
        let fila = document.createElement("li");
        fila.classList.add("tarjetaPuntuada");

        let cuerpoTarjeta = document.createElement("div");
        cuerpoTarjeta.classList.add("cuerpoTarjeta");

        let usuarioTarjeta = document.createElement("span");
        usuarioTarjeta.classList.add("usuarioTarjeta");
        usuarioTarjeta.innerText = "Nombre del usuario";
        usuarioTarjeta.innerText = Puntuadas[i][0].Nick;

        let nombreReceta = document.createElement("h2");
        nombreReceta.classList.add("nombreRecetaTarjeta");
        nombreReceta.innerText = Puntuadas[i][0].Nombre;

        let textoVerReceta = document.createElement("div");
        textoVerReceta.classList.add("textoVerTarjeta");

        let imagenReceta = document.createElement("img");
        imagenReceta.classList.add("imagenTarjeta");
        imagenReceta.style.backgroundImage = "url('data:image/jpeg;base64," + Puntuadas[i][0].Imagen + "')";


        cuerpoTarjeta.appendChild(imagenReceta);
        cuerpoTarjeta.appendChild(textoVerReceta);
        cuerpoTarjeta.appendChild(nombreReceta);
        cuerpoTarjeta.appendChild(usuarioTarjeta);
        fila.appendChild(cuerpoTarjeta);

        tablaPuntuadas.appendChild(fila);
        
    }

    div.appendChild(tablaPuntuadas);
}

////INGREDIENTES USUARIO////
function mostrarMisIngredientes(){

    let divIngredientes = document.getElementById("MisIngredientes");

    let btnAnyadirIngrediente = document.createElement("button");
    btnAnyadirIngrediente.classList.add("btnAnyadirIngrediente");
    btnAnyadirIngrediente.innerText = "Añadir ingrediente";
    btnAnyadirIngrediente.addEventListener("click",function (e) {
        anyadirIngrediente();
    })

    //Creamos texto antes del input
    let t = document.createElement("h1");
    t.classList.add("textoFiltro");
    t.innerHTML = "Buscar: ";

    //Creamos el input para poder buscar las recetas
    let filtroIngredientes = document.createElement("input");
    filtroIngredientes.classList.add("filtros");
    filtroIngredientes.addEventListener("input", function (){
        let ul = document.getElementsByClassName("listaUl")[0];
        let li = ul.children;
        filtrar(this.value,li);
    })
    

    if(filtroIngredientes.innerHTML == "");construirContenidoIngredientes(Ingredientes,divIngredientes);


    //Añadimos todos los componentes al div que monta las recetas    
    divIngredientes.appendChild(btnAnyadirIngrediente);
    divIngredientes.appendChild(t);    
    divIngredientes.appendChild(filtroIngredientes);
    

}

/*Función para anyadir ingredientes*/
function anyadirIngrediente() {
    
    let ventana =  document.createElement("div");
    ventana.classList.add("ventanaAnyadirReceta");

    let aspa = document.createElement("img");
    aspa.classList.add("aspaIngrediente");
    aspa.addEventListener("click",function (e) {
        cerrarVentana(ventana);
    })

    //textos
    let txtNombreIngrediente = document.createElement("label");
    let txtImagenIngrediente = document.createElement("label");
    let txtCategoriaIngrediente = document.createElement("label");
    //let txtCantidadIngrediente = document.createElement("label");

    txtNombreIngrediente.classList.add("txtNombreIngrediente");
    //txtImagenIngrediente.classList.add("txtImagenIngrediente");
    txtCategoriaIngrediente.classList.add("txtCategoriaIngrediente");
    //txtCantidadIngrediente.classList.add("txtCantidadIngrediente");

    txtNombreIngrediente.innerText = "Nombre del ingrediente: ";
    //txtImagenIngrediente.innerText = "Selecciona imagen del ingrediente: ";
    txtCategoriaIngrediente.innerText = "Categoria del ingrediente: ";
    //txtCantidadIngrediente.innerText = "Cantidad de ingredientes: ";

    //Inputs
    let inputNombre = document.createElement("input");
    //let imagen = document.createElement("input");
    let inputCategoria = document.createElement("input");
    let btnAnyadirIngredientes = document.createElement("button");
    btnAnyadirIngredientes.innerText = "Añadir ingredientes";
    btnAnyadirIngredientes.addEventListener("click",function (e) {
        anyadirIngredienteBD(inputNombre,inputCategoria);
    })
    
    //imagen.type = "file";

    inputNombre.classList.add("anyadirIngredienteNombre");
    //imagen.classList.add("anyadirIngredienteImagen");
    inputCategoria.classList.add("anyadirIngredienteCategoria");
    btnAnyadirIngredientes.classList.add("btnAnyadirIngredientes");

    //Añadimos elementos
    ventana.appendChild(inputNombre);
    //ventana.appendChild(imagen);
    ventana.appendChild(inputCategoria);
    ventana.appendChild(btnAnyadirIngredientes);

    ventana.appendChild(txtCategoriaIngrediente);
    //ventana.appendChild(txtImagenIngrediente);
    ventana.appendChild(txtNombreIngrediente);
    ventana.appendChild(aspa);
    
    document.body.appendChild(ventana);
}


/*Función para construir las tarjetas*/
function construirContenidoIngredientes(datos,div) {

    let cont = 1;   

    //Ul
    let ul = document.createElement("ul");
    ul.id = "Lista";
    ul.classList.add("listaUl");
    

    datos.forEach(d => {

        //let obtenerUnidadPeso = cantidadPesoIngredientes(d[0].Cantidad);

        //Div para crear la tarjeta
        tarjeta = document.createElement("li");
        tarjeta.dataset.id = cont;
        tarjeta.classList.add("Tarjeta");
        tarjeta.style.backgroundImage = "url('data:image/jpeg;base64," + d[0].Imagen + "')";
        
        //Elemento para la puntuacion de la receta / tarjeta
        informacion = document.createElement("div");
        informacion.classList.add("informacion");

        //Elemento para el titulo de la receta
        tituloReceta = document.createElement("h1");
        tituloReceta.classList.add("tituloReceta");
        tituloReceta.innerHTML = d[0].Nombre;

        //Unimos elementos
        tarjeta.appendChild(informacion);
        tarjeta.appendChild(tituloReceta);

        ul.appendChild(tarjeta);       

        cont++;
    });

    div.appendChild(ul);

}


////RECETAS USUARIO////
function mostrarRecetasUsuario(){

    let divMisRecetas = document.getElementById("MisRecetas");

    //Creamos texto antes del input
    let t = document.createElement("h1");
    t.classList.add("textoFiltro");
    t.innerHTML = "Buscar: ";

    //Creamos el input para poder buscar las recetas
    let filtroRecetasUsuario = document.createElement("input");
    filtroRecetasUsuario.classList.add("filtros");
    filtroRecetasUsuario.addEventListener("input", function (){
        let ul = document.getElementsByClassName("listaUl")[0];
        let li = ul.children;
        filtrar(this.value,li);
    })

    if(filtroRecetasUsuario.innerHTML == "")construirRecetasDisponibles(Recetas,divMisRecetas);


    //Añadimos todos los componentes al div que monta las recetas
    divMisRecetas.appendChild(t);
    divMisRecetas.appendChild(filtroRecetasUsuario);

}


function construirRecetasDisponibles(datos,div) {
 
    //Ul
    let ul = document.createElement("ul");
    ul.classList.add("listaUl");

    datos.forEach(d => {       

        //let categoria = d[0].Categoria;
            
        //let colorCirculo = categoriaReceta(categoria);

        //let letra = categoria.substring(0,1);  
        
        let IngredienteRecetas = d[0].Ingredientes;        

        let recetaTieneIngrediente = buscarIngredientes(IngredienteRecetas);

        let res = comprobarIngredientes(recetaTieneIngrediente);

        //console.log(res);
        
        if(res == true){
            console.log(IngredienteRecetas);

            //Div para crear la tarjeta
            tarjeta = document.createElement("li");
            tarjeta.dataset.id = d[0].ID_Receta;
            tarjeta.classList.add("Tarjeta");
            tarjeta.style.backgroundImage = "url('data:image/jpeg;base64," + d[0].Imagen + "')";
            tarjeta.addEventListener("click",function (e) {
                mostrarDatosTarjeta(d);
            });

            //Elemento para la puntuacion de la receta / tarjeta
            //informacion = document.createElement("div");
            //informacion.classList.add("informacion");
            //informacion.innerHTML = d[0].Puntuacion;

            //Elemento para el titulo de la receta
            tituloReceta = document.createElement("h1");
            tituloReceta.classList.add("tituloReceta");
            tituloReceta.innerHTML = d[0].Nombre;

            //Elemento para el circulo
            letraTitulo = document.createElement("div");
            letraTitulo.classList.add("circulo");
            letraTitulo.classList.add("colorCirculo");

            //Elemento para la letra de dentro del circulo
            //letraTitulo2 = document.createElement("h4");
            //letraTitulo2.innerHTML = letra;
            //letraTitulo2.classList.add("letraCustom");
            //letraTitulo.appendChild(letraTitulo2);

            //Unimos elementos
            //tarjeta.appendChild(informacion);
            tarjeta.appendChild(tituloReceta);
            //tarjeta.appendChild(letraTitulo);
            //letraTitulo.appendChild(letraTitulo2);

            ul.appendChild(tarjeta);

        }        

        //cont++;
    });

    div.appendChild(ul);
}

////RECETAS////
function mostrarRecetas(){

    let divTodasRecetas = document.getElementById("TodasLasRecetas");

    //Creamos texto antes del input
    let t = document.createElement("h1");
    t.classList.add("textoFiltro");
    t.innerHTML = "Buscar: ";

    //Creamos el input para poder buscar las recetas
    let filtroRecetas = document.createElement("input");
    filtroRecetas.classList.add("filtros");
    filtroRecetas.addEventListener("input", function (){
        let ul = document.getElementsByClassName("listaUl")[0];
        let li = ul.children;
        filtrar(this.value,li);
    })

    if(filtroRecetas.innerHTML == "")construirContenidoRecetas(Recetas,divTodasRecetas);

    //Añadimos todos los componentes al div que monta las recetas
    divTodasRecetas.appendChild(t);
    divTodasRecetas.appendChild(filtroRecetas);

}

/*Función para construir las tarjetas*/
function construirContenidoRecetas(datos,div) {

    let cont = 1;   

    //Ul
    let ul = document.createElement("ul");
    ul.classList.add("listaUl");

    datos.forEach(d => {       
        
        let categoria = d[0].Categoria;
            
        let colorCirculo = categoriaReceta(categoria);

        let letra = categoria.substring(0,1);        

        //Div para crear la tarjeta
        tarjeta = document.createElement("li");
        tarjeta.dataset.id = d[0].ID_Receta;
        tarjeta.classList.add("Tarjeta");
        tarjeta.style.backgroundImage = "url('data:image/jpeg;base64," + d[0].Imagen + "')";
        tarjeta.addEventListener("click",function (e) {
            mostrarDatosTarjeta(d);
        });

        //Elemento para la puntuacion de la receta / tarjeta
        informacion = document.createElement("div");
        informacion.classList.add("informacion");
        //informacion.innerHTML = d[0].Puntuacion;

        //Elemento para el titulo de la receta
        tituloReceta = document.createElement("h1");
        tituloReceta.classList.add("tituloReceta");
        tituloReceta.innerHTML = d[0].Nombre;

        //Elemento para el circulo
        letraTitulo = document.createElement("div");
        letraTitulo.classList.add("circulo");
        letraTitulo.classList.add(colorCirculo);

        //Elemento para la letra de dentro del circulo
        letraTitulo2 = document.createElement("h4");
        letraTitulo2.innerHTML = letra;
        letraTitulo2.classList.add("letraCustom");
        letraTitulo.appendChild(letraTitulo2);

        //Unimos elementos
        tarjeta.appendChild(informacion);
        tarjeta.appendChild(tituloReceta);
        tarjeta.appendChild(letraTitulo);
        letraTitulo.appendChild(letraTitulo2);

        ul.appendChild(tarjeta);        

        cont++;
    });

    div.appendChild(ul);

}

/*Función para mostrar los datos en las tarjetas*/
function mostrarDatosTarjeta(datos) {

    let Categoria = datos[0].Categoria;
    let Descripcion = datos[0].Descripcion;
    let Imagen = datos[0].Imagen;
    let Ingredientes = datos[0].Ingredientes;
    let Nombre = datos[0].Nombre;
    let Puntuacion = datos[0].Puntuacion;

    //Creamos los elementos
    let ventanaReceta = document.createElement("div");
    ventanaReceta.classList.add("ventanaReceta");
    ventanaReceta.id = "ventanaReceta";

    let aspa = document.createElement("img");
    aspa.classList.add("aspa");
    aspa.addEventListener("click",function () {
        cerrarVentana(ventanaReceta);
    });

    let img = document.createElement("img")
    img.classList.add("ventanaRecetaImagen");

    let nombre = document.createElement("label");
    nombre.classList.add("ventanaRecetaNombre");

    let descripcion = document.createElement("textarea");
    descripcion.classList.add("ventanaRecetaDescripcion");

    let categoria = document.createElement("label");
    categoria.classList.add("ventanaRecetaCategoria");

    let ingredientes = document.createElement("textarea");
    ingredientes.classList.add("ventanaRecetaIngredientes");

    let puntuacion = document.createElement("label");
    puntuacion.classList.add("ventanaRecetaPuntuacion");

    //Textos
    let txtRecetaNombre = document.createElement("label");
    let txtRecetaDescripcion = document.createElement("label");
    let txtRecetaCategoria = document.createElement("label");
    let txtRecetaIngredientes = document.createElement("label");
    let txtRecetaPuntuacion = document.createElement("label");
    
    txtRecetaNombre.classList.add("txtRecetaNombre");
    txtRecetaDescripcion.classList.add("txtRecetaDescripcion");
    txtRecetaCategoria.classList.add("txtRecetaCategoria");
    txtRecetaIngredientes.classList.add("txtRecetaIngredientes");
    txtRecetaPuntuacion.classList.add("txtRecetaPuntuacion");

    txtRecetaNombre.innerText = "Nombre: ";
    txtRecetaDescripcion.innerText = "Descripción: ";
    txtRecetaCategoria.innerText = "Categoria: ";
    txtRecetaIngredientes.innerText = "Ingredientes: ";
    txtRecetaPuntuacion.innerText = "Puntuacion: ";

    //Añadimos los datos
    img.style.backgroundImage = "url('data:image/jpeg;base64," + Imagen + "')";
    nombre.innerText = Nombre;
    Descripcion.innerText = Descripcion;
    ingredientes.innerText = Ingredientes;
    categoria.innerText = Categoria;
    puntuacion.innerText = Puntuacion;

    //Unimos los elementos
    ventanaReceta.appendChild(txtRecetaPuntuacion);
    ventanaReceta.appendChild(txtRecetaIngredientes);
    ventanaReceta.appendChild(txtRecetaCategoria);
    ventanaReceta.appendChild(txtRecetaDescripcion);
    ventanaReceta.appendChild(txtRecetaNombre);
    ventanaReceta.appendChild(puntuacion);
    ventanaReceta.appendChild(ingredientes);
    ventanaReceta.appendChild(categoria);
    ventanaReceta.appendChild(descripcion);
    ventanaReceta.appendChild(nombre);
    ventanaReceta.appendChild(img);
    ventanaReceta.appendChild(aspa);
    document.body.appendChild(ventanaReceta);

}

///PERFIL///

/*Función para construir el perfil de un usuario*/
function construirPerfil(Usuario){    

    let Descripcion = Usuario[0][0].Descripcion;
    let Email = Usuario[0][0].Email;
    let Imagen = Usuario[0][0].Imagen;
    let Nick = Usuario[0][0].Nick;
    let Nombre = Usuario[0][0].Nombre;
    let Password = Usuario[0][0].Password;

    //Botones Perfil
    let btnModificar = document.createElement("button");
    btnModificar.innerText = "Modificar perfil";
    let btnGuardar = document.createElement("button");
    btnGuardar.innerText = "Guardar cambios";
    /*let btnCambiarFoto = document.createElement("input");
    btnCambiarFoto.type = "file";*/

    //Seleccionamos el div perfil
    divPerfil = document.getElementById("MiPerfil");

    //Creamos el div de perfil
    cuadroPerfil = document.createElement("div");

    //Creamos la imagen
    imgPerfil = document.createElement("img");

    //Creamos los input
    usuario = document.createElement("input");
    nombre =  document.createElement("input");
    correo =  document.createElement("input");
    password = document.createElement("input");
    password.type = "password";
    descripcion = document.createElement("textarea");

    //Creamos los textos de la info del perfil
    txtUsuario = document.createElement("label");
    txtUsuario.classList.add('textoLabel');
    txtUsuario.classList.add('labelUsuario');
    txtUsuario.innerText = "Usuario: ";

    txtNombre = document.createElement("label");
    txtNombre.classList.add('textoLabel');
    txtNombre.classList.add('labelNombre');
    txtNombre.innerText = "Nombre: ";

    txtCorreo = document.createElement("label");
    txtCorreo.classList.add('textoLabel');
    txtCorreo.classList.add('labelCorreo');
    txtCorreo.innerText = "Correo: ";

    txtPassword = document.createElement("label");
    txtPassword.classList.add("textoLabel");
    txtPassword.classList.add('labelPassword');
    txtPassword.innerText = "Password: ";

    txtDescripcion = document.createElement("label");
    txtDescripcion.classList.add("textoLabel");
    txtDescripcion.classList.add('labelDescripcion');
    txtDescripcion.innerText = "Descripción: ";

    txtCambiarFoto = document.createElement("label");
    txtCambiarFoto.classList.add("textoLabel");
    txtCambiarFoto.classList.add('labelCambiarFoto');
    txtCambiarFoto.innerText = "Cambiar foto: ";

    //Creamos el texto para saber la cantidad de recetas creadas por el usuario
    cantRecetasCreadas = document.createElement("label");
    cantRecetasCreadas.innerText = "Nº de recetas creadas: ";

    cantRecetasCreadas2 = document.createElement("label");
    cantRecetasCreadas2.innerText = cantTotal;

    //Añadimos las clases para ordenarlo en el div de perfil
    cuadroPerfil.classList.add("cuadroPerfil");
    imgPerfil.classList.add("imgPerfil2");

    usuario.classList.add('textoPerfil');
    usuario.classList.add('inputUsuario');
    nombre.classList.add('textoPerfil');
    nombre.classList.add('inputNombre');
    correo.classList.add('textoPerfil');
    correo.classList.add('inputCorreo');
    password.classList.add('inputPassword');
    password.classList.add('textoPerfil');
    descripcion.classList.add('inputDescripcion');
    descripcion.classList.add('textoPerfil');

    cantRecetasCreadas.classList.add("cantRecetasTexto");
    cantRecetasCreadas2.classList.add("cantRecetasTexto2");
    cantRecetasCreadas2.id = "RecetasTexto2";

    //Botones
    btnModificar.classList.add("btnModificarPerfil");
    btnGuardar.classList.add("btnGuardarPerfil");
    //btnCambiarFoto.classList.add("btnCambiarFoto");

    let datosActuales = new Array();

    btnModificar.addEventListener("click",function (e) {
        datosActuales = modificarPerfil();
    });


    btnGuardar.addEventListener("click",function (e) {
        guardarPerfil(datosActuales);
    });

    //Añadimos los valores
    imgPerfil.style.backgroundImage = "url('data:image/jpeg;base64," + Imagen + "')";
    usuario.value = Nick;
    nombre.value = Nombre;
    correo.value = Email;
    password.value = Password;
    descripcion.value = Descripcion;

    //Añadimos los componentes
    divPerfil.appendChild(cuadroPerfil);
    //cuadroPerfil.appendChild(btnCambiarFoto);
    cuadroPerfil.appendChild(btnModificar);
    cuadroPerfil.appendChild(btnGuardar);
    cuadroPerfil.appendChild(txtUsuario);
    cuadroPerfil.appendChild(txtNombre);
    cuadroPerfil.appendChild(txtCorreo);
    cuadroPerfil.appendChild(txtPassword);
    cuadroPerfil.appendChild(txtDescripcion);
    cuadroPerfil.appendChild(imgPerfil);
    cuadroPerfil.appendChild(usuario);
    cuadroPerfil.appendChild(nombre);
    cuadroPerfil.appendChild(correo);
    cuadroPerfil.appendChild(password);
    cuadroPerfil.appendChild(descripcion);
    cuadroPerfil.appendChild(cantRecetasCreadas);
    cuadroPerfil.appendChild(cantRecetasCreadas2);
    divPerfil.appendChild(cuadroPerfil);

}

/*Función para modificar un perfil (Activa los campos) */
function modificarPerfil(){

    //Inputs perfil
    let elementosPerfil = document.getElementsByClassName("cuadroPerfil")[0].children;    

    let listaElementos = Array.from(elementosPerfil);

    let datos = new Array();

    listaElementos.forEach(e => {
        
        
        if(e.tagName == "INPUT" || e.tagName == "TEXTAREA"){            
            if(e.className != "textoPerfil inputCorreo")activarCampo(e);datos.push(e);                
        }

    });

    return datos;
}

/*Función para desactivar los campos por defecto*/
function bloquearTodoPerfil(){
    
    let elementosPerfil = document.getElementsByClassName("cuadroPerfil")[0].children;

    let listaElementos = Array.from(elementosPerfil);

    listaElementos.forEach(lista => {       

        if(lista.tagName == "INPUT" || lista.tagName == "TEXTAREA"){
            desactivarCampo(lista);
        }

    });
}

/*Función para guardar los cambios del perfil */
function guardarPerfil(datosActuales){

    let elementosPerfil = document.getElementsByClassName("cuadroPerfil")[0].children;

    let listaElementos = Array.from(elementosPerfil);

    let datosNuevos = new Array();

    listaElementos.forEach(lista => {       

        if(lista.tagName == "INPUT" || lista.tagName == "TEXTAREA"){            
            if(lista.className != "textoPerfil inputCorreo")desactivarCampo(lista);datosNuevos.push(lista);                
        }

    });

    let result = comparar(datosActuales,datosNuevos);
    
    
    if(result.length>0)guardarInfoBD(result);


}

///OTRAS FUNCIONES///
/*Función que cerrará la ventana eliminandola del body*/
function cerrarVentana(ventana) { 
    document.body.removeChild(ventana);
}

function desconectar(){
    var form = $('<form action="vistaLogin.php" method="post">' +
    '<input type="text" name="desconectar" />' +
    '</form>');
    $('body').append(form);
    form.submit();
}

