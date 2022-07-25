const avisaUsuario = (funcion, nombre_usuario) => {
    alert(funcion(nombre_usuario));
}

const saludaUsuario = (nombre) => {
    return `hola ${nombre}`;
}

avisaUsuario(saludaUsuario,'Jenny')
