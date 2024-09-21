//Seccion 1

//Ejercicio 1
/*function edad(x,y){
    console.log(`usted tiene ${x} años y dentro de ${y} años usted va a tener ${x+y} años`)
}
*/

//Ejercicio 2
/*function calcular(x,y){
    console.log(`${x}+${y}=${x+y}, 
${x}-${y}=${x-y}, 
${x}*${y}=${x*y}, 
${x}/${y}=${x/y}, 
${x}%${y}=${x%y}, 
${x}**${y}=${x**y}`)
}

calcular()
*/

//Ejercicio 3

//Seccion 2

//Ejercicio 1
/*let area = (x,y)=>(x*y)/2
console.log(area(3,6))
*/

//Ejercicio 2
/*function ap(x){
    console.log(`Area = ${(3.14*(x**2))}`)
    console.log(`Perimetro = ${(2*3.14)*x}`)
}
ap()
*/

//Ejercicio 3
/*let volc = x => x**3
console.log(volc(4))
*/

//Ejercicio 4
/*function iva(x){
    console.log(`El precio original es ${x} pesos, pero con el descuento serian ${x+(x*0.19)} pesos`)
}
iva()
*/

//Ejercicio 5
/*let des = x => x-(x*0.1)
console.log(des())
*/

//Ejercicio 6

//Seccion 3

//Ejercicio 1
/*let edad = x => {
    if(x < 18){
        console.log('Es menor de edad')
    }else if(x >= 18){
        console.log('Es mayor de edad')
    }
}
edad()
*/

//Ejercicio 2
/*function productos(x){
    if(x === 'Lentejas' || x === 'Arroz'){
        console.log('No paga IVA')
    }else if(x === 'Vino' || x === 'Crema'){
        console.log('Si paga IVA')
    }
}
productos()
*/

//Ejercicio 3
/*let numeros = (x,y) => {
    if(x > y){
        console.log(`El primer numero es el mayor, el cual es ${x}`)
    }else if(y > x){
        console.log(`El segundo numero es el mayor, el cual es ${y}`)
    }else if(x === y){
        console.log('Los numeros son iguales')
    }
}
numeros()
*/

//Ejercicio 4
/*let numeros = (x,y,z) => {
    if(x > y && x > z){
        console.log(`El primer numero es el mayor, el cual es ${x}`)
    }else if(y > x && y > z){
        console.log(`El segundo numero es el mayor, el cual es ${y}`)
    }else if(z > x && z > y){
        console.log(`El tercer numero es el mayor, el cual es ${z}`)
    }else if(x===y && x === z && y === z){
        console.log('Todos los numeros son iguales')
    }
}
numeros()
*/

//Seccion 4

//Ejercicio 1
/*function tr(x,y,z){
    tri=x+y+z
    if(tri === 180){
        console.log(`Los tres angulos ingresados: ${x}°, ${y}°, ${z}°, conforman un triangulo por lo que le resultado es ${tri}°`)
    }else{
        console.log(`Los tres angulos ingresados: ${x}°, ${y}°, ${z}° no conforman un triangulo por lo que le resultado es ${tri}° y tiene que dar 180°`)
    }
}
tr()
*/

//Ejercicio 2
/*let parImpar = x => {
    if(x%2 == 0){
        console.log('Es par')
    }else if(x%2!==0){
        console.log('Es impar')
    }
}
parImpar()
*/

//Ejercicio 3
/*function div5(x){
    if(x%5 === 0){
        console.log('Este numero si es divisible entre 5')
    }else{
        console.log('No es divisible entre 5')
    }
}
div5()
*/

//Seccion 5

//Ejercicio 1
/*let num = 100
for(i=0; i<=num; i++){
    console.log(i)
}
for(i=0; num>=i; num--){
    console.log(num)
}
*/

//Ejercicio 2
/*for(i=0; i<=50; i++){
    console.log(i*3)
}
*/

//Ejercicio 3
/*let est = parseInt(prompt("A cuantos estudiantes va a calificar?"))
for(n=1; n<=est; n++){
    a = parseFloat(prompt("Ingrese nota 1"))
    b = parseFloat(prompt("Ingrese nota 2 "))
    c = parseFloat(prompt("Ingrese nota 3"))
    prom=(a+b+c)/3
    promd = prom.toFixed(3)

    
    console.log(`Estudiante ${n} su nota es ${promd}`)
}
*/

//Ejercicio 4
/*let num = 5
let ac= 1
for(i=1; i<=num; i++){
    ac*=i
    console.log(ac)
}
*/

