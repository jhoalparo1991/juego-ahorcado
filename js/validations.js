
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
    },2000);
}
