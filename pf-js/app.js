/**
 * Condicionales:
 * Serie de condiciones para que algo suceda
 *
 * En programacion para el manejo de estas condiciones tenemos
 * ! el bloque if else
 * ? bloque if pregunta por una condición en caso de que esta condición sea
 * ? verdadera ejecuta un bloque de código, en de falso no ejecuta nada
 * ? else maneja la ejecución de código en caso negativo
 *
 * Lo que se coloca dentro del if, debe ser algo que genere
 * * un valor True o False (tipo de dato boolean)
 *
 */

/* convertir de texto a numero
  !Importante
  Si se trata de convertir algo que no es un numero
  como resultado obtendremos NaN (not a number)
*/

const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 - birthYear;
console.log(age);

/**
 * todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso
 * ==  es el simbolo de igualdad en programacion
 * Mayor que >
 * 2 > 1 == Verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 *
 * Menor que <
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 == Falso
 *
 * Comparador de igualdad ==
 * 2 == 2 == Verdadero
 * 3 == 1 == Falso
 *
 * Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 1 == Verdadero
 * 2 >= 3 == Falso
 *
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == Verdadero
 * 7 <= 5 == Falso
 *
 * Diferente de !=
 * 5 != 4 == True
 * 5 != 5 == False
 * 99 != 100 == True
 *
 * Negacion (not) !
 * !Verdadero == Falso
 * !Falso == Verdadero
 * !(4 <= 4) == Falso
 *
 * AND && Es un operador que devuelve
 * ? Verdadero solo si ambos lados de la expresion son Verdadero
 * ? Si un lado es Falso todo el resultado se vuelve Falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falseo == Falso
 * Falso && Verdadero == Falso
 *
 * age >= 6 && age <= 12
 * age 7 == Verdadero
 * age 15 == Falso
 * age 5 == Falso
 *
 * OR || Es un operador que devuelve
 * ? Falso si ambos lados de la expresion son Falso
 * ? Si un lado de la expresion es Verdadero devuelve Verdadero
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso == Falso
 *
 * age > 20 || age < 100
 *
 * age 101 == Verdadero
 * age 18 == Verdadero
 */

/**
 * Dentro de los parentesis va la condición que se va a evaluar
 * Dentro de las llaves va el código que se va a ejecutar en caso
 * de que la condición sea Verdero
 *
 * ? else if
 * Nos permite evaluar mas de una condicion
 * va asociado a un if
 */
if (age >= 18) {
  alert("Bienvenido eres mayor de edad 🐶");
} else if (age >= 6) {
  alert("Felicidades entraste a la primaria");
} else if (age >= 1) {
  alert("Felicidades sigues en el kinder");
} else {
  alert("Estas muy bebe o no haz nacido");
}
