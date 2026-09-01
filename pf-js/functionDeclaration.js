//declarar la funcion
//function declaration
function saludar() {
  console.log("Hola");
}

//usar la funcion (invocar o llamar)
saludar();
saludar();
saludar();

//funcion con parametros
function saludarConNombre(name, edad) {
  console.log(`Hola ${name} mucho gusto 
    en conocerte no sabia que tenias ${edad} años`);
}

//pasando argumentos a una funcion
saludarConNombre("Josue", 32);
saludarConNombre("Liz", 27);
saludarConNombre(27, "hola");

/**
 *
 * funcion que retorna algo
 * !Importante
 * Cuando usamos return
 * !1. Termina la ejecucion de la funcion
 * !2. el valor retornado debe ser ocupado o nunca
 *  !vamos a ver
 * */
function multiplyToNumbers(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a * b; //finaliza ejecucion
  } else {
    return "Por favor envia dos numeros"; //finaliza ejecucion
  }
  console.log("Nunca me vas a ver");
}

//aqui no voy a ver nada
multiplyToNumbers(2, 3);

//imprimiendo el valor de retorno en consola
console.log(multiplyToNumbers(3, 5));
console.log(multiplyToNumbers(3, "josue"));
