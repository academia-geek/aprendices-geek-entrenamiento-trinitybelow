let numero = 0;
let cubo = 0;
let cuarta = 0;

for(let i=1; i<=10; i++){
  numero = Number(prompt('Ingrese número'));
  cubo = Math.pow(numero,3);
  cuarta =  Math.pow(numero,4);
  alert('El cubo es : ' + cubo + ' y la cuarta es: ' + cuarta);
}

