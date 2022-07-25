
# ¿ Qué es el DOM ?

Las siglas **DOM** significan **Document Object Model**, o que es lo mismo a  la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM _(o simplemente DOM)_. En Javascript, cuando nos referimos al **DOM** nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...
<br><br>


# ¿ Cómo accedemos al DOM ?

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán **_ELEMENT_** o **_NODE_**:

> - ELEMENT: no es más que la representación genérica de una etiqueta: HTMLElement.
> - NODE: es una unidad más básica, la cuál puede ser _ELEMENT_ o un nodo de texto.
<br><br>




Si nos encontramos en nuestro código Javascript y queremos hacer modificaciones en un elemento de la página HTML, lo primero que debemos hacer es buscar dicho elemento. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente el id o la clase.


# Seleccionar un elemento del DOM

### document.getElementById("id")

busca un elemento HTML con el **id** especificado dentro de los paréntesis 

**_HTML_**
~~~
<img id='logoAcademia' src='' alt='logo'>
~~~
**_JAVASCRIPT_**
~~~
let imagen = document.getElementById('logoAcademia')

console.log(imagen)
//Muestra en consola <img id='logoAcademia' src='' alt='logo'>
~~~

### document.querySelector()

Esta función devuelve el primer elemento que coincide con un selector o selectores css especificados en el documento
       
  ~~~     
       let elem = document.querySelector('.miClase'; //Buscamos un elemento por su clase
       let elem1 = document.querySelector('#miId'); // Buscamos un elemento por su ID
  ~~~     

### document.getElementByClassName('class')

Obtenermos un array de elementos con esa misma clase

~~~
let elem = document.getElementsByClassName('clase_del_elemento');
~~~

### document.getElementsByTagName()

Obtenemos un array de elementos con esa misma etiqueta

~~~
let elem = document.getElementsByTagName('etiqueta_del_elemento');
~~~


### document.querySelectorAll()

Esta función evuelve todos los elementos del documento que coinciden con un selector o selectores css especificados  
 
      let elem = document.querySelectorAll('.miClase');
<br><br>


# ¿ Cómo modificar el DOM desde Javascript ? 

- **SetAtributte(atribute, value)**: Este metodo permite crearle un atributo a una etiqueta y asignarle un valor, en caso de que el atributo ya exista, lo que hace es actualizar el valor del mismo. En el primer parámetro recibe el nombre del atributo y en el segundo recibe el valor que este tomará.

~~~
let image = document.getElementById('logoAcademia') // <img id='logoAcademia' src='' alt='logo'>

image.setAttribute('src', 'https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png')
image.setAttribute('alt', 'nuevo logo')

console.log(image)
// se mostrará en consola <img id='logoAcademia' src='https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png' alt='nuevo logo' />

~~~
<br>

- **element.style**: Este método nos permite agregar o actualizar cualquier propiedad css del elemento.

~~~
     let bodyHTML = document.querySelector('body'); // se capturó la etiqueta body

     bodyHTML.style.backgroundColor = 'green' //Se cambió el color de fondo a verde.
     bodyHTML.style.fontSize = '50px' // Se cambió el tamaño de la fuente a 50px en toda la página
     bodyHTML.style.textAling = 'center // se centran todos los textos y elementos de la página

~~~
<br><br><br>

# Métodos importantes para la manipulacion del css desde Javacsript

  tengamos presente el siguiente elemento, nos ayudará con esta parte de la sección
~~~
  HTML

  <div class='card card-image'></div>

  JS 

  let card = document.querySelector('.card') // se captura la etiqueta con la clase card


~~~

- **element.classList**: Nos permite listas todas las clases que posee un elemento.

~~~
 console.log(card.classList)
 // se mostrará en consola DOMTokenList(2) ['card', 'card-image', value: 'card card-image']
~~~

- **element.classList.add()**: Nos permite agregarle una nueva clase a el elemento.

~~~
 card.classList.add('newClass')

 console.log(card.classList)
 // se mostrará en consola DOMTokenList(2) ['card', 'card-image', 'newClass', value: 'card card-image newClass']
~~~

- **element.classList.remove()**: Nos permite eliminarle una  clase a el elemento.

~~~
 card.classList.remove('card-image')

 console.log(card.classList)
 // se mostrará en consola DOMTokenList(2) ['card', 'newClass', value: 'card newClass']
~~~

- **element.classList.contains()**: Nos permite evaluar si una clase existe o no en un elemento. Esta retorna un valor booleano, es decir, si la clase existe retorna true, d elo contrario retorna false

~~~
 
 console.log(card.classList.contains('card'))
 // en consola se mostrará **_true_** porque el elemento si contiene esa clase

 console.log(card.classList.contains('cardContainer'))
 // en consola se mostrará **_false_** porque el elemento no contiene esa clase
 
~~~

- **element.classList.replace(first, second)**: Nos permite reemplazar clases en un elemento, la primera posición nos indica el nombre de la clase que
vamos a reemplazar, y la segunda nos indica el nombre
de la clase por el cual será reemplazada

~~~
  
  card.classlist.replace('newClass', 'oldClass');

  console.log(card)
  // se mostrará en consola DOMTokenList(2) ['card', 'oldClass', value: 'card oldClass']

~~~


<br><br><br>

# Crear e insertar elementos en el DOM

- **createElement()**: Permite crear una etiqueta HTML desde javascript. Esta etiqueta se crea **TOTALMENTE VACÍA**.

~~~

let image = document.createElement('img');

console.log(image)
// Se mostrará en consola lo siguiente <img>, una etiqueta totalmente vacía

image.setAttribute('alt', 'imagen creada');
image.setAttribute('src', 'https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png')

console.log(image)
// se mostrará en consola <img id='logoAcademia' src='https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png' alt='imagen creada' />

~~~

Sin embargo, esta etiqueta que acabamos de crear aún no se ha insertado en el DOM, por ende los usuarios no podrán verla. Para este caso podriamos usar el siguiente método para insertarla.

- **appendChild()**: este método nos permite insertar elementos al final de un contenedor, es decir, lo inserta como un hijo al final de todos los elementos que se encuentran dentro del contenedor

**HTML**

~~~

<div id='container'>
  <h1>Academia Geek</h1>
</div>

~~~

**Javascript**

~~~
let contenedor = document.getElementById('container')

// Tomando en cuenta la etiqueta creada anteriormente usando el **createElement** haremos lo siguiente

contenedor.appendChild(image)
~~~

Con esto la estructura del HTML quedaría de la siguiente forma

~~~

<div id='container'>
  <h1>Academia Geek</h1>
  <img id='logoAcademia' src='https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png' alt='imagen creada' />
</div>

~~~

