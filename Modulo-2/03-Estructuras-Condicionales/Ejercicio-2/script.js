let calif1, calif2, calif3;
let promedio = 0;

calif1 = Number(prompt('Ingrese calificación 1'));
calif2 = Number(prompt('Ingrese calificación 2'));
calif3 = Number(prompt('Ingrese calificación 3'));

promedio = (calif1 + calif2 + calif3)/3;

if(promedio >= 3){
  alert('El estudiante aprobó');
}else{
    alert('El estudiante NO aprobó');
}
