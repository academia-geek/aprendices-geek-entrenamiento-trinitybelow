# Modelo de caja y herramientas
En HTML cada elemento se representa visualmente como una caja, lo podemos ver fácilmente añadiendo un borde a un elemento HTML y viendo cómo lo pinta el navegador.

El modelo de caja es una especificación que define las características específicas de esa caja y como infieren en el resto de elementos de la página; es el que le dice al navegador cómo debe pintar cada caja (elemento).<br>
Antes de entrar en profundidad con los modelos de caja tenemos que ver conceptos básicos (alto, ancho, borde, margen y padding) y las formas básicas de visualización de los elementos HTML.

***Height, width, border, padding y margin***
Cada elemento tiene una altura (height) y anchura (width). Además, puede tener otros atributos relacionados que influyen en su tamaño y su posición, que son el padding, los márgenes y los bordes:
- el borde de un elemento es una línea que puede tener distinto grosor y que encuadra el contenido del elemento
- el padding es la distancia desde el contenido del elemento hasta el borde
- el margen es la distancia desde borde del elemento hasta los elementos que están a su alrededor.

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_13.png)

***Visualización (display)***

La propiedad CSS display, se encarga de definir cómo se va a visualizar un elemento HTML, cómo va a colocarse en la página y cómo se colocarán el resto de elementos respecto a este. Según el valor que tenga asignado display, un elemento puede ocupar el ancho entero de su contenedor, ocupar solo el espacio que necesite para mostrar su contenido, mostrarse como si fuese una casilla de una tabla o directamente ocultarse.
Los navegadores web aplican por defecto un valor display a todos los elementos HTML de nuestra web. Hay muchos valores distintos para display pero, por el momento, nosotros solo veremos cuatro:
1. block
2. inline
3. inline-block
4. none

***Block***

