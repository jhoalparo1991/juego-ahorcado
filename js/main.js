// Imports
import { sortear_palabra, mensajes_juego } from "./validations.js";
import { ahorcado} from "./dibujo.js";

// Elements html
let palabra = document.querySelector("#palabra");
let letras = document.querySelector("#letras");
let btnNuevoJuego = document.querySelector("#nuevo");
let btnDesistir = document.querySelector("#desistir");
let main = document.querySelector("main");
let canva = document.querySelector("#canva");
let status = document.querySelector("#status");

// Varibales
let arrGuiones = [];
let arrLetras = [];
let arrPalabra = [];
let palabra_sorteo;
let contador = 0;
let letrasErroneas = [];

// Events
document.addEventListener("DOMContentLoaded", () => {
  // Sortear palabra
  palabra_sorteo = sortear_palabra().toLowerCase();
  console.log(palabra_sorteo);
  dibujar_guiones(palabra_sorteo);

  ahorcado(canva,contador);
  // Introducir letra
  introducir_letra();
});

// Functions
function dibujar_guiones(palabra_sorteo) {
  if (palabra_sorteo.length > 0) {
    let arr = palabra_sorteo.split("");
    arr.forEach((a) => {
      palabra.textContent += "_";
    });
  }
}

function introducir_letra() {
  window.onkeydown = (e) => {
    let letra = e.key.toLowerCase();

    let reg = /^[a-zA-Z]+$/;
    if (reg.test(letra)) {
      if (!arrLetras.includes(letra)) {
        let arr = palabra_sorteo.split("");
        if (!arr.includes(letra)) {
          letrasErroneas = [...letrasErroneas, letra];
          letras.textContent = letrasErroneas;
          mostrarLetraIncorrecta(letrasErroneas);
        }
        arrLetras = [...arrLetras, letra];
        buscarLetra(letra);
      }
    }
  };
}

function buscarLetra(letra) {
  let arr = palabra_sorteo.split("");
  arr.forEach((l) => {
    if (l === letra) {
      arrPalabra = [...arrPalabra, l];
      armarPalabra(arrPalabra);
    }
  });
}

function armarPalabra(arr) {
  let arr_sorteo = palabra_sorteo.split("");
  let letra_sorteo = "";
  let letra_arr = "";
  let palabra_final = [];
  let i = 0;
  let j = 0;
  for (i = 0; i < arr_sorteo.length; i++) {
    letra_sorteo += arr_sorteo[i];
    for (j = 0; j < arr.length; j++) {
      letra_arr += arr[j];
      if (letra_sorteo[i] === letra_arr[j]) {
        palabra_final = [...palabra_final, letra_arr[j]];
        validarPalabra(palabra_final);
      }
    }
  }
}

function validarPalabra(data) {
  let arr = palabra_sorteo.split("");
  let result = arr.every((element) => {
    return data.includes(element);
  });
  console.log(result);
  return result;
}

function mostrarLetraIncorrecta(arr) {
  let counter = arr.length;
  
  ahorcado(canva,counter);

  if(counter === 5){
    mensajes_juego('Fin del juego,\nPerdiste',status,'perdio');
  }
}



