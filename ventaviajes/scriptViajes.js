import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
console.log(enlaces); //Comprobacion de que se obtienen los elementos del DOM

enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function(){
        //Remover activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar activo
        this.classList.add('active');

        //Obtener el contenido
        let contenido = obtenerContenido(this.textContent);

        //Mostrar el contenido
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

//Funcion para traer los datos de la ciudad
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace];
}