//Seccion 6

//Ejercicio 1
/*function numn(x){
    for(i=1;i<=x;i++){
        console.log(i)
    }
}
numn()
*/

//Ejercicio 2
/*function sum(x){
    let ac =0
    for(i=0; i<=x; i++){
        ac+=i
        console.log(ac)
    }
}
sum()
*/

//Ejercicio 3
/*for(i=0; i<=50; i++){
    console.log(i*10)
}
*/

//Ejercicio 4
/*function impares(x){
    for(i=1; i<=x; i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}
impares()
*/

//Ejercicio 5
/*let prg = prompt('Quiere salir?, ingrese para S para si y N para no')
while(prg==='N' || prg!=='S'){
    console.log('No ha salido')
    prg = prompt('Quiere salir?, ingrese para S para si y N para no')
}
console.log('Ya salio')
*/

//Ejercicio 6
/*let ac=0
for(i=1; i<=10; i++){
    num = parseFloat(prompt(`Ingrese numero ${i}`))
    ac +=num
}
console.log(`El promedio es ${ac/10}`)
*/

//Ejercicio 7
/*let cantidad = parseInt(prompt('Cuantos numeros va a ingresar?'))
let ac = 0
for(i=1; i<=cantidad; i++){
    num = parseFloat(prompt(`Ingrese el numero ${i}`))
    if(num>0){
        ac+=num
    }else{
        console.log('Tiene que ingresar numeros mayores a 0')
        break
    }

}
console.log(`El promedio es ${ac/cantidad}`)
*/

//Ejercicio 8
/*let cant = 10
let ac = 0
for(i=1;i<=cant;i++){
    ac+=(i**2)
}
console.log(ac)
*/

//Seccion 7

//Ejercicio 1
/*let num = [0,1,2,3]
for(i=0; i<num.length; i++){
    console.log(num[i])
}
//O tambien se puede asi
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
*/

//Ejercicio 2
/*let num = [4,9,5,1,3,7,2,0,8,6]
num.sort()
console.log(num)
num.reverse()
console.log(num)
*/

//Ejercicio 3
/*let num = [1,2,3,4,5,6]

//A
let i = 0
while(i<num.length){
    console.log(num[i])
    i++
}

//B
for(i=0; i<num.length; i++){
    console.log(num[i])
}

//C
for(i=0; i<num.length; i++){
    console.log(num[i] + 1)
}
//Tambien se puede hacer asi
console.log(num.map(x=>x+1))

//D
let num2 = []
for(i=0; i<num.length; i++){
    num2.push(num[i]+1)
}
console.log(num2)

//Tambien se puede hacer asi
let num3 = num.map(x => x+1)
console.log(num3)

//E
let sum = 0
for(i=0; i<num.length; i++){
    sum+=num[i]
}
console.log(sum/num.length)

//Tambien se puede hacer asi
let sum2 = num.reduce((x,y) => x+y, 0)
console.log(sum/num.length)
*/

//Seccion 8
// let num = [[1,2,3],[4,5,6],[7,8,9]]

//Ejercicio 1
/*let x = 0
let y = 0
while(x<num.length){
    while(y<num[x].length){
        console.log(num[x][y])
        y++
    }
    y=0
    x++
}
*/

//Ejercicio 2
/*for(i=0; i<num.length; i++){
    for(j=0; j<num[i].length;j++){
        console.log(num[i][j])
    }
}
*/

//Ejercicio 3
/*let num2 = []
for(i=0; i<num.length; i++){
    let ac = []
    for(j=0; j<num[i].length; j++){
        ac.push(num[i][j]+1)
    }
    num2.push(ac)
}
console.log(num2)
*/

//Ejercicio 4
/*let x = 0
let y = 0
for(i=0; i<num.length; i++){
    for(j=0; j<num[i].length; j++){
        x+=num[i][j]
        y++
    }
}
console.log(x/y)
*/

//Seccion 9

//Ejercicio 1
/*function largo(x){
    return x.length
}
console.log(largo([1]))
*/

//Ejercicio 2
/*let arr1 = [
["A", "B", "C"], 
["D", "E", "F"], 
["G", "H", "I"]];

let arr2 = [
["J", "K", "L"], 
["M", "N", "O"], 
["P", "Q", "R"]];

for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
        interc = arr1[i][j]
        arr1[i][j] = arr2[i][j]
        arr2[i][j] = interc
    }
}
console.log(arr1)
console.log(arr2)
*/

