# Diseño Responsive

El responsive, o Responsive Web Design (RWD) es un concepto de desarrollo orientado a que los sitios web se vean y comporten correctamente en todos los dispositivos y pantallas.

~~~
NOTA: Responsive no es solo móvil, tablet y escritorio, también es un navegador que ocupe la mitad de la pantalla por alguna razón. Por ejemplo, estamos escribiendo un artículo en nuestro editor de textos y tenemos al lado una web donde consultamos información.
~~~

### Esto se consigue combinando varios enfoques:
- Maquetaremos ciertas zonas usando porcentajes
- Ciertos elementos se ajustarán al tamaño del contenedor hasta un cierto valor, es decir, se comportan como si tuviesen las medidas por porcentajes pero pudiendo marcar tamaños máximos y mínimos
- Usaremos unidades "flexibles" en ciertos casos, como `rem` o `vw` y `vh`. Y claro, el `%`
- Tenemos a nuestra disposición unas expresiones CSS, las mediaqueries, que nos permiten aplicar una serie de reglas cuando en nuestro navegador se cumplen unas condiciones: ancho, alto, resolución, orientación...
- Veremos qué es el viewport y cómo usarlo

[Curso en video de Responsive Design](https://www.youtube.com/playlist?list=PLQCgNGUqLK4mW7LxW3jJdRjCnErL5rszl)


## Imágenes, media y tipografía flexibles

***Imágenes***

En este entorno Responsive las imágenes y videos tienen su forma de afrontarse y aunque ambos formatos podemos dimensionarlos por porcentajes tenemos varios casos en los que la imagen o el vídeo queda demasiado grande o demasiado pequeño. Para ello tenemos unas propiedades que matizan el `width` (ancho) o el `height` (alto):

- max-width
- min-width
- max-height
- min-height

De esta manera no solo podemos definir un ancho/alto en porcentajes sino marcar unos límites.

Por ejemplo: <br>
Quiero que mi imagen se ajuste al 100% del contenedor pero solo hasta un máximo de 600px, controlando de esa manera que se haga demasiado grande.

En maquetación responsive es súper buena idea meter las imágenes de contenido en un contenedor, dar a la imagen un ancho del 100% y usar el contenedor para definir el tamaño que debe tener la imagen. Esto se hace para poder controlar diferentes imágenes cuando no podemos asegurar los tamaños que van a tener sin que nos interfiera con la estructura.

[▸ Ejemplo de imagen "responsive" en Codepen](https://codepen.io/adalab/pen/XxVGQB)

***Vídeos***

Los vídeos son más complicados de controlar porque la etiqueta `<video>`, al contrario que la `<img>` no redimensiona proporcionalmente el video, aunque hay formas de suplirlo ya sea por CSS o tirando de unas librerías en JS.

***Tipografía***

Para el tema de la tipografía hay varias escuelas y formas de afrontarlo según el caso:

- Una es usar unidades fijas como los píxels, e indicarle en cada caso qué tamaño de fuente debe tener cada texto.Por ejemplo: en móvil mi texto básico será de 18px porque la pantalla es más pequeña y quiero que se lea mejor, pero en tablet lo bajo a 16px y en escritorio lo vuelvo a poner a 18px. Aunque en pantallas muy grandes usaré 20px o 24px.

Tenemos unas unidades relativas como los `rem`

***rem:*** es una unidad relativa al tamaño de texto especificado en el elemento raíz de nuestro documento que es el `<html>`. De manera que si el elemento html está a 16px (valor por defecto) `1rem` equivaldrá a esos 16px.

Esto nos ayuda a poder ajustar todas nuestras medidas de forma proporcional solo cambiando el tamaño de fuente de la etiqueta <html>.

[▸ Veamos un ejemplo en Codepen](https://codepen.io/adalab/pen/WadWay) (Prueba a cambiar el tamaño de fuente de la etiqueta html).

¡En el nombre de la diosa frontender! ¿Cómo vamos a calcular los rems que corresponden a nuestros píxels?
Pues con una [calculadora de rem](https://offroadcode.com/rem-calculator/) (por ahora).

***EJERCICIO 1***

*No puedo vivir sin rems*

Partiendo de estos documentos:

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/main.css">
  <title>:)</title>
</head>
<body>
  <div class="smiley">:)</div>
</body>
</html>
```
y main.css
```css
html {
  font-size: 16px;
}
.smiley {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: 'courier new';
  font-weight: bold;
  font-size: 50px;
  color: #424242;
  background: #ffcc00;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
```

1. Pasar las medidas en píxels a rem
2. ¿Qué tamaño de fuente tengo que poner para que mi careto mida 50x50?
3. ¿Y para que mida 200x200?

***Max-width, min-width, max-height, min-height.***

Estas propiedades que permiten "limitar" anchos y altos se pueden aplicar a casi cualquier contenedor (que admita dimensiones, como aquellos con display `block` o `inline-block`) de manera que podamos tener elementos que se dimensionen a base de porcentajes pero sobre los que tengamos un poco de control para que en determinados escenarios no se hagan demasiado pequeños ni demasiado grandes.

*EJERCICIO 2*

Ya vimos en la sesión de flexbox, en este [codepen](https://codepen.io/adalab/pen/LORKzX) tenemos dos columnas, una (`aside`) que ocupa el 50% del ancho hasta 320px y la otra (`main`) que ocupa el resto:

- Tirando con el ratón, redimensionar la ventana del navegador haciéndola tan pequeña como para que las dos columnas ocupen lo mismo
- agrandar hasta que `.aside` se quede en 320px de ancho mientras `.main` ocupa el resto del espacio

## Mediaqueries
![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_46.png)
Las mediaqueries son las instrucciones que nos permiten aplicar una serie de reglas CSS cuando se cumplan una o varias condiciones. Tienen este aspecto:

```css
@media all and (min-width:500px) {
    /* Reglas CSS que aplicaremos */
}
```

En el ejemplo superior le decimos que aplique unos CSS cuando estemos en una ventana de navegador de al menos 500px.

*EJERCICIO*

1. Crea un index.html que contenga:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Viewport Sample</title>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```
```css
.box {
    background: red;
    height: 100px;
}
```
Veremos que el div .box ocupará el ancho disponible y tendrá 100px de alto, y fondo rojo.

2. Añadamos nuestra primera mediaquery: vamos a hacer que por encima de 550px el elemento `.box` tenga fondo azul. Para ello el CSS  quedará así:

```css
.box {
    background: red;
    height: 100px;
}

@media all and (min-width:550px) {
    .box {
        background: blue;
    }
}
```

Si ahora redimensionamos la ventana del navegador veremos que a partir de 550px de ancho nuestro elemento `.box` se vuelve azul.

~~~
NOTA: A cada una de estas medidas que ponemos en los mediaqueries las llamamos breakpoints, o puntos de ruptura.
~~~

3. Abramos ahora las herramientas de desarrollo de Chrome y lancemos el simulador de dispositivos móviles. Probemos varios dispositivos o resoluciones. ¿Qué pasa? ¿Cuándo se vuelve azul? ¿Cuándo se vuelve rojo?

Si no lo tenemos claro los siguientes ejercicios nos va a ayudar a entenderlo mejor.

## Viewport
Aquí es donde entra en juego una etiqueta que la conocíamos por otros motivos pero que ahora tiene un contenido especial: el viewport.

```html 
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Los dispositivos móviles (teléfonos y tablets) utilizan este "viewport" para mostrar la página de una forma curiosa: salvo que se le indique lo contrario intentarán mostrarla al máximo tamaño posible, haciendo suficiente zoom para permitir que las páginas no adaptadas se puedan ver (aunque diminutas) por eso en nuestro ejemplo las mediaqueries no "funcionan".

Con la etiqueta `meta` viewport le decimos a estos dispositivos cómo tienen que comportarse. El ejemplo anterior es el más típico y le dice al viewport de un dispositivo móvil que: 
1. el ancho del viewport debe coincidir con el ancho del dispositvo 
2. la escala inicial siempre será el 100%

*EJERCICIO*

Vamos a añadir al `<head>` de nuestra página el tag meta viewport quedando toda nuestra página así:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Viewport Sample</title>
</head>

<body>
    <div class="box"></div>
</body>
</html>
```
```css
.box {
    background: red;
    height: 100px;
}

@media all and (min-width:550px) {
    .box {
        background: blue;
    }
}
```
¿Qué tal ahora? ¿Si nos vamos a las herramientas de desarrollo, abrimos el simulador y probamos con diferentes dispositivos/anchos? ¿Cambia ahora de rojo a azul?

## Mobile first
Hay varias formas de afrontar la maquetación de un proyecto responsive, la que nos parece más adecuada es mobile first donde se plantean primero los estilos de la vista de móvil y conforme tenemos mayor tamaño de pantalla sobreescribimos o ajustamos los estilos necesarios.

La maquetación mobile first da prioridad a los dispositivos con menos capacidad de pantalla, conexión y batería de manera que, por ejemplo, se cargan imágenes más pequeñas que consumen muchos menos datos o se muestra una maquetación más simple y adaptada a que usemos los dedos como punteros (botones y zonas clicables más grandes). Y si luego resulta que estamos viendo la página en un una pantalla más grande, gracias a las mediaqueries, podemos cargar elementos más pesados, mostrar otros que en móvil pueden no tener sentido y adaptarlo todo a que ya se va a manejar con ratón y/o teclado.

Un ejemplo sería la típica página que tiene una primera sección con una imagen de fondo enorme: con la maquetación mobile first colocaríamos primero un fondo adaptado a una pantalla más pequeña con el consiguiente ahorro en nuestra tarifa de datos. Si alguien la carga desde escritorio, donde suele tener una conexión con tarifa plana, pasaríamos a mostrar una imagen de fondo mucho más grande, acorde a la pantalla que esté usando. Pero nunca obligamos a quien va en el metro a descargarse una imagen descomunal de chopocientos megapíxels en su móvil con una tarifa de datos que se paga con sangre.

En el CSS esto se representa escribiendo primero los CSS que se verán en las pantallas/ventanas de navegador más pequeñas. Posteriormente añadiremos, dentro de mediaqueries, los ajustes necesarios para los tamaños mayores de pantalla o ventana.

~~~
NOTA: Recordemos que responsive no es solo tema de dispositivos. Claro que hay móviles de 320, tablets de 768 y pantallas desde 1336 a 2560 de ancho. Pero responsive también es un tipo en una pantalla más modesta, por ejemplo cuando una usuaria pone el navegador en la mitad de la pantalla mientras trabaja y en la otra mitad pone un reproductor de vídeo porque está enganchada a Juego de Tronos...
~~~