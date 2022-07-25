let nota1, nota2;
nota1 = Number(prompt('Ingrese nota 1'));
nota2 = Number(prompt('Ingrese nota 2'));

const calcularPromedio = (n1,n2) => {
  let promedio = (n1+n2)/2;
  return promedio;
}

alert('El promedio es: ' + calcularPromedio(nota1,nota2));
