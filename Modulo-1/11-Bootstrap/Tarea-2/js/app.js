
const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

//Vector Moneda
var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euros','Bolivar'];
var cambio = ['Elige moneda de cambio','Dolar','Peso Mexicano','Peso Colombiano','Euros','Bolivar'];

moneda.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento.appendChild(item)   
})

cambio.forEach((data,index)=>{
     const item = document.createElement('option');
     item.setAttribute('value',index)
     item.textContent = data;
     fragmento2.appendChild(item)   
})

listaMoneda.appendChild(fragmento);
listaCambio.appendChild(fragmento2);

formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.getElementById('moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
   
      console.log(monedaSeleccionada);

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.getElementById('criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
 
     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
          alerta.appendChild(divMensaje)
     } else {
          divMensaje.classList.add('alert-success');
          divMensaje.appendChild(document.createTextNode('Gracias'));
          alerta.appendChild(divMensaje)
     }

     setTimeout(function() {
          document.querySelector('#principal .alert').remove();
          formulario.reset();
     }, 3000);


     console.log(" Moneda selecc" +criptoMonedaSeleccionada)
     
     switch (criptoMonedaSeleccionada) {
          case "1":
               console.log('Dolares')
               break;
          case "2":
               console.log('Peso Mexicano ')
               break;
          case "3":
               console.log('Pesos Colombiano ')
               break;
          default:
               console.log('opción invalida ')
               break;
     }

})