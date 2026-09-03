/**
 * Objetos en JS (JSON)
 * Son una estructura de datos, similar diccionarios o mapas
 * ?Se organiza en pares
 * ?Llave : valor asociado
 * ?Es una estructura de datos desordenada
 * ?Aqui los datos se obtienen mediante su llave
 * !No son los mismos objetos que los de Programacion orientada a objetos
 * !Las llaves no se pueden repetir
 *
 *
 * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de informacion
 * Entre cliente y servidor en la WEB
 * JSON (Javascript object notation)
 *
 * Nota:
 * Todas las funciones por defecto retornan undefined
 */

//como declarar un objeto
const participante = {
  name: "Natalia",
  lastName: "Coca",
  age: 27,
  isAlive: true,
  sayHi: function () {
    console.log("Natalia dice Hola");
  },
  ch: 71,
};

//Como acceder a los valores
//1. Notacion punto (mas usado)
//2. Notacion corchete, el nombre va entre comillas como si fuera
// String

console.log(`El nombre de la participante es ${participante.name},
  obtenido con notacion punto`);

console.log(`La edad de la participante es ${participante["age"]}, 
  obtenido con notacion corchete`);

console.log(participante.sayHi());

//como agrear un nuevo par llave valor
console.log(participante);
//agregando un array como valor
participante.favoriteAnimals = ["Tortuga", "Gato", "Cuervo"];
console.log(participante);
//agregando un objeto como valor a llave address
participante.address = {
  zipCode: 55700,
  country: "Mexico",
};

//como accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto, u otro array)

console.log(
  `El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`,
);
console.log(participante.favoriteAnimals);

console.log(
  `El codigo postal de ${participante.name} es ${participante.address["zipCode"]}`,
);

console.log(
  `El pais  de ${participante.name} es ${participante["address"]["country"]}`,
);

console.log(
  `El codigo postal de ${participante.name} es ${participante["address"].country}`,
);

console.log(participante.address);

//como modificar el valor de una llave
participante.age = 25;
console.log(participante.age);

//como eliminar una llave
delete participante.ch;
console.log(participante);

//como iterar sobre el objeto
for (const llave in participante) {
  console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
}
for (const llave in participante.address) {
  console.log(
    `El valor de la llave ${llave} es ${participante.address[llave]}`,
  );
}
