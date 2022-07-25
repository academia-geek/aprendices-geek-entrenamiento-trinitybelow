# HTML y CSS Básico
Hemos visto que las etiquetas HTML nos permiten estructurar nuestra página web y en ella el contenido que se encuentra materializado en dicha página, pero algo importante es que se estructura de acuerdo a su función o carga semántica. Es esencial que profundicemos en etiquetas que nos ayuden a:
1. Definir nuestra página.
2. Agrupar secciones.
3. Identificar semánticamente el contenido.
4. Crear Tablas de datos.

## Elementos en bloque (block) y en línea (inline)
Cada etiqueta y/o elemento en HTML tiene un valor de display por defecto, esto depende del tipo de elemento que se vaya a utilizar. El valor por defecto para la mayoría de los elementos es `block` o `inline`.

Un elemento a nivel de block, siempre empieza en una línea nueva y toma el ancho completo disponible, es decir, se estira hacia la izquierda y hacia la derecha tan lejos como pueda.

Un elemento inline no empieza en una línea nueva, y solo toma el ancho que necesite tomar.

![Block-Inline](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_6.png)

***Elementos en bloque (block)***

Un elemento a nivel de block, siempre empieza en una línea nueva y toma el ancho completo disponible, es decir, se estira hacia la izquierda y hacia la derecha tan lejos como pueda.

```html
<address> <article> <aside> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6>
<header> <hr> <li> <main> <nav> <ol> <p> <pre> <section> <table> <ul> <video>
```

***Elementos en línea (inline)***

Un elemento inline no empieza en una línea nueva, y solo toma el ancho que necesite tomar.

```html
<a> <abbr> <aside> <b> <bdo> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <label> <map> <object> <output> <q>
<samp> <select> <small> <span> <strong> 
```
# Más etiquetas HTML

## div:
`<div>` de "división", sirve para crear secciones o agrupar contenidos.
```html
<div id="" class="">
    <h2>Examen</h2>
</div>
```
![div](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_7.png)

## Secciones
Algo que normalmente en nuestras vidas hacemos, es buscar la forma de agrupar distintos elementos que tienen algo en común y que nos permita identificarlos fácilmente o poderlos encontrar de acuerdo a dicha clasificación. Es por ello que a medida que avanzamos en la estructura de nuestros proyectos de software web, evidenciamos que deseamos agrupar esta estructura en bloques de código.

Para materializar estos bloques podemos hacer uso de la etiqueta `<section>`, es decir, vamos a usar la etiqueta `<section>` para agrupar contenidos de acuerdo a una temática.

existe una serie de secciones especiales que tienen asignado un significado semántico predeterminado:
- `<header`>: es una cabecera o sección de presentación de un bloque.
- `<main`>: indica la sección principal del contenido.
- `<footer`>: un pie de página o sección final de un bloque.
- `<nav`>: indica un bloque de navegación, normalmente para un menú.
- `<aside`>: es un bloque de contenido de menor importancia o con contenido relacionado.
- `<article`>: se consideran independientes del sitio web, permitiendo ser vistos o utilizados por separado, tales como: artículos, entradas de blogs o mensajes de un foro.

Estas etiquetas contenedoras especiales se pueden usar unas dentro de otras siempre y
cuando esto tenga sentido: por ejemplo, un `<article`> puede tener cabecera y pié de página, mientras que una cabecera no debería tener en su interior un pie de página.

## Enlaces:
Uno de los conceptos básicos de HTML es el uso de los enlaces, estos nos van a permitir vincular páginas o partes de ellas de manera que la información no quede de forma aislada sino que se vaya generando distintas interconexiones que permiten navegar por nuestro sitio web.

Los enlaces se escriben haciendo uso de la etiqueta `<a>` y con un atributo `href=""` el cual indica el enlace o a dónde enlaza.

De esta manera podemos enlazar a:
- Una página interna
- Una página externa
- Un archivo
- Una posición específica dentro de la misma página u otra página.

***Una página interna***

Para realizar un enlace interno debemos contar con el selector único "id", al interior de la etiqueta del elemento que deseamos enlazar  creamos la etiqueta de enlace y hacemos el llamado al objeto por medio del signo # + el nombre del elemento.
```html
<body>
    <div id="examen" class="">
        <h2>Examen</h2>
    </div>

    <a href="#examen"></a>
</body>
```
***Una página externa*** 
```html
 <a href="https://www.google.com/">google</a>
 ```

 ***Enlaces de archivos*** 

 Para llamar a un archivo, escribimos su nombre y su extensión
