//Ejercicio samuel
/*let b = (a, b) => {
  let ter = a < 0 || b < 0 ? "No se sumar numeros negativos" : "";
  return `${ter}${a + b}`;
};
let result = b(5, 3);
try {
  if (result.startsWith("No se sumar numeros negativos")) {
    throw new Error("No se sumar numeros negativos");
  }
  console.log(`La suma es ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log("Fin del programa");
}
*/

//Ejercicio 1
/* function div(x, y) {
  if (x === 0 || y === 0) {
    throw new Error("Ingrese numeros que no sean 0");
  }
  return x / y;
}

try {
  console.log(`El resultado de la division es: ${div(0, 2)}`);
} catch(error) {
    console.error('Error:', error.message);
}
*/

//Ejercicio 2
/*function arr(x) {
  let arr1 = [5, 9, 3, 2, 6];

  if (x < 0 || x >= arr1.length) {
    throw new Error("Ingrese una posicion valida");
  }
  return `En la posicion ${x} esta el numero ${arr1[x]}`;
}

try {
  console.log(arr(0));
} catch (error) {
  console.error("Error:", error.message);
}
*/

//Ejercicio 3
/*function num(x) {
  x = parseFloat(x);
  if (isNaN(x)) {
    throw new Error("Ingrese un numero");
  }

  return `El numero ingresado fue: ${x}`;
}

try {
  console.log(num("9765"));
} catch (error) {
  console.error("Error:", error.message);
}
*/

//Ejercicio 4
function suma(x, y) {
  x = parseFloat(x);
  y = parseFloat(y);

  if (isNaN(x) || isNaN(y)) {
    throw new Error("Tiene que ingresar un numero");
  }

  return `La suma es ${x + y}`;
}

try {
  console.log(suma("4", 6));
} catch (error) {
  console.error("Error:", error.message);
}

//Ejercicio 5

//Ejercicio 6
/*function num(x) {
  x = parseFloat(x);
  if (x < 0 || isNaN(x)) {
    throw new Error("Ingrese un numero valido");
  }

  return `El numero ingresado es: ${x}`;
}

try {
  console.log(num("vrfvfsd"));
} catch (error) {
  console.error("Error:", error.message);
}
*/

// Ejercicio 7
/*function ent(x) {
  x = parseFloat(x);
  if (!Number.isInteger(x)) {
    throw new Error("Ingrese numeros enteros");
  }
  return `El numero ingresado es: ${x}`;
}

try {
  console.log(ent(421));
} catch (error) {
  console.error("Error:", error.message);
}
*/

// Ejercicio 8
// function texto(x) {
//   if (!isNaN(parseFloat(x))) {
//     throw new Error("Ingrese texto");
//   }
//   return x.toUpperCase();
// }

// try {
//   console.log(texto("ferferfe"));
// } catch (error) {
//   console.error("Error:", error.message);
// }

// Ejercicio 9
/*function prg(x){
  if(x === noexiste()){
    throw new Error()
  }
}

try {
  console.log(prg());
  
} catch (error) {
  console.error('Error:', error.message);
  
}
*/

// Ejercicio 10

// let arr = [];
// let prg = prompt("Ingrese datos");

// while (prg !== "Terminar") {
//   arr = [...arr, [prg]];
//   prg = prompt("Ingrese datos");
// }

// for (let datos of arr) {
//   console.log(datos);
// }
