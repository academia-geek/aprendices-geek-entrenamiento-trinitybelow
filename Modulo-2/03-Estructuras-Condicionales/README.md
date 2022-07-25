# Estructuras condicionales

Las estructuras condicionales comparan una variable contra otro(s) valor(es), para que con base al resultado de esta comparación, se siga un curso de acción dentro del programa. Cabe mencionar, que la comparación se puede hacer contra una variable o contra una constante, según se necesite.

Existen 3 tipos de condiciones:
- Simples
- Dobles
- Múltiples

El resultado de la comparación en una estructura condicional tiene como resultado un valor lógico(true, false)

## ¿Para qué sirve?
Los booleanos sirven para tener datos que representen verdadero o falso, como por ejemplo saber si una condición se cumple o no. Los condicionales se basan en condiciones, es decir, la base fundamental para que funcionen correctamente son los booleanos y sin ellos no serían viables.
La mejor forma de explicar para qué sirven las condicionales es explicar cómo sería la programación sin ellas. En un mundo sin estos tendríamos que escribir en nuestro código todos los pasos a llevar a cabo, uno a uno y no podríamos ejecutar un código u otro en función de una serie de datos. Por ejemplo, no podríamos comprobar si un formulario tiene todos los campos rellenos para enviarlo, ni comprobar si hemos hecho scroll hasta una sección concreta de nuestra página para mostrar un elemento o activar una animación. Es decir, no habría distintas vías, sólo un posible camino, cosa que haría prácticamente imposible ejecutar un código realmente útil.

### ¿En qué casos se utiliza?
Veamos algunos ejemplos donde se utiliza lo que vamos a ver durante esta sesión.

Los booleanos se utilizan para almacenar datos verdaderos o falsos o convertir comparaciones a verdadero o falso:
- Guardar información del estilo el usuario está registrado o no, el campo se ha rellenado o no, etc.
- Guardar info sobre si un número es mayor o menor, si dos strings son iguales o no, si una variable existe, si una cadena de texto está vacía, etc.

Los condicionales se usan para realizar o no un código en función de una condición:
- Mostrar un mensaje de error si falta un campo obligatorio por rellenar en un formulario
- Mostrar el símbolo de usuario verificado en Twitter si la cuenta está verificada
- Mostrar una película en favoritos si está marcada como favorita

### Clasificación
***Simples***

Se les conoce como "Toma de decisión". Tienen la siguiente forma:

Pseudocódigo
~~~
Si <condicion> entonces
    Acción(es)
Fin si
~~~

Javascript
~~~
if (condicion) {
    //Acción(es)
}
~~~

***Dobles*** 

Permiten elegir entre dos opciones o alternativas posibles en función del cumplimiento o no de una determinada condición.
Tiene la siguiente forma:

Pseudocódigo
~~~
Si <condicion> entonces
    Acción(es)
Sino
    Acción(es)
Fin si
~~~

Javascript
~~~
if (condicion) {
    //Acción(es)
} else {
    //Acción(es)
}
~~~

***Múltiples o anidadas***

Decimos que una estructura condicional es anidada cuando por la rama del verdadero o el falso de una estructura condicional hay otra estructura condicional. Tienen la siguiente forma:

Pseudocódigo
~~~
Si <condicion> entonces
    Acción(es)
Sino Si <condicion> entonces
    Si <condicion> entonces
        Acción(es)
    Fin si
    Acción(es)
Fin si
~~~

Javascript
~~~
if (condicion) {
    //Acción(es)
} else if (condicion){
    if (condición) {
        //Acción(es)
    }
    //Acción(es)
}
~~~

Es común que se presenten estructuras condicionales anidadas aún más complejas.


## Estructura de control Switch Case

Es muy útil cuando la condición que evaluamos puede tomar muchos valores. Si utilizamos una sentencia if...else, tendríamos que repetir la condición para los distintos valores. En esta estructura podemos comparar cadenas de texto o números, para el caso de querer comparar cadenas de texto se debe poner los posibles valores entre comillas. Tiene la siguiente forma: 


Pseudocódigo
~~~
Segun variable Hacer
    opcion_1:
        Acción(es)
    opcion_2:
        Acción(es)
    opcion_3:
        Acción(es)
    opcion_4:
        Acción(es)
    De otro modo:
        Acción(es)
Fin segun
~~~

Javascript
~~~
switch (expresion) {
    case opcion_1:
        //Acción(es)
    break;
    case opcion_2:
        //Acción(es)
    break;
    case opcion_3:
        //Acción(es)
    break;
    case opcion_4:
        //Acción(es)
    break;
    default: 
        //Acción(es)
}
~~~
           

# Condicionales Ternarios

Es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if. Tiene la siguiente forma: condición ? expr1 : expr2 

Ejemplo
~~~
    let num = -2;
    num > 0 ? console.log(`El número ${num} es positivo`) : console.log(`El número ${num} es negativo`)
~~~
Documentación técnica https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
