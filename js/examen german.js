//Ejercicio 1
/*let edad = 21

switch(edad){
    case 15:{
        console.log('Tiene 15')
        break
    }case 20:{
        console.log('Tiene 20')
        break
    }case 30:{
        console.log('Tiene 30')
        break
    }default:{
        console.log('Introduzca una edad valida')
    }
}
*/

//Ejercicio 2
/*for(i=(-28); i<=222; i++){
    console.log(i)
}
for(i=222; i>=(-28); i--){
    console.log(i)
}
*/

//Ejercicio 3
/*let n = parseFloat(prompt('Ingrese un numero'))
let m = parseFloat(prompt("Ingrese otro numero"))

while(n<=m){
    console.log(n++)
}
*/

//Ejercicio 4
/*let p = 'Si'
let c = 'Si'

if (p == 'Si' && c == 'No') {
    console.log(`Serian 80000 pesos, pero con el descuento del 10% serian ${80000 - (80000 * 0.1)} pesos`)
} else if (p == 'Si' && c == 'Si') {
    console.log(`Serian 170000 pesos, pero con el descuento del 25% serian ${170000 - (170000 * 0.25)} pesos`)
} else {
    console.log("No dijo que queria comprar")
}
*/

//Ejercicio 5
/*let hora = prompt('Trabajo horas nocturnas?')
const horasno = (a)=>2000*a

if(hora === 'No'){
    console.log('Usted no tiene derecho a bonificacion este mes')
}else if(hora === 'Si'){
    let horasn = parseInt(prompt('Ingrese cuantas horas nocturnas trabajo'))
    if(horasn > 0){
        console.log(`Su bonificacion este mes es de ${horasno(horasn)} pesos`)
    }
}
*/

//Ejercicio 6
/*let num = parseInt(prompt('Ingrese un numero'))
function div(a){
    let suma=0
    for(i=1; i<a; i++){
        if(a%i === 0){
            suma+=i
        }
    }
    if(suma===a){
        console.log(a)
    }
}
for(i=1; i<=num; i++){
    div(i)
}
*/