//Ejercicio 3
/*function arr(x){
    pot = x.map(y=>y**2)
    sum = pot.reduce((y,z) => y+z)
    return sum
}

console.log(arr([23,5,6,9,28]))
*/

//Seccion 10
//Ejercicio 1

//Ejercicio 2
/*const rl = require("readline").createInterface(process.stdin, process.stdout);

let opc = ["Piedra", "Papel", "Tijera"];
let v = 0;
let p = 0;
let e = 0;

function oppc() {
  let pc = opc[Math.floor(Math.random() * opc.length)];
  return pc;
}

function part() {
  rl.question("Elija piedra, papel o tijera. ", (x) => {
    const opC = oppc();
    console.log(`pc eligio ${opC}`);

    if (x === "Piedra" || x === "Papel" || x === "Tijera") {
      if (
        (x === "Piedra" && opC === opc[2]) ||
        (x === "Papel" && opC === opc[0]) ||
        (x === "Tijera" && opC === opc[1])
      ) {
        console.log("Ganó un punto");
        v++;
      } else if (
        (x === "Piedra" && opC === opc[1]) ||
        (x === "Papel" && opC === opc[2]) ||
        (x === "Tijera" && opC === opc[0])
      ) {
        console.log("Perdio un punto");
        p++;
      } else {
        console.log("Empate");
        e++;
      }
    } else {
      part();
    }

    if (v < 3 && p < 3) {
      part();
    } else {
      console.log(
        `Ganó ${v} veces, perdio ${p} veces y hubo empate ${e} veces`
      );
      rl.close();
    }
  });
}
part();
*/

//Ejercicio
/*let saldo = 0;

function cajero() {
  let prg = parseInt(
    prompt(`Que opcion quiere realizar
    1. Consultar saldo
    2. Consignar
    3. Retirar
    4. Finalizar`)
  );

  if (prg === 1) {
    alert(`Usted cuenta con ${saldo} pesos`);
    cajero();
  } else if (prg === 2) {
    prg = parseFloat(prompt("Cuanto va a consignar?"));
    saldo += prg;
    alert(`Usted consignó ${prg} pesos y su sueldo actual es ${saldo} pesos`);
    cajero();
  } else if (prg === 3) {
    prg = parseFloat(prompt("Cuanto va a retirar"));
    if (saldo - prg >= 0) {
      saldo -= prg;
      alert(`Usted retiró ${prg} pesos y su sueldo actual es ${saldo} pesos`);
    } else {
      alert(
        `No le alcanza el saldo para realizar el retiro, actualmente usted tiene ${saldo} pesos`
      );
    }
    cajero();
  } else if (prg === 4) {
    alert("Hasta luego");
  } else {
    cajero();
  }
}
cajero();
*/

/*let prcpro = parseFloat(
  prompt("Ingrese el precio total de los productos y servicios a pagar")
);

let impuesto = prompt(`De que categoria son sus productos:
    1. Baja
    2. Media
    3. Alta`);

if (impuesto === "Baja") {
  let prcimp = prcpro + prcpro * 0.19;
  alert(
    `El precio original es ${prcpro} y con el impuesto serian ${prcimp}`
  );
} else if (impuesto === "Media") {
  let prcimp = prcpro + prcpro * 0.28;
  alert(
    `El precio original es ${prcpro} y con el impuesto serian ${prcimp}`
  );
} else if (impuesto === "Alta") {
    let prcimp = prcpro + prcpro * 0.4;
    alert(
      `El precio original es ${prcpro} y con el impuesto serian ${prcimp}`
    );
} else {
  console.log("No dijo de que categoria eran sus productos y servicios");
}
*/

/*let total = 0;

function productos() {
  let prod = prompt("Va a ingresar un producto?");

  if (prod === "Si") {
    let nomprod = prompt("Ingrese el nombre del producto");
    let valprod = parseFloat(prompt("Ingrese el valor del producto"));

    if (valprod > 0) {
      let canprod = parseFloat(
        prompt("Ingrese la cantidad del producto a comprar")
      );

      if (canprod > 0) {
        let prgdesc = prompt("El producto tiene descuento?");

        if (prgdesc === "Si") {
          let descprod = parseInt(prompt("Ingrese el descuento"));
          if (descprod > 0) {
            console.log(
              `Producto = ${nomprod}, valor = ${valprod}, cantidad = ${canprod}, descuento = ${descprod}, valor total = ${
                valprod * canprod - valprod * canprod * (descprod / 100)
              }`
            );
            total += valprod * canprod - valprod * canprod * (descprod / 100);
          }
        } else if (prgdesc == "No") {
          console.log(
            `Producto = ${nomprod}, valor = ${valprod}, cantidad = ${canprod}, valor total = ${
              valprod * canprod
            }`
          );
          total += valprod * canprod;
        }
      }
    }
    productos();
  } else if (prod === "No") {
    console.log(`Precio total = ${total}`);
  } else {
    productos();
  }
}

productos();
*/

