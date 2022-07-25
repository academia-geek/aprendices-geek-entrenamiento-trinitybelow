let newImage = document.createElement('img');
let newTitle = document.createElement('h2');
const containerInfo = document.querySelector('#containerInfo')
const nameUsuario = prompt('Por favor ingresa tu nombre');
const ageUsuario = prompt('Por favor ingresa tu edad');
const imageUsuario = prompt('Por favor ingresa la URL de tu foto de perfil');



newImage.setAttribute('src', imageUsuario);
newImage.setAttribute('alt', `${nameUsuario} avatar`);
newImage.classList.add('image');

newTitle.textContent = `${nameUsuario}, ${ageUsuario} años`;

containerInfo.appendChild(newImage);
containerInfo.appendChild(newTitle);

