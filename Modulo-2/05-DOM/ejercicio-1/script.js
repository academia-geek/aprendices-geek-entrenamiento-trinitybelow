const container = document.getElementById('container'); // Capturamos el elemento con el id container
const bodyAplication = document.querySelector('body'); // capturamos a la etiqueta body
const background = prompt("Por favor ingresa el color de fondo que deseas que tenga la aplicacion \n puedes colocar su nombre (debe ser en ingles) o su código hexadecimal");
// Capturamos en la variable background el color de fondo que desea el usuario
const imageUrl = prompt("Por favor ingresa una URL con la imagen de tu mascota"); // capturamos la imagen de la mascota del usuario 
const newImage = document.createElement('img'); // creamos una nueva imagen



bodyAplication.classList.add('bodyElement'); // le agregamos una nueva clase al elemento
bodyAplication.style.background = background;  // cambiamos el color de fondo por el ingresado por el usuario que se encuentra en la variable background

newImage.classList.add('mascotaUsuario'); // Le agregamos una nueva clase a la imagen
newImage.setAttribute('src', imageUrl); // actualizamos el atributo src de la imagen con la url ingresada por el usuario
newImage.setAttribute('alt', "mascota del usuario") // actualizamos el atributo alt

container.appendChild(newImage); // insertamos en el DOM la imagen creada


// Ya con esto podemos probar nuestro aplicativo :)