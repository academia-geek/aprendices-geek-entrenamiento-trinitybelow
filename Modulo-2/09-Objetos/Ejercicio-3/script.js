function guardarLocalStorage(){
    let persona = {
        nombre: 'Jenny',
        edad: 29,
        correo: 'Jenny@gmail.com'
    }

    localStorage.setItem('Nombre', JSON.stringify(persona));
}

guardarLocalStorage();
