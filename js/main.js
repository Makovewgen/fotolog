function agregaPosteo() {
//escribe aca el codigo
//rescataremmos el contenedor posteo el nombre y el comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

//aqui ira nuestro post
var nuevoPost = document.createElement("div");

//aca guardaremos valores
var contenedoNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//aca creamos elementos para corazones
var parrafCorazon = document.createElement("p");
var i = document.createElement("i");
 
 //assignamos padres a icono de corazon
 parrafCorazon.appendChild(i);

//atributos corazon
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//transformar el nombre a nodo texto
var nodoNombre = document.createTextNode(nombreFF + "escribio: ");
var nodoPosteo = document.createTextNode(contenidoFF);

//asignaremos padres a nodos creados
contenedoNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//asignamos padres a nombres y contenidos
nuevoPost.appendChild(contenedoNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//funcion click para corazon y le asignamos la clase rojo de css
i.addEventListener("click", function(){
	i.classList.toogle('rojo');
});

//damos atributos a nuestros post y lo agregamos a nuestro contenedor de posteos
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

//resetear los campos y dejarlos nuevamente en bco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";


}