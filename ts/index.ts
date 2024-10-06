//Documento 1
// Ejercicio 1
/*let v: boolean = true;
const f: boolean = false;

let ent: number = 2;
const dec: number = 3.14;

let a: any = "hola";
let b: any = 2;
const c: any = true;

let nombre: string | null = prompt("Ingrese su nombre");
const apellido: string | null = prompt("Ingrese su apellido");

console.log(
  `Bienvenido/a ${nombre} ${apellido}  a nuestro sitio web, gracias por registrarte`
);
*/

//Ejercicio 2
// let arr: number[] = [1, 2, 3, 4, 5];
// for (let todo of arr) {
//   console.log(todo);
// }

//Ejercicio 3
// let arr2: string[] = ["a", "b", "c", "d", "e"];
// for (let todo of arr2) {
//   console.log(todo);
// }

// Ejercicio 4
// let arr3: (number | string)[] = [...arr, ...arr2];
// arr3.forEach((x) => console.log(x));

// Ejercicio 5
// let arr4: (string | number)[] = [1, 2, "4vdve"];
// console.log(arr4);
// arr4.push("wedewdwe");
// console.log(arr4);
// arr4.pop();
// console.log(arr4);
// arr4[1] = "dwdwdw";
// console.log(arr4);
// for (let x of arr4) {
//   console.log(x);
// }

//Ejercicio 6
// const dias: {
//   dia1: string;
//   dia2: string;
//   dia3: string;
//   dia4: string;
//   dia5: string;
//   dia6: string;
//   dia7: string;
// } = {
//   dia1: "Lunes",
//   dia2: "Martes",
//   dia3: "Miercoles",
//   dia4: "Jueves",
//   dia5: "Viernes",
//   dia6: "Sabado",
//   dia7: "Domingo",
// };

// const numeros: {
//   num1: number;
//   num2: number;
//   num3: number;
//   num4: number;
//   num5: number;
//   num6: number;
//   num7: number;
//   num8: number;
//   num9: number;
// } = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   num4: 4,
//   num5: 5,
//   num6: 6,
//   num7: 7,
//   num8: 8,
//   num9: 9,
// };

// let objs = { ...dias, ...numeros };
// for (let key in objs) {
//   if (objs.hasOwnProperty(key)) {
//     console.log(`${key}: ${objs[key as keyof typeof objs]}`);
//   }
// }

// delete numeros.num1;
// console.log(numeros);

// numeros.num3 = 30;
// console.log(numeros);

//Ejercicio 7
// for (let i: number = 0; i <= 10; i++) {
//   console.log(i);
// }

// let prg: string | null = prompt("Quiere salir o no?");

// while (prg != "Salir") {
//   alert("No ha salido");
//   prg = prompt("Quiere salir o no?");
// }
// alert("Ya salio");

// Ejercicio 8

// function sum(num: number, num2?: number) {
//   if (num2) {
//     return `La suma de los dos numeros es ${num + num2}`;
//   } else {
//     return `El numero ingresado es ${num}`;
//   }
// }

// console.log(sum(1, 3));

//Documento 2
//Ejercicio 1
// function variables(n: number, b?: boolean, s: string = "Hola") {
//   return `${n} ${b} ${s} `;
// }

// console.log(variables(5, true));

//Ejercicio 2
// let suma: (x: number, y: number) => number;

// suma = (x, y) => {
//   return x + y;
// };

// console.log(suma(5, 3));

//Ejercicio 3
// setTimeout(() => console.log("HOLA ADSI"), 5000);

//Ejercicio 4
// let saludo: () => string;

// saludo = () => {
//   return "Hola ADSI";
// };

// console.log(saludo());

// //O tambien de esta manera
// let saludo2: () => void;

// saludo2 = () => {
//   console.log("Hola ADSI");
// };

// saludo2();

//Ejercicio 5
// let edad: (x: number) => void;

// edad = (x) => {
//   console.log(`La edad ingresada es ${x}`);
// };

// edad(5);

//Ejercicio 6
// let prod: (x: number, y: number) => void;

// prod = (x, y) => {
//   console.log(`El producto de los dos numeros ingresados es ${x * y}`);
// };

// prod(5, 2);

