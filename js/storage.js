// import { world} from './worlds.js';

export function save(arr){
    let data = JSON.stringify(arr);
    window.localStorage.setItem('palabras',data);
}

export function show_data(){
   let data = JSON.parse(localStorage.getItem('palabras'));
   return data;
}