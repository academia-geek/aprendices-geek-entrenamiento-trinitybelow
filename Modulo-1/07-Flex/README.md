# Flexbox
Según la MDN, la propiedad Flexible Box, o flexbox, de CSS3 es un modo de diseño que permite colocar los elementos de una página para que se comporten de forma predecible cuando el diseño de la página debe acomodarse a diferentes tamaños de pantalla y diferentes dispositivos.

Hasta que apareció Flexbox la única manera de distribuir elementos en horizontal (por ejemplo: un menú horizontal, o un bloque principal y uno secundario) era calculando el espacio que debe ocupar cada bloque y controlando mucho que ningún elemento se saliese de lo planificado.

Con flexbox podemos disponer de un bloque flexible que de manera natural se ajuste dentro de unos parámetros que le indiquemos.

```html
<div class="container"> <!-- Flex container -->
  <div class="item item-1">1</div> <!-- Flex items -->
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

```css
.container {
  background: #900C3F;
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 40%;
}

.item {
  background: #CACFD2;
  margin:10px;
  padding: 10px;
  width: 20px
}
```

***flex-direction:***
Cambia la orientación del eje principal.
- row
- row-reverse
- column 
- column-reverse

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_31.png)

[Ver en Replit](https://replit.com/@SilviaGarcia1/Flex#style.css)

***FLEX WRAP***
Nos permite especificar el comportamiento del contenedor respecto a evitar que se desborde (nowrap, valor por defecto) o permitir que lo haga, en cuyo caso, estaríamos hablando de un contenedor flexbox multilinea.

***nowrap:***
Establece los ítems en una sola línea (no permite que se desborde el contenedor).

***wrap:***	
Establece los ítems en modo multilínea (permite que se desborde el contenedor).

***wrap-reverse:***	
Establece los ítems en modo multilínea, pero en dirección inversa.

```css
.container {
  background: steelblue;
  display: flex;
  width: 200px;
  flex-wrap: wrap;  /* Comportamiento por defecto: nowrap */
}

.item {
  background: grey;
  width: 50%;
}
```
![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_32.png)

[Ver en Replit](https://replit.com/@SilviaGarcia1/Flex-1#style.css)

### Propiedades de alineación 
***justify-content***	

- flex-start 
- flex-end  
- center  
- space-between  
- space-around  
- space-evenly

![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_33.png)

[Ver en replit](https://replit.com/@SilviaGarcia1/Flex-alineacion#style.css)

***align-content***	

- flex-start 
- flex-end 
- center 
- space-between  
- space-around  
- space-evenly 
- stretch	

***align-items***	

- flex-start 
- flex-end 
- center 
- stretch 
- baseline	

***align-self***

- auto 
- flex-start 
- flex-end  
- center 
- stretch 
- baseline

***justify-content:*** Se utiliza para alinear los ítems del eje principal (por defecto, el horizontal).

***align-items:*** Usada para alinear los ítems del eje secundario (por defecto, el vertical).