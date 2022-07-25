# Conceptos básicos de programación

## ¿Qué es un algoritmo?
>Un algoritmo es una secuencia de pasos lógicos y ordenados con las cuales le damos solución a un problema determinado.

***Partes de un algoritmo***
>1. Inicio y Fin
>2. Declaración de variables
>3. Asignación de variables
>4. Entrada de datos
>5. Procesamiento
>6. Salida de datos

***Las características de los algoritmos***
1. Un algoritmo debe ser preciso e indicar el orden de realización de cada paso.

>Los algoritmos así como las recetas de cocina deben ser muy precisos para que funcionen correctamente, por ejemplo al seguir la receta de una torta se especifican los ingredientes y sus cantidades exactas, no es lo mismo decir "agregar harina" a decir "agregar un kilogramo de harina", de esta forma todos los algoritmos deben especificar sus pasos y el orden en que dejen ser ejecutados.

2. Un algoritmo debe estar definido. Si se sigue el algoritmo dos veces, se debe obtener el mismo resultado cada vez.

>Al sumar dos números por ejemplo 1 + 1 la respuesta siempre va a ser 2, si vuelves a hacer la operación la respuesta seguirá siendo 2, lo mismo pasa con los algoritmos, por más veces que se ejecute el resultado debe ser el mismo.

3. Un algoritmo debe ser finito. Si se sigue el algoritmo, se debe terminar en algún momento, o sea, debe tener un número finito de pasos.

>Todo algoritmo debe tener un inicio y un fin, por ejemplo si tuvieras que cambiar una bombilla el inicio podría ser "Comprar bombilla nueva" y el final "Instalar la bombilla".

***Ejemplos de algoritmos*** 

1. Un cliente llega a una entidad bancaria para realizar una consignación, el cajero le pide el número de
la cuenta y el dinero a consignar, verifica que la cuenta si existe, si la cuenta es válida se hace la consignación
(al saldo le aumenta el dinero recibido) de lo contrario devuelve el dinero.

~~~
1. Inicio
2. Pedir número de la cuenta y el dinero
3. Si la cuenta es válida realice el paso 4 de lo contrario siga en el paso 6
4. saldo = saldo + dinero
5. Ir a 7
6. Devolver el dinero
7. Final
~~~

2. Hacer un avión de papel
~~~
1. Inicio
2. Tomar una hoja de papel tamaño carta.
3. Doblar el papel a la mitad en orientación vertical.
4. Desdoblar el papel.
5. Doblar las dos esquinas de la parte superior hacia el pliegue central para hacer un triángulo.
6. Tomar las esquinas superiores del borde exterior y doblarlas hacia el centro. 
7. Doblar el papel a la mitad hacia atrás.
8. Colocar el papel de modo que el pliegue plano esté orientado en la parte inferior.
9. Doblar el papel hacia abajo desde la parte superior para crear un ala.
10. Repetir paso 8 y 9 con el otro lado del papel.
11. Final
~~~

3. Cepillarse los dientes

~~~
1. Inicio
2. Poner pasta dentífrica en el cepillo.
3. Humedecer el cepillo con agua.
4. Cepillar una muela hasta que esté limpia.
5. Repetir el paso 3 con cada uno de los dientes. 
6. Enjuagarse la boca con agua.
7. Limpiar el cepillo y secarlo.
8. Final
~~~

## Declaración de variables
Los datos son una parte muy importante en un algoritmo, pues son ellos el punto de partida y son ellos quienes sufren las transformaciones que darán los resultados deseados. Por esta razón, el algoritmo debe guardar los datos en un sitio donde los pueda  leer  y modificar cada vez que lo requiera, los sitios donde el algoritmo guarda los datos los llamaremos ESPACIOS DE MEMORIA.

***Variables***
>En programación, las variables son espacios reservados en la memoria que, como su nombre indica, pueden cambiar de contenido a lo largo de la ejecución de un programa, en ellas almacenamos algún tipo de dato. Por ahora, sin entrar a mucho detalle, entendamos que cuando ponemos la palabra reservada `let` al inicio nos estamos refiriendo a una variable. 
~~~
let carro = "Mazda"
~~~

***Constantes***
>Una constante es un valor que no puede ser alterado/modificado durante la ejecución de un programa, únicamente puede ser leído. 
~~~
const pi = 3.1415;
~~~

### Tipos de datos

Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número. Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.