// let arr = [1, 2, 3, 4, 5];
// let arrp = [];
// let arri = [];

// for(i=0; i<arr.length; i++){
//   if(arr[i] % 2 === 0){
//     arrp.push(arr[i])
//   }else{
//     arri.push(arr[i])
//   }
// }

// arr.filter((x) => {
//   if (x % 2 === 0) {
//     arrp.push(x);
//   } else {
//     arri.push(x);
//   }
// });

// for (numeros of arr) {
//   if (numeros % 2 === 0) {
//     arrp.push(numeros);
//   } else {
//     arri.push(numeros);
//   }
// }

// console.log(arrp);
// console.log(arri);

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.reverse());

// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// let mayor = Math.max(...arr)
// let menor = Math.min(...arr)
// console.log(menor);
// console.log(mayor);

// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = arr.reduce((x,y) => x+y)
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrp = [];
// let arri = [];

// arr.filter((x) => {
//   x%2===0? arrp.push(x): arri.push(x)
// });

// console.log(arrp);
// console.log(arri);

/*let arr = [1,2,3,4,5,2,4,9,7,1,3,2]
let set = new Set(arr)
let dif = [...set]
console.log(dif);
*/

// let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// let as = arr.sort();

// console.table(as.reverse());
// console.table(as);

// let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9, 2, 'hola'];
// console.log(arr.indexOf('hola'));

// let horas = 0;
// const rl = require("readline").createInterface(process.stdin, process.stdout);
// rl.question("Ingrese la hora de entrada. ", (x) => {
//   rl.question("Ingrese la hora de salida. ", (y) => {
//     parseFloat(x);
//     parseFloat(y);
//     horas += y - x;
//     let sal = horas * (horas * 5000);

//     rl.question("Quiere el resumen semanal o mensual? ", (z) => {
//       if (z === "Semanal") {
//         console.log(
//           `Usted en la semana trabajó ${horas * 7} horas y en la semana ganó ${
//             sal * 7
//           } pesos`
//         );
//         rl.close();
//       } else if (z === "Mensual") {
//         console.log(
//           `Usted en el mes trabajó ${horas * 30} horas y en la semana ganó ${
//             sal * 30
//           } pesos`
//         );
//         rl.close();
//       }
//     });
//   });
// });

let saldo = 0;
let efectivo = 0;

function cajper() {
  let prg = parseInt(
    prompt(`Ingrese un numero.
    1. Consultar saldo.
    2. Consignar
    3. Retirar
    4. Pagar
    5. Finalizar
    `)
  );

  if (prg == 1) {
    alert(
      `Tu saldo actual es ${saldo} pesos, y en efectivo tiene ${efectivo} pesos`
    );
    cajper();
  } else if (prg === 2) {
    prg = parseFloat(prompt("Ingrese cuanto va a consignar"));
    if (prg > 0) {
      saldo += prg;
      alert(`Consignacion: ${prg} pesos
Saldo: ${saldo} pesos.`);
    }
    cajper();
  } else if (prg === 3) {
    prg = parseFloat(prompt("Cuanto va a retirar"));
    if (saldo - prg >= 0) {
      saldo -= prg;
      efectivo += prg;
      alert(`Retiro: ${prg} pesos
Saldo: ${saldo} pesos
Efectivo: ${efectivo} pesos`);
    } else {
      alert("No tiene los fondos suficientes para hacer este retiro");
    }
    cajper();
  } else if (prg === 4) {
    prg = parseInt(
      prompt(`Ingrese que va a pagar:
1. Servicios
2. Deudas`)
    );
    if (prg === 1 || prg === 2) {
      prg = parseFloat(prompt("Ingrese cuanto va a pagar"));
      if (efectivo - prg >= 0) {
        efectivo -= prg;
        alert(`Precio a pagar: ${prg} pesos
Efectivo disponible: ${efectivo} pesos`);
      } else {
        alert("No tiene los fondos suficientes para realizar este pago");
      }
    }
    cajper();
  } else if (prg === 5) {
    alert("Hasta luego");
  } else {
    cajper();
  }
}

cajper();
