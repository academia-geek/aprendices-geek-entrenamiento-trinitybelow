# Funciones

Una función es un bloque de código que definimos una vez y lo reutilizamos las veces que queramos; un conjunto de instrucciones a las que podemos pasar diferentes datos, luego estos datos se procesan y así la función nos devolverá resultados distintos según sea el resultado del procesamiento.

Las funciones son muy útiles a la hora de crear un código único para usarlo en distintas partes de nuestro programa. El beneficio de esto es que si en el futuro queremos modificar algo de ese código lo haremos en un único sitio aunque se utilice en decenas de sitios diferentes. Las funciones se ejecutan en distintos momentos y con distintas características gracias a los parámetros.

Otra de las ventajas de las funciones es que devuelven un valor, es decir, realizan una operación y pueden devolver un dato. Ese dato podemos asignárselo a una variable o usarlo dentro de otra operación. O incluso podemos prescindir de él si no nos interesa para nada.

Aquí hay un ejemplo de una función:

~~~
nombreFuncion() {
  console.log("Hola Mundo");
}
~~~

Puedes llamar o invocar esta función usando su nombre seguido de paréntesis, así: `nombreFuncion()`, cada vez que se llame a la función se imprimirá el mensaje `Hola Mundo` en la consola. Todo el código entre las llaves se ejecutará cada vez que se llame a la función.

## ECMAScript o ES
Antes de continuar con la explicación de las funciones queremos que sepas que es ECMAScript o ES, esto es una versión estandarizada de JavaScript. Dado que todos los principales navegadores siguen esta especificación, los términos ECMAScript y JavaScript son intercambiables. Al momento de escribir esta guía la última versión de ECMAScript es la 12, o sea ES12, JavaScript está en constante evolución, y últimamente cada año se lanzan nuevas características.

