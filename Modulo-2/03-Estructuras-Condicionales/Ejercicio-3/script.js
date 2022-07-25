let valor_compra = 0;
let descuento = 0;
let total_pagar = 0;

valor_compra = Number(prompt('Ingresar valor de la compra'));

if (valor_compra > 100000) {
  descuento = valor_compra * 0.2;
}
else {
    descuento = 0;
}
total_pagar = valor_compra - descuento;
alert('Total a pagar: '+ total_pagar);

