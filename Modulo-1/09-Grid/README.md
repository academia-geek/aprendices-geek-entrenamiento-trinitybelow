# Sistema de Grid

Un sistema de grid o rejilla, nos permite disponer los elementos de una página y que estén alineados. Va a existir una rejilla imaginaria de filas y columnas, a partir de la cual vamos a colocar los elementos de nuestra web. El uso de un sistema de grid tiene sentido si acompaña un diseño que usa también una rejilla.

## 

## CSS grid
CSS grid es una nueva característica de CSS que permite tener un sistema de grid de forma nativa en CSS. Es una herramienta compleja, así que vamos a ver las bases de cómo poder usarla.
En primer lugar, existen 2 tipos de elementos, el contenedor del grid y los elementos del grid. En este sentido, es similar a algo que ya conocemos: flexbox.
Para comenzar, usaremos en el contenedor la propiedad `display:grid` y definiremos las filas y columnas de nuestro grid con `grid-template`. 

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_42.png)

***Contenedor*** El elemento padre contenedor que definirá la cuadrícula o rejilla.<br>
***Ítem*** Cada uno de los hijos que contiene la cuadrícula (elemento contenedor).<br>
***Celda*** (grid cell): Cada uno de los cuadritos (unidad mínima) de la cuadrícula.<br>
***Area*** (grid area): Región o conjunto de celdas de la cuadrícula.<br>
***Banda*** (grid track): Banda horizontal o vertical de celdas de la cuadrícula.<br>
***Línea*** (grid line): Separador horizontal o vertical de las celdas de la cuadrícula.<br>

```html
<div class="wrapper">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>
```
```css
.wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 200px 40px;
}
.item{
  background: deeppink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
Ver el ejercicio en [codepen](https://codepen.io/adalab/pen/JMXwbL?editors=1100)

En este grid vamos a tener 4 columnas, cada una de tamaño `1fr`, que es una medida sobre el espacio disponible (free space). Por tanto, se divide el espacio disponible en 4 partes para las columnas. Para las filas, tendremos 3 de 40, 200 y 40px respectivamente.
A continuación, indicaremos a los elementos si queremos que ocupen una o varias filas o columnas con las propiedades `grid-column` y `grid-row`.

```css
.item1 {
    grid-column-start: 1;
    grid-column-end: 4;
}
```
Esto indica que se expande desde la primera línea de grid hasta la cuarta, es decir, ocupa las 3 primeras columnas.

Podemos escribir lo anterior de una forma simplificada:

```css
.item1 {
    grid-column: 1 / 4;
}
```

Para las filas funciona exactamente igual:

```css
.item3 {
    grid-row-start: 2;
    grid-row-end: 4;
}
```

[▸ Ejemplo en codepen](https://codepen.io/adalab/pen/YLEYxg?editors=1100) de` grid-auto-rows`

Y lo podemos usar junto con` grid-auto-flow`, que fuerza una única dirección (columna o fila) para nuestra rejilla :)

[▸ Ejemplo en Codepen](https://codepen.io/adalab/pen/zjPpma) de `grid-auto-columns` con `grid-auto-flow`

Con estas propiedades ya podemos empezar a controlar un poco el comportamiento de nuestra rellija. Para completar un poco esta introducción a grid faltaría ver la posibilidad de definir áreas con nombres más cercanos al humano:

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_43.png)

El grid que hay debajo es de 2x3, y para definirlo usaríamos:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```

pero si queremos "nombrar los espacios" podemos usar, además, grid-template-areas:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "header header" "main aside" "footer footer"
}
```

De esta manera creamos un área completa asignando a dos el mismo nombre, como el header o el footer.

Si ahora quisiésemos que un elemento en concreto se colocase en una de estas áreas, solo tendríamos que decírselo:

```css
.item--1 {
  grid-area: main;
}
```

## Recursos externos

[Frontazo - pensando en grid](https://vimeo.com/98141102)
[Learn CSS grid](https://learncssgrid.com/)