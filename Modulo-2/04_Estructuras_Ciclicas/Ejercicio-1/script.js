let suma = 0;
let calificacion = 0;
let promedio = 0;

for (let i = 1; i<=7 ; i++){
  calificacion = Number(prompt('Ingrese calificación'));
  suma = suma + calificacion;
}

promedio = suma/7;
alert('El promedio es: ' + promedio.toFixed(2));