```html
 <a href="index2.html"></a>
 ```

Al hacer uso de la etiqueta `<a>` podemos incluir otros atributos que debemos conocer:

- title = “ ” : En este atributo podemos añadir un texto complementario que el navegador mostrará en un pequeño tooltip (mensaje de ayuda) cuando pongamos el cursor sobre el enlace. Este tipo de atributo es interesante usar cuando tengamos un enlace del tipo descargar y quiero asociar que lo que se va a descargar es un archivo pdf con el mensaje “Descargar archivo PDF”.

- target = “ ” : En este atributo podemos especificar donde se abre el enlace, si quisiéramos que al darle click al enlace se nos abra en una nueva pestaña utilizaremos el valor _blank.

## Negritas, cursivas
Tradicionalmente se usaban las etiquetas `<b>` y } `<i>` para poner un texto en negrita (bold) o en cursivas o itálicas (italic). Estas etiquetas se mantienen, aunque no tienen carga semántica, no significan nada más allá de que muestran el texto visualmente en negrita o cursiva.
Las nuevas etiquetas, `<strong>` y `<em>`, aunque visualmente hacen lo mismo (strong muestra el texto en negrita y em, en cursiva) sí que tienen una carga semántica, para indicar el nivel de énfasis o de importancia. Con `<em>` resaltar un texto importante, y con `<strong>` resaltar un texto más importante.

## Saltos de línea
Tenemos unas etiquetas que fuerzan un salto de línea: `<br>`. Desde que empezamos a separar el contenido y el diseño esta etiqueta ha quedado relegada a un lugar muy
secundario, pero todavía hay veces en los que vas a querer forzar una línea nueva en mitad de un texto y está bien conocerla.
```html
   <h3>¡Súmate a nuestra Academia <br> de talentos Geek!</h3>
 ```
   <h3>¡Súmate a nuestra Academia <br> de talentos Geek!</h3>
<hr>

## Tablas
Hubo un tiempo en el que las tablas eran la base sobre la que se creaba cualquier página web. Hoy se utilizan para lo que son: presentar datos tabulados.
La tabla básica tiene una estructura bastante simple y tiene tres etiquetas principales:

- una etiqueta que marque que se va a escribir una tabla `<table>` 
- una etiqueta para las filas `<tr>`
- una etiqueta para las celdas `<td>`
```html
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>nombre</th>
            <th>edad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Ana Caro</td>
            <td>23</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Alejandra Lopez</td>
            <td>28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Diego Cardona</td>
            <td>33</td>
        </tr>
    </tbody>
</table>
```
   <table>
    <thead>
        <tr>
            <th>id</th>
            <th>nombre</th>
            <th>edad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Ana Caro</td>
            <td>23</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Alejandra Lopez</td>
            <td>28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Diego Cardona</td>
            <td>33</td>
        </tr>
    </tbody>
</table>

***Ejercicio 1 Organizando la semana***
Hacer una tabla con la comida de cada día de la semana.

## ¿Qué es CSS?
En el desarrollo de un sitio web para otorgar estilos hacemos uso de CSS (“Cascading Style Sheets”) hojas de estilo en cascada, las cuales ayudan a definir la presentación de un documento escrito en un lenguaje de marcado, como lo es HTML.

Una vez creados los contenidos con HTML, se realiza el lenguaje CSS para definir el aspecto de cada elemento: color, tamaño y tipo de letra del texto, separación horizontal y vertical entre elementos. Los estilos están construidos de la siguiente forma:

![css](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_8.png)

***Como dar estilos a un archivo HTML***
1. por medio del atributo style
```html
<body style="background-color: lime;">
```
2. por medio de una etiqueta style en el head
```html
<head>
    <style>
        body{
            background-color:maroon;
            color: white;
            font-size: 30px;
        }
    </style>
</head>
```

3. por medio de un archivo externo
- Crear un archivo style.css, la extensión css permite dar estilos al archivo html
- vincular el archivo style.css con el archivo index.html. Para realizar dicho proceso debemos usar una etiqueta link con los siguientes atributos.
 `rel`= define el tipo de archivo va vincular.
 `href`= ubicación del archivo 

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
en el archivo style.css dar estilos por medio de selectores

```css
    body{
    background-color:maroon;
    color: white;
    font-size: 30px;
    }
```

***_Ejercicio #1_***