***Numéricas***
>Una variable numerica como su nombre lo indica, se utiliza para almacenar números enteros y/o decimales, para este ultimo solo necesitas agregar el punto (.) entre los números enteros, esto es debido a que en los lenguajes de programación, la coma (,) se usa para añadir otros datos a la variable (separar elementos).
~~~
let suma = 1;
~~~

***Cadena de texto o Strings***
>Este tipo de variables almacena texto, el texto lo debes poner entre comillas simples o comillas dobles.
~~~
let palabra = "Hello word";
~~~

***Booleana***
>Tambien es conocida como variable tipo "Bandera o semaforo" ya que almacena un valor lógico, para representar lo verdadero o falso, en la programación se coloca "true" o "false".
~~~
let cumple = true;
let noCumple = false;
~~~

***Arreglos o Arrays***
>Es una variable en donde puedes almacenar más de un elemento, por ejemplo tener varios strings en una sola variable. Para definir un array se deben usar los corchetes ([ ]) y dentro de estos colocar cada elemento separado por comas (,). Cada elemento almacenado en el array tiene una posición comenzando desde el 0 hasta la cantidad de elementos almacenado, asi que para acceder a un elemento especifico solo debes llamar esa posición. Puedes buscar más información sobre este tipo de datos en esta pagina: [Arreglos](https://www.w3schools.com/js/js_arrays.asp)
~~~
let animales = ["perro", "gato", "conejo"];
animales[0] = "perro"
animales[1] = "gato"
animales[2] = "conejo"
~~~

***Objetos***
>Asi como los arrays, en las variables tipo objeto tambien se puede almacenar más de un elemento, solo que para definir un objeto se deben usar llaves ({ }) y dentro de estas colocar cada una de las propiedas con su respectivo valor. Para acceder a una propiedad especifica solo tienes que usar la notación de punto. Puedes buscar más información sobre este tipo de datos en esta pagina: [Objetos](https://www.w3schools.com/js/js_objects.asp)
~~~
let usuario = { nombre: "Pepito",
                apellido: "Perez" };
usuario.nombre = "Pepito";
usuario.apellido = "Perez"
~~~

**null y undefined**

null y undefined son dos tipos de datos primitivos existentes en JS, a menudo se suelen confundir y creer que son lo mismo. A continuación verás algunas diferencias:

- null es un valor asignado. No significa nada.
- undefined normalmente significa que una variable ha sido declarada pero no definida todavía.
- null y undefined son valores falsos.
- null y undefined son ambos primitivos.

~~~
let numero; 
console.log(numero); // undefined
numero = null;
console.log(numero); // null
numero = 6;
console.log(numero); // 6
~~~

**Function**

En JS las funciones también son otro tipo de dato, por eso podemos almacenarlas por ejemplo en una constante o variable. 
~~~
const sumar = (a,b) => a+b
console.log(typeof sumar); //function
~~~

Tambien en JS tenemos tipos de datos como: Symbol y BigInt. Si deseas saber más sobre los tipos de datos en JS puedes consultar los siguientes enlaces: https://es.javascript.info/types , https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures


## Alcance de las variables

***Scope***

>Se le llama ámbito de las variables al lugar donde estas están disponibles. Por lo general, cuando declaramos una variable hacemos que esté disponible en el lugar donde se ha declarado, esto ocurre en todos los lenguajes de programación y como Javascript se define dentro de una página web, las variables que declaremos en la página estarán accesibles dentro de ella.

***Globales***

>Son variables accesibles desde cualquier lugar de la página, es decir, desde el script donde se han declarado y todos los demás scripts de la página.
~~~
let miVariable = "Hello Word";
~~~

***Locales***

>Son variables a las que sólo puedes acceder a ellas dentro del lugar donde se declararon, es decir, si la habías declarado en una función solo podrás acceder a ella cuando estes en esa función. 
~~~
function miFuncion (){ 
    let miVariable = "Hello Word";
} 
~~~

Más información sobre el alcance de las variables [aquí](https://uniwebsidad.com/libros/javascript/capitulo-4/ambito-de-las-variables)

## Operadores

***Operadores aritméticos***

>Los operadores aritméticos son aquellos que "manipulan" datos numéricos, tanto enteros como reales.  Los operadores aritméticos realizan operaciones matemáticas, como sumas o restas. 

El orden de evaluación depende del orden de prioridad o jerarquia:
1. Paréntesis: Operaciones que estén entre paréntesis.
2. Potencias y raíces.
3. Producto, divisiones y módulo.
4. Sumas y restas

| Operador      | Operación         | Ejercicio | Resultado  |
| --------------| ------------------| ----------| ---------- |
| +             | Suma              | 2 + 2     |  4         |
| -             | Resta             | 4 - 2     | 2          |
| *             | Multiplicación    | 4 * 6     | 24         |
| /             | División          | 10 / 2    | 5          |
| %             | Módulo            | 10 % 2    | 0          |
| ++            | Incremento        | 10++      | 11         |
| --            | Decremento        | 10--      | 9          |

***Operadores relacionales***
>Se utlizan para hacer comparaciones entre variables o datos.

| Operador      | Operación                        | Ejercicio | Resultado                                    |
| --------------| ---------------------------------| ----------| -------------------------------------------- |
| >             | Mayor que                        | a > b     | Verdadero si a es mayor que b                |
| <             | Menor que                        | a < b     | Verdadero si a es menor que b                |
| >=            | Mayor o igual                    | a >= b    | Verdadero si a es mayor o igual que b        |
| <=            | Menor o igual                    | a <= b    | Verdadero si a es menor o igual que b        |
| !=            | Diferente                        | a != b    | Verdadero si a es diferente que b            |
| ==            | Igual valor                      | a == b    | Verdadero si a es igual que b                |
| ===           | Igual valor y tipo de dato (js)  | a === b   | Verdadero si a es estrictamente igual que b  |

***Operadores lógicos***
>Los operadores lógicos nos proporcionan un resultado a partir de que se cumpla o no cierta condición, producen un resultado booleano, y sus operandos son también valores lógicos o asimilables a ellos (los valores numéricos son asimilados a verdadero o falso según su valor sea cero o distinto de cero).

| Operador      | Operación         | Ejercicio       | Resultado                                           |
| --------------| ------------------| ----------------| --------------------------------------------------- |
| &&            | AND - Y           | a < b && a < c  | Verdadero si tanto a < b como a < c son verdaderas. |
| \|\|          | OR - O            | a < b \|\| a < c  | Verdadero si a < b o a < c son verdaderas.          |
| !             | NOT - Negación    | !a              | No a - Inverso de a                                 |

***Operadores de asignación***
>Los operadores de asignación asignan un valor a su operando izquierdo basándose en el valor de su operando derecho. Los puedes diferenciar de otros operadores ya que estos tiene el operador igual (=).

| Operador      | Operación                        | Ejercicio | Resultado   |
| --------------| ---------------------------------| ----------| ----------- |
| =             | Asignación                       | a = b     | a = b       |
| -=            | Asignación y Resta               | a -= b    | a = a - b   |
| +=            | Asignación y Suma                | a += b    | a = a + b   |
| *=            | Asignación y Multiplicación      | a *= b    | a = a * b   |
| /=            | Asignación y División            | a /= b    | a = a / b   |
| %=            | Asignación y Módulo              | a %= b    | a = a % b   |

***Ejercicio***

>Dadas las variables de tipo int con valores A = 5, B = 3, C = -12 indicar si la evaluación de estas expresiones daría como resultado verdadero o falso: 
~~~
a) A > 3 
b) A > C
c) A < C 
d) (A + B == 8) || (A - B == 6)
e) A > 3 && B >= 3 && C < -3
~~~

