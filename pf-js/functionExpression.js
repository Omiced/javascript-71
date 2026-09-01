//function expression
const getTriangleArea = function (base, heigth) {
  return (base * heigth) / 2;
};

let area = getTriangleArea(20, 24);
console.log(`El area de un triangulo de 
  base 20 y altura 24 es ${area}`);

const evenOrOdd = function (limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(`El numero ${i} es par`);
    } else {
      console.log(`El numero ${i} es impar`);
    }
  }
};

const evenOrOddPrompt = function () {
  const limit = +prompt("Ingresa el limite");
  for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(`El numero ${i} es par`);
    } else {
      console.log(`El numero ${i} es impar`);
    }
  }
};

evenOrOdd(200);
console.log("esta es otra ejecucion");
evenOrOdd(10);

evenOrOddPrompt();
