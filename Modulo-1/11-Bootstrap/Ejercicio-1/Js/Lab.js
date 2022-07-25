var Usuario;

function Capturar(){
    class Persona{
        constructor(nombre,edad,ciudad){
            this.nombre = nombre;
            this.edad = edad;
            this.ciudad = ciudad;  
        }
    }

    var nombreCaptura = document.getElementById('nombre').value;
    var edadCaptura = document.getElementById('edad').value;
    var ciudadCaptura = document.getElementById('ciudad').value;

    Usuario = new Persona(nombreCaptura,edadCaptura,ciudadCaptura);
    //console.log(Usuario)
    AgregarUsuario(Usuario);
}

var Personas = [];
function AgregarUsuario(Usuario){
    Personas.push(Usuario)
    console.log(Personas);
    document.getElementById('tabla').innerHTML +=  '<tbody><td>' + Usuario.nombre + '</td><td>' + Usuario.edad +'</td><td>' + Usuario.ciudad + '</td> </tbody>'
}

