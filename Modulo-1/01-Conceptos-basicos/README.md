 
# Cómo funciona la web
Internet es algo que utilizamos de forma cotidiana ya sea para consultar información, hacer una reserva, comprar entradas, entre otros. ¿Y cómo funciona por dentro? Pues al final de todo son dos ordenadores que se comunican, uno hace de cliente y el otro de servidor.

La respuesta corta a ***cómo funciona Internet*** es que funciona conectando dos ordenadores, un servidor y un cliente. <br>

***El servidor*** es un ordenador permanentemente encendido y que contiene una cantidad de información. <br>

***El cliente*** es nuestro ordenador o dispositivo (tablet/móvil/etc…) y desde él nos conectamos al servidor para acceder a la información que estamos buscando. <br>

La respuesta más fácil es que Internet es una red de ordenadores conectados. Estos ordenadores se llaman servidores y, entre todos, tienen almacenada toda la información y archivos disponibles (documentos, música, películas…). A estos ordenadores se les llama servidores y dentro de esta red, cada ordenador está localizado por un conjunto de números que se llama dirección IP, formado por cuatro números separados por puntos, por ejemplo:

>216.58.211.206

 tenemos otro tipo de ordenadores que se ocupan de asociar una dirección IP con una dirección un dominio, a estos los llamamos ***servidores DNS***

 >google.es

## Cómo se conecta todo esto
Cuándo escribimos una dirección web en el navegador (Chrome, Firefox, Edge, Safari...) como por ejemplo google.es, pasan varias cosas:

Nuestro cliente, a través de nuestro proveedor, se conecta con un servidor DNS y pregunta cuál es la IP para el dominio google.es.

El servidor DNS responde con la IP asociada a ese dominio (en este caso 216.58.211.206).

Nuestro cliente se conecta con el servidor que tiene esa IP.

El servidor responde con la información necesaria para mostrar en el navegador la página de Google.

~~~
Práctica:
Escribir en un navegador la dirección IP 216.58.211.206
~~~

# Primeros pasos en HTML y CSS

## Herramientas para desarrollar en la web
Cuando desarrollamos páginas o aplicaciones web hay dos herramientas básicas que forman parte de nuestro día a día: el editor de código y el navegador web. Durante el curso de Academia Geek vamos a trabajar con el editor Code y con el navegador Chrome. A lo largo de las lecciones iremos viendo información valiosa para sacarle el mayor partido a ambos.

## Organizando proyecto en carpetas
Un valor agregado en un desarrollador es la organización. Normalmente solemos hacer montones de proyectos, algunos grandes y que requieren tiempo, otros pequeños que nos llevan unos minutos, como pruebas de conceptos o ejercicios para probar una nueva herramienta. Lo ideal es tener una carpeta en nuestro ordenador para tenerlos localizados y organizados.

***Estructura de trabajo***
```ruby
/project-folder
 │
 ├── images
 │    └── background.jpg
 │
 ├── scripts
 │
 ├── styles
 │   └── main.css
 │
 └── index.html
```

***_Recomendaciones: _***

- Los nombres de archivo irán siempre en minúsculas, sin tildes, sin espacios y sin caracteres especiales.
- Usaremos guiones para separar palabras 
- Los nombres de archivo siempre en inglés 
- El archivo de estilos principal se llamará style.css, o main.css
- El archivo HTML principal se llamará index.html

![Estructura](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_1.png)

## Creando un proyecto
Vamos a ver los pasos básicos para empezar a trabajar en un proyecto sencillo de html: 
1. Tenemos que crear una nueva carpeta de trabajo.
2. Abrir la carpeta con el editor de texto.
3. Crear la estructura de trabajo (images/, script/,css/).
4. Crear el archivo principal para la página web index.html.
5. Al dar click derecho sobre el archivo index.html, dar abrir archivo y escoger el navegar (Chrome).
6. En el editor de texto podemos guardar con Ctrl+S.
7. Comprobando que los cambios se reflejan en el navegador, yendo a este y pulsando Ctrl+R para refrescar la página.


### EJERCICIO 1
***Mi primer 'Hola Mundo'***
1. Vamos a crear nuestro primer proyecto siguiendo los pasos recomendados.
2. Cuando lleguemos al paso 5, copiaremos el siguiente código en el archivo index.html.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academa Geek</title>
</head>
<body>
    <h1>Hola mundo</h1>
