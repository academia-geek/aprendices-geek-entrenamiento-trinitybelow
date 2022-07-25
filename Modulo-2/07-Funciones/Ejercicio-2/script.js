 
function suma(num1, num2){
   return num1+num2;
 }

 function resta(num1, num2){
    return num1-num2;
  }

  function multiplicacion(num1, num2){
    return num1*num2;
  }
 
  function division(num1, num2){
     return num2 === 0? 'ERROR, no se puede dividir por 0': num1/num2
   }

 console.log('La suma es: ' + suma(5,7));
 console.log('La resta es: ' + resta(5,7));
 console.log('La multiplicación es: ' + multiplicacion(5,7));
 console.log('La división es: ' + division(5,7));
 
//División por 0
 console.log('La división es: ' + division(9,0));
