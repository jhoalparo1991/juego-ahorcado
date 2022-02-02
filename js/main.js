import { sortear_palabra } from './validations.js';
let palabra = document.querySelector("#palabra");
let letras = document.querySelector("#letras");
let btnNuevoJuego = document.querySelector("#nuevo");
let btnDesistir = document.querySelector("#desistir");
let arrGuiones = [];
let palabra_sorteo;
document.addEventListener('DOMContentLoaded',()=>{
// Sortear palabra
palabra_sorteo = sortear_palabra();
dibujar_guiones(palabra_sorteo);

})

function dibujar_guiones(palabra_sorteo){
    if(palabra_sorteo.length > 0){
        let arr = palabra_sorteo.split("");
        arr.forEach( a=> {
            palabra.textContent += "m";
        })
    }
}
