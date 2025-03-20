/*// Función asincrónica que determina si un número es par o impar
async function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} es par`;
  } else {
    return `${numero} es impar`;
  }
}

// Función que llama a la función asincrónica y muestra el resultado
async function mostrarParidad(numero) {
  try {
    let resultado = await esParOImpar(numero);
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamada a la función para mostrar si el número es par o impar
mostrarParidad(7); // Prueba con un número impar
mostrarParidad(4); // Prueba con un número par
*/

/*async function parImpar(num) {
  if (num % 2 == 0) {
    return "Es par";
  } else {
    return "es Impar";
  }
}
async function calpi(num) {
  try {
    let res = await parImpar(num);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

calpi(3);
*/
