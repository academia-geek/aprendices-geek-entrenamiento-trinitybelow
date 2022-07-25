## Estructuras Cíclicas

Sirven para ejecutar un mismo código un número determinado de veces. Por ejemplo, si nos pidierán imprimir los números del 1 al 10 con lo que sabemos hasta el momento lo haríamos así:

Pseudocódigo (PSeInt)

~~~
Escribir 1
Escribir 2
Escribir 3
Escribir 4
Escribir 5
Escribir 6
Escribir 7
Escribir 8
Escribir 9
Escribir 10
~~~

Javascript
~~~
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
~~~

Pero con los ciclos podemos resumir esto en dos líneas utilizando un tipo de ciclo como **for** así:

Pseudocódigo (PSeInt)
~~~
Para i<-0 Hasta 10 Con Paso 1 Hacer
	Escribir i
Fin Para        
~~~

Javascript
~~~
for (let i = 1; i <= 10; i++) {
        console.log(i)
}
~~~

### Bucle for
Tiene la siguiente estructura:
podemos identificarlo por usar al comienzo la palabra `for`
después irá la configuración del bucle entre paréntesis `()` que tiene 3 partes, separadas por punto y coma `;`:
- Inicialización: Para utilizar el ciclo for necesitaremos mínimo una variable que nos ayudará para validar la condición, para esto realizaremos la declaración y asignación con el valor inicial de la variable (ej: let i = 1). Esta variable cambiará según se defina lo cual nos ayuda a controlar el ciclo. 
- Condición: En esta parte ubicaremos la condición que debe cumplirse para que se ejecute el bloque de código (ej: i < 20), en caso de que esta condición no se cumpla el ciclo se detiene. 
- Actualización: En esta parte se define el cambio de la variable que previamente se declaro en la primera parte del ciclo, esta operación se realizará al final de cada iteración del bucle (ej: i++, que es la abreviación de i = i + 1)

Al final definimos un bloque de código entre llaves `{}` que se va a ejecutar si se cumple la condición

~~~
for (let i = 0; i < 20; i++) {
   	console.log('Me encantan los bucles');
}
~~~
        

En este ejemplo de código, hacemos aparecer 20 veces en la consola el texto **Me encantan los bucles**. Funciona de la siguiente forma:

1. Se ejecuta el código de inicialización (let i = 0)
2. Se comprueba que la condición se cumple (i < 20), si se cumple vamos al paso 3 y si no se cumple vamos al paso 6
3. Como la condición se cumple, se ejecuta el código que hay dentro del bloque entre las llaves ({}), es decir el console.log
4. Se ejecuta la actualización del bucle (i++) y la variable i pasa a valer 1
5. Vuelta al paso 2
6. Cuando la variable i llega al valor de 20, la condición ya no se cumple (20 no es menor que 20), por lo tanto el bloque que contiene el console log no se ejecuta y el bucle acaba


Otro aspecto interesante de los bucles for es que dentro del bloque de código que se repite (el que va entre llaves {}) podemos usar la variable i, por ejemplo:

~~~
for (let i = 0; i < 20; i++) {
	console.log('Voy por la vuelta ' + i);
}  
~~~

Este ejemplo hará aparecer 20 veces, en la consola, el texto:
~~~
Voy por la vuelta 0
Voy por la vuelta 1
Voy por la vuelta 2
...
Voy por la vuelta 19
~~~
          

### Bucle while 
Es una estructura que repetirá un proceso durante "N" veces, donde "N" puede ser fijo o variable. Para esto, la instrucción se vale de una condición que es la que debe cumplirse para que se siga ejecutando. Cuando la condición no se cumple, entonces no se ejecuta el proceso. La forma de esta estructura es la siguiente:

~~~
while ( condicion ) {
	//Acción 1
	//Acción 2
	.
	.
	//Acción N
}
~~~
      
### Bucle do while
Esta es una estructura similar en algunas características al while, repite un proceso una cantidad de veces, pero a diferencia del while, esta estructura permite realizar **mínimo una vez** el proceso que esté entre `{}`, ya que la condición se evalúa al final del proceso, mientras que en el while puede ser que nunca llegue a ejecutar el proceso que esté entre `{}` si la condición no se cumple desde un principio. La forma de la estructura es la siguiente:

~~~
do {
	//Acción 1
	//Acción 2
	.
	.
	//Acción N
} while ( condicion )
~~~
