# Animaciones en CSS

## ¿Qué son las animaciones CSS?
Una animación permite que un elemento cambie gradualmente de un estilo a otro. Adicional permite cambiar las propiedades de CSS  tantas veces como desee

Básicamente una animación CSS se define como el la transición gradual de unos estilos a otros en los elementos del html. Es decir, en el CSS vas a poder definir una animación mediante los estilos de partida y los estilos que quieras al final de la animación, y el navegador se va a encargar de hacer el paso de unos estilos a otros de forma gradual.

Para empezar a crear las animaciones, simplemente crea en el CSS una regla especial llamada keyframes con la regla `@keyframes` y dentro definiremos las distintas posiciones de nuestra animación. La primera será al 0% y la última al 100% (en lugar de 0% y 100% podremos usar from y to):

*Ejemplo 1*
```css
@keyframes intro 
{    
    from { opacity: 0;        
          transform: scale(10) rotate(-150deg);   
          }    
    to {  opacity: 1;        
         transform: scale(1);    
         }
}
```

```css
.elemento {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: Clase;
  animation-duration: 4s;
}
```
​[▸ El resultado en Codepen](https://codepen.io/adalab/pen/qpbwwG)

*Ejemplo 2*
```css
@keyframes Clase {
    0%{
        background-color: palegreen; 
    }
    25%{
        background-color:palevioletred;
    }
    50%{
        background-color:#000;
    }
    75%{
        background-color:rgb(136, 19, 19);
    }
    100%{
        background-color: palegreen;
    }
}
```

En este ejemplo hemos creado una animación llamada ejemplo con `Clase`. En este ejercicio el elemento cambiara de color sugun el grado de ejecución que se encuentre la animación 

Para hacer uso de la animacion debemos invocar la animacion al interior de los estilos de un elemento

```css
.elemento {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: Clase;
  animation-duration: 4s;
}
```

***subpropiedades de las animaciones:***

`animation-delay:` determina el tiempo hasta que empieza la animación <br>
`animation-direction:` especifica si la animación mantendrá la dirección, la alternará en cada repetición, o si la resetea al punto inicial. <br>
`animation-duration:` marca el tiempo que durará la animación. <br>
`animation-iteration-count:` dice las veces que se va a repetir la animación. <br>
`animation-name:` especifica el identificador de la animación. <br>
`animation-play-state:` permite pausar una animación. <br>
`animation-timing-function:` funciona igual que con las transiciones. <br>
`animation-fill-mode:` especifica si los valores de la animación se aplicarán al elemento animado una vez termine o antes de empezar

Vamos a probar una más... [powerpoint​](https://codepen.io/adalab/pen/jYWjVj)<br>
Documentación completa de las sub propiedades de animation en la MDN: [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Ejemplos de animaciones (más o menos curradas)
[​Pure CSS Animated Checkbox​](https://codepen.io/north-of-rapture/pen/rWqega?limit=all&page=2&q=css+animation)<br>
​[CSS Animate (y ha escrito un post sobre cómo se hace)](https://codepen.io/mdd/pen/xEuyG)<br>
[​CSS Animation Material Design​](https://codepen.io/Moiety/pen/EBtga)<br>
[​CSS Animation with steps()​](https://codepen.io/Guilh/pen/yldGp?limit=all&page=4&q=css+animation)<br>
[​Mr JeellyFish pure CSS animation​](https://codepen.io/FabioG/pen/QjLreK)<br>
[​WWDC 2015 CSS​](https://codepen.io/donovanh/pen/pvMeeB)<br>
[​Cloudy Spiral CSS animation](https://codepen.io/hakimel/pen/aIhkf)<br>

## Transforms en CSS
Las transformaciones CSS nos permiten rotar, torcer, escalar o desplazar los elementos de nuestra página web. Este tipo de propiedades de CSS3 son muy interesantes para convertir el lenguaje de hojas de estilo en un sistema capaz de realizar todo tipo de efectos visuales.

***Tipos de transformaciones***

Las transformaciones que podemos aplicar son las siguientes:

`Scale`: modifica el tamaño de los elementos.
`Translate`: cambia la posición del elemento. Izquierda, derecha, arriba o abajo.
`Rotate`: gira o rota los elementos en grados.
`Skew`: distorsiona los elementos según el ángulo en grados.
`Matrix`: mueve o transforma los elementos con precisión de píxel.

[▸ Ver en Codepen](https://codepen.io/Eniun/pen/mddmVWX)

### ¿Cómo se construye una transición?
Las transiciones de especifican con la propiedad transition que es un atajo (shortcut) de:
`transition-property` la propiedad sobre la que queremos aplicar la transición <br>
`transition-duration` la duración de la transición en segundos o milisegundos <br>
`transition-timing-function`: una función de tiempo para determinar cómo aplicar la transición, hay unas palabras clave para algunas funciones.​<br>
`transition-delay:` un tiempo de retardo antes de empezar la transición
No hace falta especificarlas todas y podemos usar el atajo o no. En los ejemplos lo usamos con la propiedad, la función de tiempo y la duración de la transición:

```css
.caja1{
   background-color: #C0392B;
   transition: 1s linear;
 }
 .caja1:hover{
    background-color: #C0334B;
   transform: scale(0.5);
 }
```