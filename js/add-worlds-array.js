import { WORDS } from './words.js';
import { save} from './storage.js';

import { validar_texto,mensajes }  from './validations.js';


document.addEventListener('DOMContentLoaded',event =>{
    let btnGuardar = document.querySelector('#save');
    let txtcampoTexto = document.querySelector('#world');
    let section = document.querySelector('.section-add');

   

    btnGuardar.addEventListener('click',e=>{
        e.preventDefault();
        let texto = txtcampoTexto.value;
        if(texto.length > 0){

            let validator = validar_texto(texto);
             if(validator){
                WORDS.push(texto);
                 mensajes('Se agrego nueva palabra',section,'success');
                save(WORDS);
                 setTimeout(() =>{
                    
                     let origin = window.location.origin;
                     window.location.assign(origin+'/game.html');
                    },3000);
             }else{
                 mensajes('Solo letras',section,'error');
             }
        }else{
            mensajes('Ingrese una palabra',section,'error');
        }



    });



});






