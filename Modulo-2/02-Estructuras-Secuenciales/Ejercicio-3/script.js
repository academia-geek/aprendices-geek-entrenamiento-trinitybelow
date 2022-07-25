//Entrada
let valor_compra = 0;
let descuento = 0;
let total = 0;

valor_compra = prompt("Ingrese el total de la compra");

//Proceso
descuento = valor_compra * 0.15;
total = valor_compra - descuento;

//Salida
alert("Descuento: " + descuento + " Valor neto: " + valor_compra + " Total a pagar por compra: " + total); // Concatenación simple
alert(`Descuento: ${descuento} Valor neto: ${valor_compra} Total a pagar por compra: ${total}`); // Template String o plantillas literales 