Crear una página de mascotas, que permita asignar la raza de un perro y sus características
![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_4.png)

[Ver con Replit](https://replit.com/@SilviaGarcia1/Mascotas#index.html)

***_Ejercicio #2_***

Al ejercicio anterior realizar el mismo procedimiento, pero agregando el css con un archivo externo
[Ver con Replit](https://replit.com/@SilviaGarcia1/Mascotas-1#index.html)

## Selectores de CSS
Los navegadores ofrecen este aspecto por defecto pero nosotros lo podemos cambiar con CSS, creando estilos para definir la apariencia de nuestras página.<br>
Para cambiar el aspecto de un elemento usamos un selector, hay varios tipos de selectores:
1. la propia etiqueta del elemento: `<h1>`, `<p>`, `<a>`...
2. una clase que hayamos incluido con el atributo class="" 
```html
class="nav-link"
```
3. a través de un identificador en el atributo id=""
```html
id="header"
```
4. a través de una pseudo clase, que son unas palabras claves que añadidas al selector que especifican un estado especial del elemento.

5. a través de una mezcla de los anteriores

### Vamos a ver cada uno de los casos.

*** Etiquetas como selector**
Esto no es lo ideal y se aplica los estilos a cada elemento de este tipo que aparezca en la página, así que hay que usarlo con cuidado.<br>
Podemos, por ejemplo, hacer que todos los enlaces `<a>` sean rojos.
```css
    a {
        color: red;
    }
```

***Clases como selectores***

Las clases son palabras claves que atribuimos a elementos HTML para poder agruparlos por función o apariencia y diferenciarlos del resto de elementos de su mismo tipo.<br>
Por ejemplo: La clase "text-link" nos permite aplicar estilos particulares a los enlaces que lleven dicha clase sin afectar al resto de etiquetas.

```html
<a href="#" class="text-link">Enlace de texto</a>
```

En CSS creamos clases para aplicar a estilos a grupos de elementos, La manera de indicar en css que se trata de una clase es escribiendo un `. ` primero:

```css
.text-link {
    color: red;
}
```

***id como selector***
Ya habíamos visto que los id eran una palabra clave que usábamos como identificador para un único elemento. En CSS también los podemos usar como selector, pero al no poder haber más de uno por página.

En una lista de acciones, por ejemplo, podemos tener unas clases para añadir estilos a los elementos del bloque y, además, añadir un identificador único para cada elemento.
```html
<ul class="actions">
  <li class="action">
    <a id="add-user" href="" class="button">Nuevo usuario</a>
  </li>
  <li class="action">
    <a id="rename-user" href="" class="button">Renombrar usuario</a>
  </li>
  <li class="action">
    <a id="delete-user" href="" class="button">Eliminar usuario</a>
  </li>
</ul>
```
Y ahora podríamos usar el id para cambiar el tamaño del texto de uno de los elementos. Para ello, usamos la `#` seguida de la id como selector.

```css
#add-user {
    font-size: 24px;
}
```
***Pseudo clase como selector***

Las pseudo clases son palabras claves que añadidas a alguno de los selectores anteriores especifican un estado concreto del elemento. El más usado es el estado de hover, que ocurre cuando colocamos el ratón encima del elemento.<br>
Las pseudo clases se escriben usando el selector, seguido de `:` y la palabra clave para el estado.

Por ejemplo, como en uno de los ejemplos anteriores, tenemos un enlace que vamos al cual le vamos a poner el texto de color rojo, pero cuando coloques el cursor encima invertiremos los colores y lo mostraremos con fondo blanco y color rojo. Partimos del mismo html que anteriormente.

```html
<a href="#" class="text-link">Enlace de texto</a>
```
Y el css sería:
```css
.text-link {
    color: red;
}
.text-link:hover {
    background-color: red;
    color: white;
}
```

### Algunos estilos css:
- Font-family: Familia de fuente.
- color: Color de letra.
- Font-size: Tamaño de la letra.
- width: Anchura
- height: Altura
- margin-top: Margen superior
- margin-right: Margen derecho
- margin-bottom: Margen inferior
- margin-left: Margen izquierdo
- padding: Relleno 
- border: Anchura del borde superior
- background: fondo
- text-align:permite alinear horizontalmente texto 

[Profundizar en estilos CSS](https://www.eniun.com/que-es-css-cascading-style-sheets/)

[Profundizar en HTML](https://www.eniun.com/html-lenguaje-de-marcas/)
