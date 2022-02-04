import { show_data } from "./storage.js";
import { ALFABETO } from "./words.js";

let arreglo = [];
export function validar_texto(texto) {
  let expression = /^[a-zA-Z]+$/;
  if (expression.test(texto)) {
    let arrTexto = texto.split("");
    arrTexto.forEach((letra) => {
      if (
        letra === "1" ||
        letra === "2" ||
        letra === "3" ||
        letra === "4" ||
        letra === "5" ||
        letra === "6" ||
        letra === "7" ||
        letra === "8" ||
        letra === "9" ||
        letra === "0"
      ) {
        return false;
      }
    });
    return true;
  } else {
    return false;
  }
}

export function validar_teclas_especiales(e) {
  if (
    e.key === "Enter" ||
    e.key === "Enter" ||
    e.key === "Backspace" ||
    e.key === "Control" ||
    e.key === "CapsLock" ||
    e.key === "Shift" ||
    e.key === "Tab" ||
    e.key === "|" ||
    e.key === "Meta" ||
    e.key === "Alt" ||
    e.key === "AltGraph" ||
    e.key === "ContextMenu" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "Delete" ||
    e.key === "Insert" ||
    e.key === "Home" ||
    e.key === "End" ||
    e.key === "PageDown" ||
    e.key === "PageUp" ||
    e.key === "NumLock" ||
    e.key === "Pause" ||
    e.key === "ScrollLock" ||
    e.key === "Escape"
  ) {
    return false;
  }
  return true;
}

export function sortear_palabra() {
  let data = show_data();
  let total = data.length;
  let aleatorio = Math.floor(Math.random() * total);
  let palabra = data.filter((p) => p === data[aleatorio]);
  return palabra.join("");
}

export function mensajes(mensaje, contenedor, tipo = "error") {
  let p = document.createElement("p");
  p.textContent = mensaje;
  if (tipo === "error") {
    p.classList.remove("alert", "alert-success");
    p.classList.add("alert", "alert-danger");
  } else if (tipo === "success") {
    p.classList.remove("alert", "alert-danger");
    p.classList.add("alert", "alert-success");
  }
  contenedor.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 3000);
}

export function mensajes_juego(mensaje, contenedor, tipo = "perdio") {
  let p = document.createElement("p");
  p.textContent = mensaje;
  if (tipo === "perdio") {
    p.classList.remove("alert", "alert-success");
    p.classList.add("alert", "alert-danger");
  } else if (tipo === "gano") {
    p.classList.remove("alert", "alert-danger");
    p.classList.add("alert", "alert-success");
  }
  contenedor.innerHTML = "";
  contenedor.appendChild(p);

  setTimeout(() => {
    p.remove();
    window.location.reload();
  }, 5000);
}
