#  Instrucciones básicas MarkDown
##  ¿Qué es Markdown?
Markdown es un lenguaje de marcado ligero que puede usar para agregar elementos de formato a documentos de texto sin formato. Creado por John Gruber en 2004, Markdown es ahora uno de los lenguajes de marcado más populares del mundo.
El objetivo principal del diseño de la sintaxis de formato de Markdown es hacer que sea lo más legible posible.

### ¿Por qué usar [Markdown](https://www.markdownguide.org/getting-started/)?
- Se puede utilizar para todo. La gente lo usa para crear sitios web , documentos , notas , libros , presentaciones , mensajes de correo electrónico y documentación técnica.
- Es portátil, los archivos que contienen texto con formato Markdown se pueden abrir con prácticamente cualquier aplicación. 
- Es ndependiente de la plataforma, puede crear texto con formato Markdown en cualquier dispositivo que ejecute cualquier sistema operativo.
- Es una prueba de futuro, incluso si la aplicación que está usando deja de funcionar en algún momento en el futuro, aún podrá leer su texto con formato Markdown usando una aplicación de edición de texto. 
- Está en todas partes, los sitios web como Reddit y GitHub son compatibles con Markdown, y muchas aplicaciones de escritorio y basadas en la web lo admiten.

## [Instrucciones](https://www.markdownguide.org/basic-syntax/)

~~~
# Título H1
## Título H2
### Título H3
#### Título H4
##### Título H5
###### Título H6

Este es un ejemplo de texto que da entrada a una lista genérica de elementos:
- Elemento 1
- Elemento 2
- Elemento 3

Este es un ejemplo de texto que da entrada a una lista numerada:
1. Elemento 1
2. Elemento 2
3. Elemento 3

Al texto en Markdown puedes añadirle formato como **negrita** o *cursiva* de una manera muy sencilla. 
~~~

### Encabezados
># H1
>## H2
>### H3
>#### H4
>##### H5
>###### H6

### Estilizar el texto

|   MarkDown   | Resultado    |
| ----------   | ----------   |
| `*cursiva*`  | *cursiva*    |
| `_cursiva_`  | _cursiva_    |
| `**negrita**`| **negrita**  |
| `__negrita__`| __negrita__  |
| `~~tachado~~`| ~~tachado~~  |
 
### Videos

Las etiquetas de imagen que se vinculan a archivos con una extensión de video se convierten automáticamente en un reproductor de video. Las extensiones de vídeo válidas son .mp4, .m4v, .mov, .webm, y .ogv:
![Video ejemplo](https://youtu.be/oxaH9CFpeEE)

### Listas de tareas

Para crear una lista de tareas, introduce los elementos de la lista con un caracter de espacio regular, seguido de [ ]. Para marcar una tarea como completada, utiliza [x].
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull reques


### Resaltar sintaxis de código
Puedes agregar un identificador opcional de idioma para habilitar el resaltado de la sintaxis en tu bloque de código cercado.

Por ejemplo, para resaltar la sintaxis del código Ruby:

| ` ```lenguaje <codigo>   ``` `|  ```codigo  ```  |

Ejemplo;

|` ```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
puts markdown.to_html``` `|

 ```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
puts markdown.to_html
```

### Link
Markdown 
~~~
[Instrucciones] (https://www.markdownguide.org/basic-syntax/)
~~~
Resultado
[Instrucciones](https://www.markdownguide.org/basic-syntax/)
