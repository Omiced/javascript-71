/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 *    1.2 Usar el valor inmediatamente
 * !Importante
 * 1. no se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el código, esto quiere decir que el código que este debajo
 * de donde escribimos el uso de prompt no se va a ejecutar, hasta que
 * el usuario ingrese algo.
 * 3. No se puede personalizar
 * 4. Todo lo que ingresa mediante prompt siempre es un String\
 *
 * Nota:
 * ? \n es un caracte que nos inserta un salto de linea
 */

const edad = prompt("Ingresa tu edad", 15);
const nombre = prompt("Inresa tu nombre");
console.log(edad);
console.log("Hola soy " + nombre + "\ny tengo " + edad + " años");
alert("Hola soy " + nombre + " y tengo " + edad + " años");
