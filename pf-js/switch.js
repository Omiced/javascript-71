/**
 * Switch
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o de falso
 * Si no que se basa en opciones
 * ? Nos permite tener multiples opciones
 * ? y con base en la opcion seleccionada ejecutar un bloque de codigo
 * ? tiene una respuesta por default, por si la opcion ingresada no esta en la lista
 *
 * ?Se divide en casos
 * ? cada caso lleva su bloque de codigo y debe llevar al finalizar
 * ? la palabra break
 *
 *
 * Nota:
 *
 * todo: Expresiones (expression): Es todo aquello que genera un valor
 * * ejemplos: una suma, usar una variable, usar una funcion
 * * texto, numero
 * todo: Declaraciones (statement): No genera valor y por lo general son estructuras de control o bucles
 *  * ejemplos: el if, el switch, el for, el while
 */

let month = prompt(`
    Selecciona uno de los siguientes meses
    1. Enero
    2. Febrero
    3. Marzo
  `);

switch (month) {
  case "Enero":
    alert("El mes de Enero es el primer mes del año");
    break;
  case "Febrero":
    alert(`El mes ${month} es el segundo mes del año "hola" 'jqweiew'`);
    // "El mes " + month + " es el segundo mes del año"
    break;
  case "Marzo":
    alert(`El mes ${month} es el tercer mes del año`);
    break;
  case "Abril":
  case "Mayo":
    console.log("Abril y mayo");
    break;
  default:
    alert("El mes seleccionado no aplica");
}