//Ejercicio 7
// let mod = (x: number, y: number): number => {
//   let resmod = x % y;
//   return resmod;
// };

// console.log(mod(100, 2));

//Documento 3
//Ejercicio 1
// const saludo: Promise<string> = new Promise((resolve) => {
//   let exito: boolean = true;
//   if (exito) {
//     resolve("Somos programadores, hacemos mover el mundo");
//   }
// });

// saludo.then((res: string) => {
//   console.log(res);
// });

//Ejercicio 2
// const err: Promise<string> = new Promise((resolve, reject) => {
//   reject("Ha ocurrido un error desconocido.");
// });

// err.catch((error: string) => {
//   console.log(error);
// });

//Ejercicio 3
// const sub: Promise<string> = new Promise((resolve, reject) => {
//   let prg: string | null = prompt("Ingrese que estrato tiene usted");

//   if (prg !== null) {
//     let est: number = Number(prg);
//     if (!isNaN(est)) {
//       if (est > 0 && est <= 2) {
//         resolve("Tiene derecho a subdisio");
//       } else if (est > 2 && est <= 6) {
//         resolve("No tiene derecho a subsidio");
//       } else {
//         reject(new Error("Se sale de rango"));
//       }
//     } else {
//       reject(new Error("Dato no valido"));
//     }
//   }
// });

// sub
//   .then((res: string) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Ha ocurrido un error:", err.message);
//   });

//Ejercicio 4
// const pot: Promise<number> = new Promise((resolve) => {
//   resolve(2);
// });

// pot
//   .then((x: number) => (x **= 2))
//   .then((x: number) => (x **= 2))
//   .then((x: number) => (x **= 2))
//   .then((x: number) => console.log(`El valor final es ${x}`))
//   .catch((error: string) => console.error(error));

//Ejercicio 5
// const promesa1: Promise<string> = new Promise((resolve) => {
//   resolve("Somos ADSI");
// });

// const promesa2: Promise<string> = new Promise((resolve, reject) => {
//   let resp: boolean = false;

//   if (resp) {
//     resolve("Somos programadores");
//   } else {
//     reject("Promesa 2 no cumplida");
//   }
// });

// const promesa3: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hacemos mover el mundo");
//   }, 1000);
// });

// promesa1.then((res: string) => console.log(res));

// promesa2
//   .then((res: string) => console.log(res))
//   .catch((error) => console.error(error));

// promesa3.then((res: string) => console.log(res));

//Ejercicio 6
// const as: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promesa resuelta");
//   }, 2000);

//   setTimeout(() => {
//     reject(new Error("info error"));
//   }, 1000);
// });

// as.then((res) => console.log(res)).catch((error) => {
//   console.error(error);
//   console.error(error.stack);
// });

// Ejercicio 7
// const promesa1: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promesa 1 resuelta");
//   }, 1000);
// });

// const promesa2: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promesa 2 resuelta");
//   }, 3000);
// });

// const promesa3: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promesa 3 resuelta");
//   }, 2000);
// });

// const promesa4: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Promesa 4 fallida"));
//   }, 5000);
// });

// Promise.all([promesa1, promesa2, promesa3, promesa4])
//   .then((res) => {
//     res.forEach((ress) => {
//       console.log("Promesa resuelta:", ress);
//     });
//   })
//   .catch((error) => {
//     console.error("Occurio un error:", error.message);
//   });

// Promise.race([promesa1, promesa2]).then((res) => {
//   console.log(res);
// });

//Documento 4
//Ejercicio 1
// async function cuadrado(num: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve(num * num);
//     } else {
//       reject("El argumento ingresado no es un numero");
//     }
//   });
// }

// cuadrado(4)
//   .then((res: number) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//Ejercicio 2
// async function num(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(8);
//     }, 6000);
//   });
// }

// num().then((res) => {
//   console.log(res);
// });

//Ejercicio 3
// async function pot(x: number): Promise<void> {
//   let num = await new Promise<number>((resolve, reject) => {
//     if (typeof x === "number") {
//       resolve(x ** 2);
//     } else {
//       reject("El argumento no es un numero");
//     }
//   });

//   console.log(`El cuadrado del numero ${x} es: ${num}`);
// }

// pot(54);

//POO
