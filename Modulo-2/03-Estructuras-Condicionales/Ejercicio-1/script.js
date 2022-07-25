let capital = 0;
let porcentaje_intereses = 0;
let capital_final = 0;
let intereses = 0;

capital = Number(prompt('Ingrese capital invertido'));
porcentaje_intereses = Number(prompt('Ingrese el porcentaje de interés a obtener'));

intereses = capital * porcentaje_intereses;

if(intereses > 7000){
    capital_final = capital_final + intereses;
    console.log('El capital final es: '+ capital_final);
}

console.log('El concepto de interés generado es: ' + intereses);


