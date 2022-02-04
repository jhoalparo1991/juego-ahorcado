// Imports
import { sortear_palabra, mensajes_juego } from "./validations.js";
import { ahorcado} from "./dibujo.js";
import { ALFABETO } from './words.js'
// Elements html
let palabra = document.querySelector("#palabra");
let letras = document.querySelector("#letras");
let canva = document.querySelector("#canva");
let status = document.querySelector("#status");
let btnTeclado = document.querySelector("#mostrar-teclado");
let keyboard = document.querySelector('#keyboard');

// Varibales
let guiones = [];
let arrLetras = [];
let arrPalabra = [];
let palabra_sorteo;
let contador = 0;
let letrasErroneas = [];
let palabraGuiones;
let estadoTeclado = true;

// Events
document.addEventListener("DOMContentLoaded", () => {
  // Sortear palabra
  palabra_sorteo = sortear_palabra().toLowerCase();
  // Convertir la palabra en guines
  palabraGuiones = palabra_sorteo.replace(/./g, '_');
  palabra.textContent = palabraGuiones;
  // Mostrar base de la horca
  ahorcado(canva,contador);
  // Introducir letra
  introducir_letra(window);

  //mostrar teclado
  mostrarLetras();

  btnTeclado.addEventListener('click', habilitarTeclado);

});

function habilitarTeclado(){
  console.log('teclado');
  if(estadoTeclado){
    keyboard.classList.remove('hiden');
    keyboard.classList.add('visible');
    btnTeclado.classList.remove('btn-info');
    btnTeclado.classList.add('btn-warning');
    btnTeclado.textContent = 'Ocultar teclado';

    estadoTeclado = false;
  }else{
    keyboard.classList.remove('visible')
    keyboard.classList.add('hiden');
    btnTeclado.classList.remove('btn-warning')
    btnTeclado.classList.add('btn-info')
    btnTeclado.textContent = 'Mostrar teclado';
    estadoTeclado = true;
  }
}



// Functions
function mostrarLetras(){
  let letras = ALFABETO.split('');
  letras.forEach( letra => {
      let button = document.createElement('button');
      button.textContent = letra;
      button.classList.add('btn','btn-success','m-2','size-button')
      button.onclick = introducirLetraTeclado
      keyboard.appendChild(button);
  });
}

function introducirLetraTeclado(e) {
   
    let letra = e.target.textContent.toLowerCase();

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
}

function introducir_letra(evento) {
  evento.onkeydown = (e) => {
    console.log('Introducir letras');

    if(e.code == 'Enter' || e.code == 'Backspace' || e.code == 'ArrowUp'
    || e.code === 'ArrowDown' || e.code === 'ArrowLeft'|| e.code === 'ArrowRight' || e.code === 'Shift' || e.code === 'CapsLock' || e.code === 'Tab' || e.code === 'ContextMenu' || e.code === 'Control', e.code === 'Meta' || e.code === 'Shift' || e.code === 'CapsLock') {
      return false;
    }else{
      
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
        mostrarLetrasCorrectas(palabra_final);
      }
    }
  }
}

function validarPalabra(data) {
  let arr = palabra_sorteo.split("");
  let result = arr.every((element) => {
    return data.includes(element);
  });
  if(result){
    mensajes_juego("Ganó,\n Felicitaciones",status,'gano');
    estadoTeclado = false;
    habilitarTeclado();
    window.onkeydown = e=>{
      return false;
    };
  }
}

function mostrarLetraIncorrecta(arr) {
  let counter = arr.length;
  ahorcado(canva,counter);

  if(counter === 5){
    mensajes_juego("Fin del juego,\n Perdiste",status,'perdio');
    palabra.innerHTML = '';
    palabra.innerHTML = 'La palabra era : ' +  palabra_sorteo;
    estadoTeclado = false;
    habilitarTeclado();
    window.onkeydown = e=>{
      return false;
    };
  }
}


function mostrarLetrasCorrectas(palabra_final){
let posicionGuion;
 guiones = palabraGuiones.split('');
  for(const sorteo in palabra_sorteo){
    for(const final in palabra_final){
      if(palabra_sorteo[sorteo] == palabra_final[final]){
        posicionGuion = sorteo;
        guiones[sorteo] = palabra_final[final];
      }
    }

    palabra.innerHTML = '';
    palabra.innerHTML = guiones.join('');
  }

}



