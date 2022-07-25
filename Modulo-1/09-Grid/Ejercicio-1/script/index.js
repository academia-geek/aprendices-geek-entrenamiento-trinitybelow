'use strict'

let formulario = document.querySelector('#form');

formulario.addEventListener('submit', function LocalStorage(){

let nombre = document.getElementById('nombre').value;
let correo = document.querySelector('[data-correo]').value;
let genero = document.querySelector('#genero').value;

localStorage.setItem("nombre",nombre);
localStorage.setItem("correo",correo);
localStorage.setItem("genero",genero);
ObtenerLocalStorage();

})

function ObtenerLocalStorage(){
    let nombreGuardado =localStorage.getItem("nombre")
    let correoGuardado =localStorage.getItem("correo")
    let generoGuardado =localStorage.getItem("genero")

    alert(` Bienvenido ${nombreGuardado}`)
}
