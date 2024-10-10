//1
// async function retraso(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hola");
//     }, 3000);
//   });
// }

// async function ejecutar() {
//   console.log("Espere un rato por favor");
//   const mensaje = await retraso();
//   console.log(mensaje);
// }

// ejecutar();

//2
// async function nums(x: number, y: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x * y);
//     }, 1000);
//   });
// }

// async function mul() {
//   console.log("El resultado es:");
//   const res = await nums(7, 4);
//   console.log(res);
// }

// mul();

//3
// async function parImpar(num: number): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof num === "number") {
//         if (num % 2 === 0) {
//           resolve("Es par");
//         } else {
//           resolve("Es impar");
//         }
//       } else {
//         reject("Dato invalido");
//       }
//     }, 1000);
//   });
// }

// async function ejecutar() {
//   try {
//     let res = await parImpar(5);
//     console.log(res);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// ejecutar();

//4