## Lógica proposicional
>La lógica matemática o proposicional consiste en utilizar símbolos a través de tablas de verdad que nos indican lo verdadero o falso, esto te puede ayudar para afianzar más es uso de **Operadores lógicos**.

| A   B  | A ^ B  | A v B | ¬ A |
| -------| -------| ------| ----|
| V   V  | V      | ∨     | F   |
| V   F  | F      | V     | F   |
| F   V  | F      | V     | V   |
| F   F  | F      | F     | V   |

Más información sobre lógica proposicional aquí: https://www.youtube.com/watch?v=vKe0UKSpNQQ, https://www.sdelsol.com/glosario/logica-proposicional/

## Diseño de algoritmos
Para resolver un problema con programas de computador es necesario realizar una serie de pasos, los cuales se describen a continuación:

1. Definición de problema: El enunciado del problema, el cual debe ser lo suficientemente claro y preciso. Una vez leído el enunciado del problema debe quedar claro lo que desea obtener del computador, es decir, conocer el objetivo que se desea alcanzar, de no ser así, no tiene sentido continuar con los siguientes pasos. 
2. Análisis del programa: Es la etapa más importante en la solución de un problema de computador, ya que de esta dependerá en gran medida el alcanzar o no los resultados que se desean obtener. Se considera una buena práctica de programación dedicar el tiempo que sea necesario para realizar un buen análisis. 
3.	Una vez entendido lo que se desea obtener del computador, se procede a determinar lo siguiente. 
>- **Datos de entrada:** Son los datos de entrada suministrados generalmente en el enunciado del problema de forma explícita o implícita. 
>- **Datos de proceso:** Son los cálculos y operaciones aritméticas que se desean realizar para obtener los resultados deseados. 
>- **Datos de Salida:** Son los resultados que se desean obtener. 
4.	Diseño del algoritmo: Consiste en la elaboración del algoritmo, el cual puede ser representado por medio de: 
>- **Diagramas de flujo:** Es la representación gráfica de las secuencias de pasos lógicos. 
>- **Pseudocódigo:** Es la secuencia de pasos lógicos escritos en un lenguaje nativo de cada persona.
5.	Prueba de escritorio: Permite detectar posibles errores cometidos por el programador, en la elaboración del algoritmo, luego se sigue la secuencia de pasos lógicos hasta llegar al nivel final, y determinar si los resultados arrojados son los esperados, en caso de que no son correctos, se deben regresar y revisar el diagrama y el pseudocódigo, o el código, en caso tal de que se este realizando directamente en algún lenguaje de programación. Mira este [vídeo](https://www.youtube.com/watch?v=-5_1mMoIaxo) corto con un ejemplo de como puedes aplicarla en tus algoritmos. 

### Diagramas de flujo
Los diagramas de flujo sirven para describir procesos, sistemas o algoritmos. Al usarlos, puedes entender el problema que quieres solucionar y los problemas pasan de ser muy complejos a ser claros y fáciles de comprender. Los diagramas de flujo emplean rectángulos, óvalos, diamantes y otras figuras para definir los pasos que ejecuta el algoritmo y las diferentes rutas que puede seguir.

| Símbolo  | Nombre              | Función                                                                                        |
| ---------| ------------------- | ----------------------------------------------------------------------------------------------- |
| ⬭       | Inicio / Final      | Representa el inicio y el final de un proceso.                                                  |
| ➝       | Línea de flujo      | Indica el orden de la ejecución de las operaciones. La flecha indica la siguiente instrucción.  |
| ▱       | Entrada / Salida    | Representa la lectura de datos en la entrada y la impresión de datos en la salida.              |
| ▭       | Proceso             | Representa cualquier tipo de operación.                                                         |
| ♢        | Decisión            | Permite analizar una situación, con base a los valores verdadero y falso.                       |

***Ejemplo***

<p align="center">
  <img src="https://ventajasydesventajas.top/wp-content/uploads/2021/09/diagrama-de-flujo.png"/>
</p>

Más información aquí: [Diagramas de flujo](https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo)

### Pseudocódigo
La palabra "Pseudo" proviene del griego y significa "Falso". Si juntas los dos términos "Pseudo" y "Código" la palabra que se forma es "Código falso", exactamente esto es lo que hacemos al construir pseudocódigos, es una forma de describir instrucciones lógicas que estructuralmente se asemejan a los lenguajes de programación, pero se utilizan palabras normales para que todas las personas lo puedan leer y escribir de forma sencilla.

***Ejemplo***

>Queremos obtener el volumen de un cilindro. Para esto, hay que solicitarle al usuario que ingrese valores conocidos como la altura y el diámetro del cilindro. Luego, es necesario indicar al algoritmo cuál es la ecuación a utilizar y se indicarán los valores ingresados que corresponden a cada variable. Una manera de desarrollar un diagrama de flujo:
~~~
Inicio
Mostrar “Ingresar valor 1”: Pedir A
Mostrar “Ingresar valor 2”: Pedir B
Mostrar “Ingresar valor 3”: Pedir C
M=(A+B+C)/3
Mostrar “La media aritmética de los tres valores ingresados es”, M
Fin
~~~

Más información aquí: [Pseudocódigo](https://conceptoabc.com/pseudocodigo/)

## ¿Qué es JavaScript?
JavaScript, a diferencia de HTML y CSS, sí que es un lenguaje de programación. Este lenguaje nos permite dar instrucciones al ordenador, en este caso al navegador web, para explicarle cómo debe mostrar nuestra página y que debe hacer en qué situación (si se pulsa un botón, si se rellena un campo, si pulsamos un enlace, etc.)

JavaScript en su día fue creado para realizar validaciones sobre datos en un formulario, pero ese tiempo quedó ya muy atrás. Hoy en día es uno de los lenguajes más populares y gran parte de ese mérito se debe a que es el lenguaje de la web, es decir, es el único lenguaje de programación que entienden los navegadores (debemos recordar que HTML y CSS no son lenguajes de programación). Desde su inicio se ha expandido y sus fronteras han ido más allá de la web hasta llegar al punto en el que se utiliza JavaScript para programar aplicaciones para ordenador, servidores, robots e incluso proyectos espaciales llevados a cabo por la NASA.

### ¿Dónde colocar el JS?

>Puedes colocar codigo js en dos partes, la primera es incrustar el script en el html con la etiqueta `<script>`

***Ejemplo***
~~~
<script>
var nombre = 'Pepito';
console.log('Hola' + nombre + '¿Cómo estás?');
</script>
~~~

>Tambien puedes referenciar el archivo JS a tu HTML, esta es la mejor forma de incluir Js en HTML ya que normalmente los archivos js están separados y colocar todo el codigo en el html no es buena practica. 

***Ejemplo***
~~~
<script src="js/myscript.js"></script>
~~~

### Comentarios

>Una muy buena practica en la programación es tener tu codigo limpio y bien documentado, esto para que otros programadores puedan leero sin problemas o incluso para que tu "yo" del futuro pueda entender que fue lo que hiciste. Los comentarios te ayudarán a tener organizado el codigo, puedes explicar que es lo que hace una función, para que sirve una variable o cualquier dato relevante para el funcionamiento del programa. En js podemos insertar comentarios de muchas formas, esto no se va a visualizar en la pagina web, pero si quedará dentro del codigo.

- Comentarios de una linea: `//Este es mi comentario`
- Comentarios de bloque, comienzan con /* y terminan con */: `/* Este es un
                                                                comentario de bloque
                                                             */`

### Comandos básicos a usar en JavaScript
- **let:** Declarar variables limitando su alcance, es decir, que solo están disponibles dentro de todo el bloque de la función donde fueron declaradas.
- **var:** Define una variable global o local en una función sin importar el ámbito, es decir, que están disponibles dentro del bloque de código actual, o sea, el área entre { y }.
- **const:** Definir variables constantes cuyo valor nunca varía.
- **prompt():** Ventana emergente para ingresar datos.
- **alert():** Ventana emergente en el navegador. 
- **document.write():** Muestra información en el archivo index.html. 
- **console.log():** Imprime en consola. 
- **parseInt():** Convierte texto a número entero.
- **parseFloat():** Convierte texto a número flotante.
- **typeof():** Muestra el tipo de dato de las variables.

***Diferencia entre let var y const***

>Tanto las varibales *let* y *var* permiten actualizar el valor de una variable mientras que *const* no lo permite, esta variable es estatica. Las variables definias con *let* están disponibles dentro de todo el bloque de la función donde fueron declaradas. Y las variables definidas con *var* están disponibles dentro del bloque de código actual, o sea, el area entre { y }.

Más información sobre la diferencia entre var y let aquí: [Var y let](https://platzi.com/blog/la-diferencia-entre-let-y-var/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzoiQlyEIZSwaLPV3rd97A2sWtkp9qa7plM0NQUkrbZF-8_wKs6LDHxoCs30QAvD_BwE&gclsrc=aw.ds)

***Tipos de consolas***
- console.log(): El más usado por excelencia para mensajes generales de registro de información. Es posible imprimir varios valores separados por comas.
- console.warn(): Muestra un mensaje de advertencia.
- console.info(): Muestra un mensaje de información.
- console.error(): Muestra un mensaje de error.

### Template string o plantillas literales

>Son cadenas literales que habilitan el uso de expresiones incrustadas. Esto quiere decir que puedes utilizar cadenas de caracteres de más de una linea y tambien puedes incrustar funciones o variables de js.

***Ejemplo***

Imagina que quieres hacer un console.log() saludando a una persona son el nombre "Pepito", para esto tienes dos formas de hacerlo:
~~~
let nombre = "Pepito";

//Forma 1
console.log('Hola' + nombre + '¿Cómo estás?')

//Forma 2
console.log(`Hola ${nombre} ¿Cómo estás?`)
~~~

Ambas formas son válidas, pero intenta siempre que puedas utilizar plantillas literales o 'Comillas invertidas' para concatenar variables.
