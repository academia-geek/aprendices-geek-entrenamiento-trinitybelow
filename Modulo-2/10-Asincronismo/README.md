# Asincronismo vs sincronismo
Cuando hablamos de internet hablamos de información, está información tarda en transportarse de un lugar a otro, por ejemplo cuando visitas una página web esta normalmente 
se demora un poco en cargar, en ocasiones el retardo es casi imperceptible y en otras no tanto. Esto se puede deber a varias razones, una de ellas es que la información almacenada
en diferentes servidores tarda en llegar al DOM. Javascript al ser el lenguaje de la Web debío en su momento considerar esto y nos proporcionó herramientas para manejar estos
retardos, aunque la palabra técnica sea programación asincrónica, hasta este momento en el módulo de Javascript hemos realizado programación sincrónica.

## Conceptos
- Concurrencia: cuando dos o mas tareas progresan simultáneamente.
- Paralelismo: cuando dos o mas tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.
- Síncrono: el programa se ejecuta linea a linea, instrucción por instrucción, hasta que no se concluya la actual no se sigue a la siguiente. 
- Asíncrono: la finalización de la operación se realiza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento (se explicarán 
después), lo que hace posible que la respuesta sea procesada en diferido. Como se puede adivinar, su comportamiento es no bloqueante ya que la instrucción no se 
termina de ejecutar inmediatamente, pero se sigue a la siguiente instrucción.

### Callback

Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.

Ejemplo: 
~~~
setTimeout(function(){
  console.log("Hola Mundo con retraso!");
}, 1000)
~~~
En el anterior ejemplo tenemos la una función propia de Javascript llamada `setTimeout` que es una función asincrona que recibe como parametro una función, básicamente lo que hace `setTimeout` es ejecutar la funcion que le pasamos por parametro luego de esperar los milisegundos pasados como segundo parámetro. También lo podemos almacenar la funcion que pasamos por parámetro en una variable así:

~~~
const myCallback = () => console.log("Hola Mundo con retraso!");
setTimeout(myCallback, 1000);
~~~

Ahora bien, ¿Cúal es el problema de los callbacks? Los problemas comienzan cuando tenemos varios callbacks anidados, convirtiendo nuestro código complicado de leer. Por ejemplo:
~~~
setTimeout(function(){
  console.log("Etapa 1 completada");
  setTimeout(function(){
    console.log("Etapa 2 completada");
    setTimeout(function(){
      console.log("Etapa 3 completada");
      setTimeout(function(){
        console.log("Etapa 4 completada");
        // Podríamos continuar hasta el infinito...
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
~~~

### Promesas

Una promesa es un objeto que representa el resultado de una operación asíncrona. Este resultado podría estar disponible ahora o en el futuro. Las promesas se basan en callbacks pero tienen un mejor manejo y sintaxis. Las promesas son especiales en términos de asincronía ya que añaden un nuevo nivel de prioridad que estudiaremos a continuación.

Cuando llamamos a una función asíncrona implementada con este patrón, nos devolverá inmediatamente una promesa como garantía de que la operación asíncrona finalizará en algún momento, ya sea con éxito o con fallo. Una vez que tengamos el objeto promesa en nuestro poder, registramos un par de callbacks: uno para indicarle a la promesa 'que debe hacer en caso de que todo vaya bien' (resolución de la promesa o resolve) y otro para determinar 'que hacer en caso de fallo' (rechazo de la promesa o reject).

A resumidas cuentas, una promesa es un objeto al que le adjuntamos callbacks, en lugar de pasarlos directamente a la función asíncrona. La forma en que registramos esos dos callbacks es mediante el método .then(resolveCallback, rejectCallback). En terminología de promesas, decimos que una promesa se resuelve con éxito (resolved) o se rechaza con fallo (rejected).

~~~
fetch(document.URL.toString())
  .then(result => console.log(result),
    e => console.log(`Error capturado:  ${e}`));
~~~

Una característica interesante de las promesas es que pueden ser encadenadas. Esto es posible gracias a que la llamada .then() también devuelve una promesa. Esta nueva promesa devuelta será resuelta con el valor que retorne el callback de resolución original (el que hemos pasado al primer then()):

~~~
fetch(document.URL.toString())
  .then(result => {
    console.log(result);
    return "Primer Then";
  },
    e => console.log(`Error capturado:  ${e}`))
  .then(result => console.log(`Segundo Then despues de ${result}: La página ya ha debido ser mostrada`),
    e => console.log(`Error capturado:  ${e}`));
~~~

Para evitar verbosidad, podemos encadenar las promesas de un modo mas corto, empleando el método .catch(rejectCallback) para catpurar cualquier rechazo que ocurra en cualesquiera de las promesas encadenadas. catch(rejectCallback) es equivalente a .then(null, rejectCallback). Solo se necesita una única sentencia catch() al final de una cadena de promesas:

~~~
fetch(document.URL.toString())
  .then(result => console.log(result))
  .then(() => console.log(`Fetch completado, página mostrada`))
  .catch(e => console.log(`Error capturado:  ${e}`));
~~~

En el ejemplo anterior, pedimos al servidor que nos provea una URL utilizando la función asíncrona fetch y nos devuelve una promesa. Configuramos la promesa con dos callbacks: uno para resolver la promesa, que mostrará la página por consola en caso de éxito, y otro para rechazarla en caso de fallo que mostrará el error asociado.

Cuando tenemos varias promesas y queremos que se resuelvan todas podemos hacerlo como en el siguiente ejemplo:
~~~
const p1 = fetch("URL1_Aqui");
const p2 = fetch("URL2_Aqui");
const p3 = fetch("URL3_Aqui");

Promise.all([p1, p2, p3])
  .then(resultArray => console.log(resultArray))
  .catch(e => console.log(`Error capturado:  ${e}`));
~~~

Lo anterior es muy útil al momento de querer realizar instrucciones asincronas dentro de estructuras como .map, .filter o foreach. 

### Async / Await

Las promesas supusieron un gran salto en Javascript al introducir una mejora sustancial sobre los callbacks y un manejo más elegante de nuestras tareas asíncronas. Sin embargo, también pueden llegar a ser tediosas y verbosas a medida que se requieren más y más .then(). Las palabras clave async y await surgieron para simplificar el manejo de las promesas. Son puro azúcar para hacer las promesas más amigables, escribir código más sencillo, reducir el anidamiento y mejorar la trazabilidad al depurar. Pero recuerda, async \ await y las promesas son lo mismo en el fondo.

La etiqueta async declara una función como asíncrona e indica que una promesa será automáticamente devuelta. Podemos declarar como async tanto funciones con nombre, anónimas, o funciones flecha. Por otro lado, await debe ser usado siempre dentro de una función declarada como async y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.

Ejemplo:
~~~
const checkServerWithSugar = async (url) => {
  const response = await fetch(url);
  return `Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
}

checkServerWithSugar(document.URL.toString())
  .then(result => console.log(result))
  .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));
~~~

## Más información
1. https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
2. https://www.freecodecamp.org/espanol/news/que-es-una-funcion-callback-javascript/
3. https://jonmircha.com/javascript-asincrono




