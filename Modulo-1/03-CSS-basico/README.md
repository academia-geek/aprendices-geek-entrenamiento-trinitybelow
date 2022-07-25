# Profundizando CSS 

### Herencia
La herencia en CSS es el mecanismo mediante el cual determinadas propiedades de un elemento padre se transmiten a sus hijos. De hecho, se parece mucho a la herencia genética. Si los progenitores tienen los ojos azules, los hijos seguramente también tendrán los ojos azules.

No todas las propiedades CSS son heredadas, porque algunas de ellas no tendría sentido que lo fueran. Por ejemplo, los márgenes no se heredan porque es poco probable que un elemento hijo necesite los mismos márgenes que su padre.

```html
<h1>Título</h1>
<p>Un párrafo de texto</p>
```

```css
html {
   font-style: normal;
   font-variant: normal;
   font-weight: normal;
   font-size: 75%;
   line-height: normal;
   font-family: Verdana,sans-serif;
   background-color: lightcyan;
   color:white;
}
```
[ver en Replit](https://replit.com/@SilviaGarcia1/Herencia#index.html)

El valor que se hereda no es el valor especificado, es decir, el valor que escribimos en la hoja de estilo, sino algo que se llama el valor computado. El valor computado es, en el caso del tamaño de la fuente, un valor absoluto medido en píxeles. Para el elemento html, que no tiene un elemento padre del cual heredar, un porcentaje del valor de tamaño de fuente se asocia al tamaño de fuente predeterminada del navegador. La mayoría de los navegadores actuales tienen un tamaño de fuente predeterminada de 16 píxeles. El 75% de 16 son 12, de manera que el valor computado del tamaño de la fuente del elemento html será probablemente 12 píxeles. Este es el valor que hereda body y que se transmite al título y al párrafo.

### Cascada
CSS significa cascading style sheets (hojas de estilo en cascada) y, por lo tanto, no debería extrañarnos que la cascada sea un concepto importante. Es el mecanismo que controla el resultado final cuando se aplican varias declaraciones CSS contrapuestas al mismo elemento.

Hay tres conceptos principales que controlan el orden en el que se aplican las declaraciones de CSS:

1. Importancia.
2. Especificidad.
3. Orden en las fuentes.

***Importancia***
La importancia de una declaración de CSS depende de dónde se ha especificado. Las declaraciones contrapuestas se aplicarán en el orden siguiente: las nuevas anularán a las más antiguas.

1. Hoja de estilos de agente de usuario.
2. Declaraciones normales en hojas de estilo de usuario.
3. Declaraciones normales en hojas de estilo de autor.
4. Declaraciones importantes en hojas de estilo de autor.
5. Declaraciones importantes en hojas de estilo de usuario.

*Una hoja de estilos de agente de usuario* es la hoja de estilo integrada del navegador. Cada navegador tiene sus propias reglas sobre cómo mostrar varios elementos de HTML si el usuario o diseñador de la página no especifica ningún estilo

*Una hoja de estilos de usuario* es una hoja de estilo que ha especificado el usuario.

*declaraciones importantes*, que son las declaraciones que van seguidas de una directiva `!important`.

En este caso, independientemente de lo que haya especificado el diseñador, e independientemente de aquello que se haya establecido como familia de fuentes predeterminada del navegador, todo se mostrará con Comic Sans MS por la indicacion de `!important`.

```css
* {
   font-family: "Comic Sans MS" !important;
}
```

***Especificidad***
MDN lo explica muy bien (como siempre):

>"La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados."

Esto significa que la especificidad de CSS es un conjunto de reglas usadas por los navegadores para determinar cuál de los estilos definidos por el desarrollador se aplicará a un elemento específico.

jerarquía de estilos:
1. Estilos inline, es la mas importante por su asignación directamente en el HTML. Pero esta asignación de estilos no es recomendada.

```html
<h3 style='color: red'>Hello World</h3>
```
2. Selectores de ID

 ```html
 <h3 id="sub-header">Hello World</h3>
 ```
 3. Clases, atributos y pseudo-clases
  ```html
 <!-- Class Selector -->
<h3 class="hello-header">Hello World!</h3>
 
<!-- Attribute Selector -->
<a href="https://webdesign.tutsplus.com">Web Design Tutorial</a>

<!-- Pseudo Class Selector -->
<button>Delete</button>
 ```

 ```css
 .hello-header { color: blue }

 a[href="https://webdesign.tutsplus.com"] { color: green }

 button:hover { background-color: blue }
 ```

***Orden en las fuentes***
Si dos declaraciones afectan al mismo elemento, tienen la misma importancia y la misma especificidad, la señal distintiva final es el orden en las fuentes.La declaración de estilos que se observará en el navegador será la declaración que este de ultima en las hojas de estilo.


### Border CSS
Las propiedades del borde CSS le permiten especificar el estilo, el ancho y el color del borde de un elemento.

Se permiten los siguientes valores:

- `dotted` <br>
- `dashed` <br>
- `solid`  <br>
- `double` <br>
- `groove` <br>
- `ridge`  <br>
- `inset`  <br>
- `outset` <br>
- `none`   <br>
- `hidden` <br>

[Ver en Replit](https://replit.com/@SilviaGarcia1/Border#style.css)

```html
<h2>Ejemplo</h2>
<div>Border</div>
```
```css
div{
  border: 4px outset rebeccapurple;
}
```
[Leer más información en MDN](https://developer.mozilla.org/es/docs/Web/CSS/border-style)

### Variables CSS

Las variables CSS tienen acceso al DOM, lo que significa que puede crear variables con alcance local o global, cambiar las variables con JavaScript y cambiar las variables en función de las consultas de medios.

Una buena forma de utilizar variables CSS es cuando se trata de los colores de su diseño. En lugar de copiar y pegar los mismos colores una y otra vez, puede colocarlos en variables.

**Sintaxis:**
- `:root`- Variable global
- `var(--blue)` insertar el valor

```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

```

## Pseudoclases :
Las pseudoclases se utilizan para dar estilos a elementos respecto al comportamiento que experimentan en determinado momento.

Enlaces:
`:link`	Aplica estilos cuando el enlace no ha sido visitado todavía.
`:visited`	Aplica estilos cuando el enlace ha sido visitado anteriormente.

```css 
a:link {
  color: green;
  font-weight: bold
}
```
Maouse:
:hover	Aplica estilos cuando pasamos el ratón sobre un elemento.
:active	Aplica estilos cuando estamos pulsando sobre el elemento.

```css 
/* Usuario mueve el mause sobre un <div> y resalta todos los enlaces que contiene */
div:hover  {
  background-color: steelblue;
  color: white;
}
```
***Validación***

Con estas validaciones podemos asegurarnos de que el usuario escribe en un campo de un formulario el valor esperado que debería. Existen algunas pseudoclases útiles para las validaciones, como por ejemplo las siguientes:

`:required`	Cuando el campo es obligatorio, o sea, tiene el atributo required. <br>
`:optional`	Cuando el campo es opcional (por defecto, todos los campos). <br>
`:invalid`	Cuando los campos no cumplen la validación HTML5. <br>
`:valid`	Cuando los campos cumplen la validación HTML5. <br>
`:out-of-range`	Cuando los campos numéricos están fuera del rango.<br>
`:in-range`	Cuando los campos numéricos están dentro del rango.<br>

```css
input:required {
  border: 2px solid blue;
}
```

## Pseudoelementos:
Al igual que las pseudoclases, los pseudoelementos son otra de las características de CSS que permiten hacer referencias a «comportamientos virtuales no tangibles», o lo que es lo mismo, se le puede dar estilo a elementos que no existen realmente en el HTML, y que se pueden generar desde CSS.

`::before`	Aplica los estilos antes del elemento indicado.<br>
`::after`   Aplica los estilos después del elemento indicado.<br>
``::first-letter``	Aplica los estilos en la primera letra del texto.<br>
`::first-line`	Aplica los estilos en la primera línea del texto.<br>
```css
q::before {
  content: "«";
  color: #888;
}

p::first-letter {
  color: black;
  font-family: 'Times New Roman', serif;
  font-size: 42px;
}

p::first-line {
  color: #999;
}

```
