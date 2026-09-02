/**
 * Callbacks
 * Es una funcion que se pasa como argumento
 * a otra funcion, para ser ejecutada en el momento
 * que la funcion que recibe el callback lo decida
 * ? funciones ciudadanos de primera clase
 * todas las funciones son tratadas como si fueran un valor
 */

function procesarPago(nombreCliente, callback, cuenta) {
  const saldoAPagar = callback(cuenta);
  console.log(`El cliente ${nombreCliente} debe pagar 
    ${saldoAPagar}
    despues de impuestos`);
}

/**
 * Opciones para la funcion de callbak
 * 1. crear una funcion aparte y luego mandarla como argumento
 * 2. crear una funcion anonima dentro de los parentesis de la funcion principal
 */

function addIVA(cuenta) {
  return cuenta * 1.16;
}

procesarPago("Josue", addIVA, 2000);
//procesar pago con funcion anonima , 2 ejemplos, uno con function y otro con arrow function

console.log("------------- Callback con funcion anonima -------- ");
procesarPago(
  "Carlos",
  function (cuenta) {
    return cuenta * 1.2;
  },
  2000,
);

console.log("------------Callback con arrow function--------");

procesarPago("Javier", (pago) => pago * 1.3, 2000);
