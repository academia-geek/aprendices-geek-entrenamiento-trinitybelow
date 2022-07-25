# Unidades y Posicionamiento

### Unidades

En la lección anterior vimos los píxels `px`, unidades absolutas, cuyo tamaño no varía. Un píxel siempre es un píxel. Veamos algunas unidades más.

### Unidades relativas al viewport

El viewport es la zona visible en una web. Mide `100vw` de ancho y `100vh` de alto siempre, en la pantalla pequeña de un móvil o en la grande de un portátil.
Las unidades vw y vh nos permiten ajustar ancho y alto de manera relativa al viewport.

```css
.wrapper {
    height: 100vh;
    width: 60vw;
}
```

### Unidad de porcentaje

La unidad de `%` nos permite ajustar tamaños para que sean un porcentaje del tamaño de su etiqueta madre.

```css
.hero {
    height: 33.3%;
}
```

### Tamaños mínimos y máximos

Con `max-width`, `min-width`, `max-height` y `min-height` podemos controlar los tamaños del elemento para que sean fluidos, y se comporten como nosotras queremos frente a diferentes tamaños de ventanas del navegador.

```css
.box {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
}
```

Existen dos recursos fundamentales para modificar la apariencia de nuestra web:
visualización (o display) y posicionamiento. Ambos permiten modificar cómo se muestran los elementos de la página ya sea modificando su tamaño, su posición o ambos a la vez.

Así estos elementos nos sirven para saber las diferentes opciones que tenemos de colocar los elementos según el diseño que nos manden.

Los vamos a utilizar cuando tengamos que darle un aspecto determinado al contenido, es decir, siempre. Algunos casos concretos son:
- Un listado de elementos distribuidos por columnas.
- El típico módulo que lleva el corazón de "like" en una esquina.
- Una galería donde las flechas de anterior/siguiente estén, una cada lado, y
centradas verticalmente.
- El típico módulo de precios "desde $ 5.000 al mes" donde el diseñador ha
desplegado toda su creatividad compositiva con un diseño con elementos a diferentes tamaños.
- El menú que se mantiene en la parte superior del navegador al hacer scroll.
- El menú que aparece por uno de los laterales.

### Unidades CSS:

***Unidades Absolutas***

Las unidades absolutas son un tipo de medida fija que no cambia, que no depende de ningún otro factor. son unidades poco adecuadas para la web, ya que no tienen la capacidad de adaptarse a diferentes resoluciones o pantallas, que es lo que tendemos a hacer hoy en día.

| Unidad | Significado|
|--------|------------|
|   px   |    Píxel   |

***Unidades relativas***

Las unidades relativas son un tipo de medida mucho más potente y habitual en el CSS que creamos generalmente. Al contrario que las unidades absolutas, las unidades relativas dependen de algún otro factor (resolución, tamaño de letra, etc...).

| Unidad | Significado                                                           |
|--------|-----------------------------------------------------------------------|
|   em   |Se redimension segun el tamaño de la etiqueta padre                    |
|   ex   |    Altura x de la fuente del elemento.                                |
|   ch   |  La medida de avance (ancho) del glifo "0" de la letra del elemento.  |
|  rem   | Tamaño de la letra del elemento raíz.>                                |
|  vw    | 1% del ancho de la ventana gráfica.                                   |
|   vh   | 1% de la altura de la ventana gráfica.                                |
|   %    | Porcentaje                                                            |
                                                                             

### Visualización (display):
La propiedad CSS display, se encarga de definir cómo se va a visualizar un elemento HTML, como va a colocarse en la página y cómo se colocarán el resto de elementos respecto a este.

Los navegadores web aplican por defecto un valor display a todos los elementos HTML de nuestra web. Hay muchos valores distintos para display pero, por el momento, nosotros solo veremos cuatro:

- ***Block:*** Los elementos en bloque se muestran ocupando el ancho completo de su
contenedor. Los elementos en bloque siempre empiezan en una nueva línea y
nunca van a tener más elementos a su misma altura dentro del mismo contenedor,
estarán más arriba o más abajo. Se les puede aplicar margin, padding, alto y ancho.
- ***Inline:*** Los elementos en línea o inline son aquellos que ocupan lo que ocupa su
contenido. En estos, el tamaño será exactamente el tamaño de su contenido y no
podremos asignarle un tamaño diferente, ni tendrá efecto un margin vertical.
- ***Inline-block:*** Los elementos inline-block ocupan por defecto el ancho de su
contenido y se comportan como si se tratase de un elemento en línea, pero
permiten tener un ancho, un alto y relleno y márgenes verticales, como sucede con
los elementos en bloque.
- ***None:*** Oculta por completo cualquier elemento al que se lo apliquemos, será como
si ese elemento no existiese ya que no se mostrará y el resto de elementos de la
página lo ignorarán.

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_22.png)

### Posicionamiento
La propiedad position de CSS será la que nos permita modificar la forma en la que se
distribuyen los objetos a través de una página web.

El atributo position es fundamental en las webs actuales porque sin él todo el contenido sería lineal, es decir, no podríamos tener ciertas superposiciones y no podríamos sacar a un elemento del flujo de la página para que el resto de elementos (contenedor y elementos hermanos) no lo tengan en cuenta y lo ignoren.

***La propiedad position tiene cuatro valores posibles:***
- ***static:*** Es el tipo de posición por defecto en todos los elementos HTML.
- ***relative:*** Permite modificar la posición de un elemento en función de su posición
actual en la página.
- ***absolute:*** Saca al elemento del flujo de la página, es decir, hace que su contenedor y los elementos de antes y después no lo tengan en cuenta a la hora de
posicionarse y definir su tamaño y por otro lado posiciona el elemento en función
de la posición del body o en su defecto del primer elemento contenedor que tenga
una posición diferente a static (posición por defecto).
- ***fixed:*** Saca a un elemento del flujo normal de la página y permite posicionarlo en función de la ventana del navegador. Aparte, este tipo de elementos mantienen su posición cuando hacemos scroll en la página (como si se mantuvieran anclados en un mismo punto), de ahí su nombre fixed (fijo).
Como hemos visto, cuando posicionamos una caja con cualquier valor que no sea static y modificamos su posición horizontal y/o vertical (top, right, bottom, left) esta se puede

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_23.png)

***Overflow***

Por defecto, nuestros contenedores tomarán el tamaño del contenido pero desde el momento en que definimos un tamaño para el contenedor puede pasar que el contenido no quepa ¿Y entonces, qué?<br>
Pueden pasar dos cosas, que el contenido se pueda adaptar, como pasa con el texto o que el contenido simplemente se salga de nuestro contenedor (también puede pasar con el texto):

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_24.png)

[▸ Mira este ejemplo en Codepen](https://codepen.io/adalab/pen/WzLBwq)

***Propiedades:***
- overflow: visible
- overflow: hidden
- overflow: scroll
- overflow: auto
- overflow: inherit

Podemos controlar cómo se comporta un contenedor en los casos en que el contenido se salga, tenemos 3 opciones:
- No hacer nada y lidiar con las consecuencias
- Ocultar todo lo que se salga
- Incluir scroll en el contenedor

[▸Leer más sobre la propiedad overflow](https://devdocs.io/css/overflow)

[Ver en replit overflow - Float](https://replit.com/@SilviaGarcia1/Float-overflow#style.css)

***Ejercicio #1 Todo en su caja***

Con la información clase, ¿sabrías resolver los casos de este [Codepen](https://codepen.io/adalab/pen/KobLGM)?