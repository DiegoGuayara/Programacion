"use strict";
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
