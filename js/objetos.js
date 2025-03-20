//Ejercicio 1
/*let estudiante = {
  nombre: "Diego",
  clase: "VI",
  rollno: 12,
}
console.log(estudiante)
*/

//Ejercicio 2
/*let estudiante = {
  nombre: "Diego",
  clase: "VI",
  rollno: 12,
};
console.log(estudiante);
delete estudiante.rollno;
console.log(estudiante);
*/

//Ejercicio 3
/*let estudiante = {
  nombre: "Diego",
  clase: "VI",
  rollno: 12,
};
let lon = Object.keys(estudiante).length;
console.log(lon);
*/

//Ejercicio 4
/*let bib = [
  {
    autor: "Bill Gates",
    titulo: "El camino por delante",
    readingStatus: true,
  },
  {
    autor: "Steve Jobs",
    titulo: "Walter Isaacson",
    readingStatus: true,
  },
  {
    autor: "Suzanne Collins",
    titulo: "Sinsajo: El último libro de los juegos del hambre",
    readingStatus: false,
  },
];
console.log(bib[0]);
*/

//Ejercicio 5 hecho con readline
/*let rl = require("readline").createInterface(process.stdin, process.stdout);
rl.question("Ingrese el radio del cilindro. ", (x) => {
  if (x > 0) {
    rl.question("Ingrese la altura del cilindro. ", (y) => {
      if (y > 0) {
        rl.close();
        console.log(`El volumen del cilindro es: ${3.1416 * x ** 2 * y}`);
      } else {
        rl.close();
        console.log("Tiene que meter numeros positivos");
      }
    });
  } else {
    rl.close();
    console.log("Tiene que meter numeros positivos");
  }
});
*/

//Ejercicio 6
/*let m = [6, 4, 0, 3, -2, 1];
console.log(m.sort());
*/

//Ejercicio 9 hecho con readline
/*let rl = require("readline").createInterface(process.stdin, process.stdout);
rl.question("Ingrese el radio para calcular el area del circulo. ", (x) => {
  if (x > 0) {
    console.log(`El area del circulo es ${3.1416 * x ** 2}`);
    rl.question(
      "Ingrese el radio para calcular el perimetro del circulo. ",
      (y) => {
        if (y > 0) {
          rl.close();
          console.log(`El perimetro del circulo es ${3.1416 * 2 * y}`);
        } else {
          rl.close();
          console.log("Tiene que ingresar numeros positivos");
        }
      }
    );
  } else {
    rl.close();
    console.log("Tiene que ingresar numeros positivos");
  }
});
*/

// Ejercicio 10

//primos

/*let num = (x) => {
  for (i = 2; i < x; i++) {
    if (x % i === 0) {
      return console.log("No es primo");
    }
  }

  console.log("Si es primo");
};

num(3);
*/

/*let arr = [
  9, 5, 8, 2, 7, 3, 1, 4, 6, 0, 0, 0, 0, -5, -8, -1, -4, -2, -9, -5, -7, -6, -3,
];
let arrp = [];
let arrc = [];
let arrn = [];

arr.filter((x) => {
  if (x < 0) {
    arrn.push(x);
  } else if (x == 0) {
    arrc.push(x);
  } else {
    arrp.push(x);
  }
});

console.log(arrp.sort());
console.log(arrc.sort());
console.log(arrn.sort());
*/

/*let text = "Hola a todos";
let texp = text.split(/\s+/);
// console.log(texp);
for (i = 0; i < texp.length; i++) {
  console.log(texp[i].length);
}
*/