ES6, lanzado en 2015, añadió muchas características nuevas y potentes al lenguaje. Al rededor de estás guías vemos implementaciones de varias versiones de ECMAScript, como lo es el caso de esta guía, donde por ejemplo se explican las funciones anónimas (ES5) y se da la otra alternativa que son las funciones flecha (ES6). Si quieres más adelante ver otro tipo de caso como el mencionado anteriormente puedes visitar artículos como [este](https://medium.com/@jagogutierrez/ecmascript-es6-diferencias-notables-al-es5-83d3e33ae201). 

## Tipos de funciones

### Función sin parámetros
Son funciones que no tienen parámetros, normalmente se realizan cuando no se necesitan argumentos para la que la función se realice o se utilizan 
valores externos a la función.
  ~~~
  function nombreFuncion() {
     //Accion
  }
  ~~~ 
 
### Función con parámetros
Los parámetros son variables que se introducen en una función cuando se llama. Cuando se define una función, normalmente se define junto con uno o más parámetros. Los valores reales que se introducen (o se "pasan") a una función cuando se la llama se conocen como argumentos. Cuando a una función le debemos enviar varios argumentos debemos de tener cuenta el orden de estos, ya que si los pasamos en diferente orden a como están definidos los parametros de la función posiblemente no tendremos el resultado esperado. 

Esta es una función con dos parámetros, parametro1 y parametro2:

  ~~~
  function funcionPrueba(parametro1, parametro2) {
     console.log(parametro1, parametro2);
  }
  ~~~
 
Entonces podemos llamar a **funcionPrueba** así: `funcionPrueba("Hola", "Mundo")`. Hemos pasado dos argumentos de cadena, ***Hola*** y ***Mundo***. Dentro de la función, param1 será igual a la cadena Hola y param2 será igual a la cadena Mundo. Ten en cuenta que podrías volver a llamar a funcionPrueba con argumentos diferentes y los parámetros tomarían el valor de los nuevos argumentos.
 
 
### Función sin retorno
También llamadas procedimiento, son funciones que no retorna un valor, en muchos lenguajes de programación las podemos reconocer cuando no contiene la palabra `return`. 
  
<p align="center"><img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_2.png" alt="" width="450" height="180"/></p> 
  
### Función con retorno
Función que al llamarla me retorna o devuelve un valor, que luego puedo almacenarlo en una variable o constante, la podemos reconocer cuando contiene la palabra `return`, es ***muy importante*** que sepas que el return lo utilizamos para enviar un valor de vuelta de una función. Si llegamos a retornar un valor ya el resto del código no se ejecutará. 
     
<p align="center"> <img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_3.png" alt="" width="450" height="180"/> </p>  

En el ejemplo anterior, llamamos la función dentro del console.log así: `console.log(calcularPromedio(35,10,9))`, esto quiere decir que se va a imprimir un mensaje en la consola con lo que **retorne** la función, en este caso retornará la cadena de caracteres 'El promedio es: 18', ya que (35+10+9)/3 es igual a 18 y luego se concatena con el string 'El promedio es: '. Si pusieramos `console.log(num1,num2,num3)` debajo del return y antes de la llave de cierre de la función, este no se mostraría ya que en la anterior instrucción estamos retornando un valor utilizando **return** y ya estaríamos afuera de la función, es decir, la ejecución de la función actual se detiene y el control vuelve a la ubicación de llamada.
 
   
### Función Anónima
Cuando una función se define sin un nombre, la podemos utilizar cuando no necesitamos llamar a la funcion en otra parte. 
 
<p align="center"> <img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_5.png" alt="" width="500" height="150"/> </p>  
   
### Función flecha o arrow functions
Es una función anónima y la podemos reconocer porque no tiene la palabra reservada `function`, y normalmente antes de las llaves tenemos los simbolos `=>`. Este tipo de función es muy utilizada ya que podemos resumir bastante nuestro código, por ejemplo, podemos realizar funciones flecha con las siguientes estructuras: 

 Forma común
 ~~~
 const nombreFuncion = (param1,param2,paramN) => {
     //Acción
     //Acción
 }
 ~~~
  
 Si sólo necesitamos un parámetro en nuestra función podemos quitar los paréntesis
 ~~~
  const nombreFuncion = parametro => {
     //Accion1
     //Accion2
  }
 ~~~
  
Si el contenido de la función ocupa solo una línea de código no necesitamos poner `return` y no tiene que estar entre llaves
~~~
  const nombreFuncion = (param1,param2) => param1+param2
~~~
  
También podemos combinar las dos anteriores así:
~~~
  const nombreFuncion = param1 => param1 * 2
~~~

Si quisieramos realizar una función flecha sin parámetos
~~~
  const nombreFuncion = () => console.log('Hola mundo')
~~~
  
Reforcemos con un ejemplo de función flecha lo más simplificado posible:

<p align="center"> <img src="https://raw.githubusercontent.com/LeisyVasquez/EcoCol/main/Funcion%20flecha.PNG"/> </p>
  


### Asignar la función a una variable
  
<p align="center"><img src="https://github.com/LeisyVasquez/EcoCol/blob/main/Asignar%20funcion.PNG"/></p>

En el ejemplo anterior se puede evidenciar que la función `calcularPromedio` la estamos guardando en la constante `calcular`, luego al llamar la función lo podemos hacer utilizando `calcular` o `calcularPromedio` ya que son una copia exacta y harían lo mismo.


## Scope
En JavaScript, el ***scope*** se refiere a la visibilidad de las variables. 

### Global
Las variables que se definen fuera de un bloque de funciones tienen alcance global. Esto significa que pueden verse en cualquier parte del código JavaScript. En la siguiente imagen hay una variable con alcance global llamada `miVariableGlobal`, se puede acceder a ella desde cualquier parte del código, ya sea dentro de funciones o fuera de ellas 

<p align="center"><img src="https://raw.githubusercontent.com/LeisyVasquez/EcoCol/main/Alcance%20Global.PNG"/></p>

**Tip:** Cuando en el `if` solo se debe de ejecutar una acción no es necesario poner las llaves, si es más de una si es obligatorio ponerlas. 

### Local
Las variables que se declaran dentro de una función, así como los parámetros de la función, tienen ámbito local.  En la siguiente imagen dentro de la función `obtenerVariableLocal` hay una variable con alcance local llamada `miVariableLocal`, a esta variable no se puede acceder por fuera de la función. 

<p align="center"><img src="https://raw.githubusercontent.com/LeisyVasquez/EcoCol/main/Alcance%20Local.PNG"/></p>

La llamada a la función `obtenerMiVariableLocal` mostrará la cadena ***'Solo pueden acceder a mi dentro de la función obtenerMiVariableLocal'*** en la consola. Las líneas
`miVariableLocal = "Hola, intento cambiarle el valor a la variable local"` y `console.log(miVariableGlobal)` (fuera de la función obtenerMiVariableLocal) arrojaran un error, ya que miVariableLocal no está definida fuera de la función.

### Global vs Local
Es posible tener variables locales y globales con el mismo nombre. Cuando se hace esto, la variable local tiene prioridad sobre la variable global.


Para elaborar el conténido anterior de funciones se utilizó apoyo del curso [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) de [freeCodeCamp](https://www.freecodecamp.org/learn)
