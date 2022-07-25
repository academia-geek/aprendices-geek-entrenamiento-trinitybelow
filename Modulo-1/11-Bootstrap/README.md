# Bootstrap

Documentación técnica https://getbootstrap.com/docs/5.0/getting-started/introduction/

Boostrap es una librería de grid (solo columnas) y componentes gráficos que creó uno de los desarrolladores de Twitter. La librería ofrece un montón de funcionalidades, desde elementos de UI (botones, dropdowns, menús, etc.), hasta componentes interactivos con JavaScript como un carrusel de fotografías.

## ¿Por qué usar Bootstrap? Ventajas

***Facilidad de uso***: Lo único que tienes que hacer es poner clases a elementos HTML.

***Responsive***: Perfecto para crear páginas web adaptables a cualquier dispositivo.

***Personalizable***: Puedes personalizar su descarga para usar los elementos que necesites.

***Gran comunidad*** Este framework está muy extendido y si tenemos un problema podremos encontrar mucha información en Internet.


Para poder usar Bootstrap en nuestro proyecto, enlazaremos los CSS alojado en un servidor de Internet, lo que suele llamarse CDN (como hemos hecho con las fuentes de Google Fonts o con FontAwesome)

Alternativamente podríamos descargar el código CSS y usarlo en nuestro proyecto.
Por ahora vamos a usar el <link> que Bootstrap nos da en su página de inicio. 

```html
<!-- Css Bootstrap-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- JavaScript Bootstrap-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```
Por ahora vamos a ver que Bootstrap cuenta con un sistema de grid sencillo de 12 columnas.
~~~
Nota:
Lo llamamos sistema de grid pero solo dispone las columnas.
~~~

Siempre partimos de la base de 12 columnas para distribuir el espacio disponible en la web. En el CSS que hemos importado, tenemos una serie de clases que nos van a permitir construir nuestra web con un grid responsive de acuerdo a unos breakpoints que bootstrap tiene definidos.

Como base usaremos un elemento `container` que contiene nuestro grid (como el wrapper de CSS grid) o `container-fluid` si queremos que ocupe todo el ancho y sea fluido. Luego usaremos un elemento con la clase `row` para indicar que es una nueva fila, y dentro podremos los elementos correspondientes. En cada fila podremos indicar el número de columnas a usar con las clases `col-num`, por ejemplo, `col-1`, `col-6`, `col-12`. Veamos un ejemplo.

```html
<div class="container-fluid">
  <div class="row">
    <div class="header col-12">HEADER</div>
  </div>
  <div class="row">
    <div class="header col-12">HERO</div>
  </div>
  <div class="row">
    <div class="menu col-8">CONTENT</div>
    <div class="content col-4">ASIDE</div>
  </div>
  <div class="row">
    <div class="footer col-12">FOOTER</div>
  </div>
</div>
```

### Colores:
![](https://storage.googleapis.com/academia-geek-general-bucket/modulo-1/modulo_1_img_52.png)
```Ruby
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
```
## Spacing

Bootstrap incluye una amplia gama de clases de utilidad de margen de respuesta abreviada, relleno y espacio para modificar la apariencia de un elemento.

***Margin and padding***
`m` - para clases que establecen margin
`p` - para clases que establecen padding

Donde lados es uno de:

`t`- para clases que establecen `margin-top` o `padding-top` <br>
`b`- para clases que establecen `margin-bottom` o `padding-bottom` <br>
`s`- (inicio) para clases que se establezcan `margin-left ` o `padding-leften`<br> 
`e` - (fin) para clases que se establezcan `margin-right` o `padding-right`<br> 
`x`- para clases que establecen tanto `left` - `right`<br>
`y`- para clases que establecen tanto `top` - `bottom`<br>
`blank`: para las clases que establecen a margin o paddingen los 4 lados del elemento

Donde el tamaño es uno de 0 a 5

***Ejemplo***
```css
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```
### Tipografías 

- `font-weight-bold` Negrita <br>
- `font-weight-normal` Normal <br>
- `font-weight-light` Fina <br>
- `font-italic` Itálica <br>
- `lead` Destaca un párrafo <br>
- `small` Más pequeño (85% del tamaño del padre) <br>
- `text-left` Alineado izquierda <br>
- `text-center` Alineado centro <br>
- `text-right` Alineado derecha <br>
- `text-justify` Justificado <br>
- `text-nowrap` Texto nowrap <br>
- `text-lowercase` Texto en minúsculas <br>
- `text-uppercase` Texto en mayúsculas- text-capitalize Texto capitalizado <br>
- `initialism` Muestra el texto en un elemento `<abbr>` con tamaño más pequeño <br>
- `list-unstyled` Quita el `list-style` y `margin-left` en elementos de lista
- `list-inline` Coloca todos los elementos de una lista en una única línea 


***EJERCICIO 1***

Responde a las siguiente preguntas:

¿Cuáles son los breakpoints que nos ofrece Bootstrap? <br>
¿Qué clase tendrá un elemento que ocupe 2 columnas en el breakpoint Small?<br>
¿Qué clase tendrá un elemento que ocupe 6 columnas en el breakpoint Large?<br>
¿Qué clase tendrá un elemento que ocupe 11 columnas en el breakpoint Extra Small?<br>

## Recursos externos
[Grid de Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/)

# Otros masrcos de trabajo CSS
1. Tailwind CSS
2. Bulma
3. Chakra
4. Foundation
5. Materialise 
6. Milligram 
7. Skeleton