</body>
</html>
```
[Ver en Replit](https://replit.com/@SilviaGarcia1/HolaMundo#index.html)

con el Snippet ***_html:5_*** podemos escribir la estructura básica de html más raipo, ya que los snippet son plantillas que facilitan la introducción de patrones de
códigos repetidos.

~~~
Nota: Observa como cuando realizas algún cambio sobre un archivo en Code, en la pestaña superior del archivo, 
junto al nombre, aparece una bolita, esta nos indica que hay cambios sin guardar. Como consejo nunca deberías pasar 
mucho tiempo sin guardar los cambios realizados sobre un archivo.
~~~

## HTML
- HTML es un “Lenguaje de marcado de hipertexto”, se encarga de definir la estructura de un sitio web y define los elementos que van a existir en nuestra página.
- HTML es un lenguaje basado en etiquetas: las etiquetas son los elementos fundamentales de HTML. Se componen de los caracteres. <,> y /. La mayoría de las etiquetas tienen etiqueta de inicio y etiqueta de cierre, se diferencian por que la etiqueta de cierre contiene el carácter / antes del nombre.
Ejemplo: 
  ```html
    <html></html> <body></body> <p></p> 
  ```

Las etiquetas de apertura pueden incluir unos modificadores que se llaman atributos y que modifican el comportamiento por defecto del elemento o aportan información extra:
Con el atributo "lang" indicamos que este párrafo está en español:           

***¿Qué es una etiqueta HTML?***
Las etiquetas HTML nos permiten estructurar nuestro website, cada una tiene características y usos diferentes. Adicional son instrucciones que se le asignan al navegador web para obtener un contenido deseado.
Se dividen en:

```html
 <h1> ...Contenido... </h1>
 <h1>  --> Apertura de la etiqueta;
 Contenido --> Texto para visualizar en el navegador
 </h1> --> Cierre de la etiqueta
```
***Atributos:*** Los atributos permiten agregar características extras a las etiquetas
```html
<div id="" class="" style="" title="">
```

![atributo](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_2.png)

## ¿Cómo crear una página web?

***DOM***
Document Object Model es una estructura de árbol que representarán todos nuestros proyectos web. 

![DOM](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_3.png)

***_Paso a paso_***

Una página web empieza con una etiqueta que indica que es una página HTML, <html>. Dentro va una cabecera o <head> (donde se definen aspectos relativos al contenido, metainformación como el título, descripción o palabras claves) y un cuerpo o <body> (donde incluiremos el contenido de nuestra página).
Una página HTML con cabecera y cuerpo:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>

    <body>
    </body>
</html>
```
Justo antes de la etiqueta <html> se debe añadir una etiqueta especial que indica qué tipo de documento HTML es: `DOCTYPE`.

En el <head> de la página se incluye una etiqueta <meta charset="utf-8"> indicando al navegador qué juego de caracteres hemos usado al guardar el archivo.

```html
<!DOCTYPE html> <!-- Estándar de HTML5 -->
<html lang="es"> <!-- Etiqueta raiz con el atributo de lenguaje -->

<head> <!-- Define la cabecera de la página -->

    <!-- Información técnica para navegador-->
    <meta charset="UTF-8"> <!--Catacteres especiales  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive -->
    <title>Academa Geek</title><!-- Título de la pestaña del navegador -->
</head>

<body>
  <!-- Contenido de la página -->
    <h1>Hola mundo</h1>
</body>
</html>
```

## Etiquetas Básicas

### Títulos o encabezados
Se indican con las etiquetas `<h1> a <h6>`, de más relevancia a menos.
```html
<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
<h4>Encabezado de nivel 4</h4>
<h5>Encabezado de nivel 5</h5>
<h6>Encabezado de nivel 6</h6>
```

<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
<h4>Encabezado de nivel 4</h4>
<h5>Encabezado de nivel 5</h5>
<h6>Encabezado de nivel 6</h6>
<hr/>

### Párrafo:
Con la etiqueta `<p>` definiremos una etiqueta del tipo párrafo e indicaremos que su contenido va a ser un párrafo de texto.

```html
<p>Sabemos que tienes talento, por eso queremos que te sumes a nuestra academia </p>
```
### Lista de elementos
En algún momento vamos a necesitar añadir una serie de elementos e indicar que están relacionados: tenemos las listas ordenadas `<ol>` y las desordenadas `<ul>`. En ambas usamos `<li>` para marcar un elemento de la lista.
```html
<ol>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ol>

<ul>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ul>
```
Lista ordenanda
<ol>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ol>
Lista desordenada
<ul>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ul>

### Imágenes:
Con la etiqueta `<img src="" alt="" title=""/>` representa a una imagen, algunos formatos validos son:
1. jpeg
2. gif
3. png
4. apng
5. svg


