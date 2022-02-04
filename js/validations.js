import { show_data } from './storage.js';

let arreglo = [];
export function validar_texto(texto){
    let expression = /^[a-zA-Z]+$/;
    if(expression.test(texto)){
        let arrTexto = texto.split('');
        arrTexto.forEach( letra => {
            if(letra ==='1' || letra ==='2' || letra ==='3' || letra ==='4'
             || letra ==='5' || letra ==='6' || letra ==='7' || letra ==='8' || letra ==='9' || letra ==='0'){
                return false;
            }
        })
        return true;
    }else{
        return false;
    }  
}

export function sortear_palabra(){
    let data = show_data();
    let total = data.length;
    let aleatorio = Math.floor(Math.random() * total);
    let palabra = data.filter( p => p === data[aleatorio]);
    return palabra.join('');
}

export function mensajes(mensaje,contenedor,tipo='error'){
    let p = document.createElement('p');
    p.textContent = mensaje;
    if(tipo === 'error'){
        p.classList.remove('alert','alert-success')
        p.classList.add('alert','alert-danger');
    }else if(tipo === 'success'){
        p.classList.remove('alert','alert-danger')
        p.classList.add('alert','alert-success');
    }
    contenedor.appendChild(p);

    setTimeout(() =>{
        p.remove();
    },3000);
}

export function mensajes_juego(mensaje,contenedor,tipo='perdio'){
    let p = document.createElement('p');
    p.textContent = mensaje;
    if(tipo === 'perdio'){
        p.classList.remove('alert','alert-success')
        p.classList.add('alert','alert-danger');
    }else if(tipo === 'gano'){
        p.classList.remove('alert','alert-danger');
        p.classList.add('alert','alert-success');
    }
    contenedor.innerHTML = '';
    contenedor.appendChild(p);

    setTimeout(() =>{
        p.remove();
        window.location.reload();
    },5000);
}