Los elementos en bloque se muestran ocupando el ancho completo de su contenedor
[Elementos en bloque](https://codepen.io/adalab/pen/WXQgrq)

Usando CSS podemos hacer que un elemento que no se muestra en bloque cambie y se muestre de esta manera. Para ello aplicaremos `display: block` en el elemento. De esta forma, si queremos hacer que un elemento con la clase block se muestre en bloque, utilizaremos el siguiente código:
```css
.block {
  display: block;
}
```

***Inline***

Los elementos en línea o inline son aquellos que ocupan el ancho de su contenido. En estos, el tamaño será exactamente el tamaño de su contenido y estos pueden colocarse uno al lado del otro hasta que no quede más espacio restante en la fila.

[Elementos en linea](https://codepen.io/adalab/pen/vWNzLj)

Una regla muy importante que se aplica sobre los elementos en línea es que estos no pueden cambiar su ancho ni su alto, no pueden tener márgenes horizontales y se puede aplicar margen y padding vertical, pero este no se tiene en cuenta a la hora de definir su altura y su posición vertical. Esto los diferencia de los elementos en bloque, que permiten tener un ancho y un alto específico y márgenes y padding tanto vertical como horizontal. Veremos la importancia de esto en esta misma sesión, cuando hablemos del modelo de cajas.

~~~
Nota:
Las imágenes son un tipo especial de elemento en línea que por sus características actúa como una mezcla de elemento en línea y elemento en bloque, ya que pueden tener márgenes y padding verticales y se les pueden asignar un ancho y un alto.
~~~

Usando CSS podemos cambiar la visualización de un elemento para hacer que se muestre en línea
```css
.inline {
  display: inline;
}
```

***inline-block***

En este caso y como su nombre indica, el comportamiento de los elementos inline-block es una mezcla entre el comportamiento de los elementos en línea y los elementos en bloque.

Los elementos inline-block ocupan por defecto el ancho de su contenido y se comportan como si se tratase de una palabra más dentro de un texto, al igual que los elementos en línea, pero permiten tener un ancho, un alto, padding y márgenes verticales, como sucede con los elementos en bloque.

[Elementos inline-block](https://codepen.io/adalab/pen/vWNzLj)

```css
.inline {
  display: inline;
}
```
Usando CSS podemos cambiar la visualización del elemento 

```css
.inline {
  display: inline-block;
}
```

***Elementos ocultos***

A veces queremos que un elemento esté oculto, por ejemplo, el típico mensaje de aviso de cookies que aparece cada vez que entramos en una página. Con JavaScript, haremos que este mensaje se muestre o se oculte dependiendo si hemos visitado antes la página o no, pero desde JavaScript lo que haremos será añadir o quitar una clase CSS, los estilos los gestionaremos siempre desde el CSS.

 ```css
.hidden {
    display: none;
}
```
Este código lo que hace es ocultar por completo cualquier elemento al que le añadamos la clase `hidden`. Será como si ese elemento no existiese ya que no se mostrará, y el resto de elementos de la página lo ignorarán.

Puedes ver un ejemplo en el siguiente Codepen:<br>
[Elementos ocultos](https://codepen.io/adalab/pen/GOpXmw)

Resumen de los elementos del Display en Codepen:<br>
[Elementos inline, inline-block y block en Codepen](https://codepen.io/adalab/pen/QOjVye)

***Ejercicio #1***
Displays

Prepara tres divs con un tamaño de 100x100, cambia sus displays (block, inline, inline-block, none) y observa cómo se comportan.<br>
[Ver en Replit](https://replit.com/@SilviaGarcia1/Displays#style.css)

***Dimensiones y box-sizing***
Una vez vistos los modos principales de visualización podemos entrar al modelo de caja. Recordemos que el modelo de caja es el que le dice al navegador cómo debe pintar cada caja.

Si pensamos en el conjunto global, una página sería como un conjunto de cajas una dentro de otra, por lo tanto, si pensamos en cada elemento a partir de ahora como un rectángulo nos será mucho más fácil visualizar cómo se compone la estructura de una web y cómo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

[Puedes leer una explicación más completa sobre el modelo de caja en la documentación de la MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

[Ejemplo de modelo de caja en Codepen](https://codepen.io/adalab/pen/qoJNyN)

Si quisiéramos cambiar el modelo de caja para todos los elementos podemos usar el selector *, que modifica todos los elementos de la página, y por lo tanto debemos de usarlo con mucho tiento.

```css
* {
  box-sizing: border-box
 }
```

***Ejercicio #2 Ajustando imágenes***
Hacer un div de 100x100px usando las propiedades width y height, incluir dentro una imagen de 100x100px y probar:<br>
- Añadir un padding de 10px
- Añadir un borde de 5px
- Cambiar el modelo de caja a border-box y explica qué ha pasado
- Centrar la caja utilizando el valor auto en los margenes horizontales.

[Ver en Replit](https://replit.com/@SilviaGarcia1/modelo-caja#style.css)


***Ejercicio #3 Equipo corchángulo*** 

Nos vamos de hackaton, y la página con los detalles de nuestro equipo está sin terminar. La maquetadora la ha dejado preparada a falta de descomentar algunas líneas. Mira el [Codepen](https://codepen.io/adalab/pen/LrPbmb?editors=1100) que ha preparado y descomenta y comenta las líneas de CSS para ver cómo se comportan los elementos.


## DevTools
El inspector es una de las muchas herramientas de desarrollo que incluye el navegador web Google Chrome. Este grupo de herramientas recibe el nombre de Chrome DevTools.

***¿Cómo lo abrimos?***
Para abrir el inspector tenemos varias opciones:
Pulsando en el menú de tres botones de la derecha superior de Chrome > más herramientas > herramientas para desarrolladores
Usar `Ctrl+Shift+I` en Ubuntu o Windows y `Cmd+Opción+I` en Mac.<br>
Pulsar con el botón derecho sobre un elemento de nuestra página y seleccionar la opción Inspeccionar<br>
Si queremos cerrarlo...<br>
Pulsamos en la cruz que aparece en la esquina superior derecha del panel
Usamos `Ctrl++ShiftI` en Ubuntu o Windows y `Cmd+Opción+I` en Mac de nuevo.

***¿Para qué nos sirve?***

Dado que nos permite controlar qué está pasando con una web, podemos ver los recursos que se están cargando y cuáles fallan. Nos permite ver el código tanto de nuestra página, para ver si está funcionando correctamente, como de otras, para ver cómo aplican ciertas técnicas o coger inspiración.

Por otro lado, nos permite investigar qué cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma más rápida y sencilla los errores de nuestro código.
Por ejemplo, podemos ver información del modelo de caja.

## Colores
Para empezar, vamos a ver los distintos formatos que podemos usar para indicar colores, que podemos usar por ejemplo como valor de nuestro querida propiedad CSS color.

***Colores con palabras clave***
La primera forma de indicar un color es mediante la palabra clave que indica el nombre del color. Hay un montón de palabras clave para colores que podemos usar que podéis ver en la tabla de este artículo.
```css
p {
  color: fuchsia;
}
```
***Colores en hexadecimal***

De forma equivalente a las palabras clave, podemos expresar un color con formato hexadecimal. En este formato declaramos un color con una almohadilla # y sus 3 componentes RGB - R (rojo), G (verde), B (azul). Cada uno de los componentes se representa con 2 dígitos en hexadecimal, es decir, cada dígito puede tener 16 valores, entre 0 - 9 y A - F. Por ejemplo, el color fucsia se compone de una componente máxima de rojo (ff), nada de verde (00) y máxima de azul (ff).
```css
p {
  color: #ff00ff;
}
```

Suele ser habitual expresar algunos colores comunes de forma simplificada. Si los dígitos de cada componente son iguales (por ejemplo, ff) puede escribirse el color de una forma simplificada escribiendo sólo una vez el dígito repetido. Por ejemplo, el fucsia puede simplificarse porque todos los componentes tienen el dígito repetido.

```css
p {
  color: #f0f;
}
```
***rgb y rgba***

Como hemos visto en el caso anterior, los colores podemos expresarlos con sus componentes RGB (Red, Green, Blue)

En CSS existe la posibilidad de, en lugar de usar 2 dígitos hexadecimales, expresar el color usando el valor decimal (número normal) de cada componente RGB, que tendrá un valor entre 0 y 255 (los mismos valores que podíamos indicar con 2 dígitos hexadecimales).

```css
p {
  color: rgb(255, 0, 255);
}
```

Existe además la posibilidad de indicar un nivel de opacidad al color con el formato RGBA que añade el canal alpha o transparencia. Este último componente tiene valores decimales entre 0 (totalmente transparente) y 1 (totalmente opaco).
```css
p {
  color: rgba(255, 0, 255, 0.7);
}
```

***hsl y hsla***
Igual que el RGB nos permite expresar colores a partir de sus componentes de color rojo/verde/azul, existe otro sistema, HSL, que nos permite expresarlos a través de H (hue - matiz), S (saturation - saturación), L (lightness - luminosidad). El matiz se expresa con un valor numérico y tanto saturación como luminosidad con un valor en %. En este caso, también existe la posibilidad de añadir un canal alpha para indicar transparencia.
```css
p {
  color: hsl(300, 100%, 50%)
}
```
```css
p {
  color: hsl(300, 100%, 50%, 0.7)
}
```
Para más información, consultad la [guía de colores deMDN](https://devdocs.io/css/color_value).


## Background
Una vez entendido que cada elemento se puede ver como una caja, veamos cómo añadir un fondo a dicha "caja":<br>
Gracias a la propiedad background podemos rellenar el fondo de nuestro contenedor con una imagen, con un color, o ambos:

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_14.png)

***Caracteristicas del Background:***

- background-color [Ver detalle](https://devdocs.io/css/background-color)
- background-image [Ver detalle](https://devdocs.io/css/background-image)
- background-position [Ver detalle](https://devdocs.io/css/background-position)
- background-size [Ver detalle](https://devdocs.io/css/background-size)
- background-repeat [Ver detalle](https://devdocs.io/css/background-repeat)
- background-origin [Ver detalle](https://devdocs.io/css/background-origin)
- background-attachment [Ver detalle](https://devdocs.io/css/background-attachment)

```css
.box {
    background-image: url('https://fillmurray.com/150/150');
    background-position: left top;
    background-repeat: no-repeat;
}
```

***Background-size***
existen dos valores especialmente interesantes que permiten definir cómo se ajustará nuestra imagen de fondo al contenedor: contain y cover. 

**Contain:** Aumenta o reduce la imagen proporcionalmente todo lo que pueda sin deformarla para que quepa en nuestro contenedor.

**Cover:** Aumenta o reduce la imagen proporcionalmente para asegurarse que siempre cubre todo el área de nuestro contenedor, aunque eso signifique que parte de la imagen pueda quedar oculta.

## Usando fuentes de Google Fonts

Para utilizar fuentes tipográficas de un sitio externo como Google Fonts, tenemos que seguir 2 sencillos pasos: 

1. Añadir una etiqueta link a nuestro head con un enlace que cargue la fuente
``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">
```
2. Usar esta fuente desde nuestro CSS al componente que queremos agregar el tipo de fuente
```css
p{
  font-family: 'Font Name', serif;
}
```
