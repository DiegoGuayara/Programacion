//Area triangulo
/*let b = prompt("Ingrese un numero para la base")
let h = prompt("Ingrese un numero para la altura")
let res = b * h / 2
if(b >= 0 && h >= 0){
    alert("El area del triangulo es " + res)
}else{
    alert("Ingrese numeros positivos")
}
*/

//Area y perimetro de un circulo
/*let radio = parseFloat(prompt("Ingrese un numero para que sea el radio de un circulo para calcular el area"))
let pi = 3.1416
let area = pi * (radio ** 2)
if(radio >= 0){
    alert("El area del circulo es " + area)
}else{
    alert("Ingrese numeros positivos")
}

let radio2 = parseFloat(prompt("Ingrese un numero para que sea el radio de un circulo para calcular el perimetro"))
let pi2 = 3.1416
let perimetro = pi * radio2
if(radio2 >= 0){
    alert("El perimetro del circulo es " + perimetro)
}else{
    alert("Ingrese numeros positivos")
}
*/

//Volumen cubo
/*let lado = parseInt(prompt("Ingrese un numero"))
let vol = lado ** 3
if(vol >= 0){
    alert("El resultado es "+ vol)
}else{
    alert("Ingrese un valor")
}
*/

//IVA
/*let prd = parseFloat(prompt("Coloque un numero"))
let iva = 0.19
let precioF = prd * iva
let res = prd + precioF
alert("Su precio final es " + res)
*/

//Edad
/*let edad = parseInt(prompt("Cual es su edad"))
if(edad >= 5){
    if(edad >= 18){
        alert("Es mayor de edad")
    }else if(edad < 18){
        alert("Es menor de edad")
    }
}else{
    alert("No cumple con la edad necesaria")
}
*/

//Supermercado
/*let prod = prompt("En este supermercado hay lentejas, crema, arroz y vino. Cual de todas escoge?")
if(prod == "lentejas"){
    alert("Este producto no paga IVA")
}else if(prod == "crema"){
    alert("Este producto si paga IVA")
}else if(prod == "arroz"){
    alert("Este producto no paga IVA")
}else if(prod == "vino"){
    alert("Este producto si paga IVA")
}else{
    alert("No escogio nada")
}
*/

//Supermercado case
/*let prod = prompt("En este supermercado hay lentejas, crema, arroz y vino. Cual de todas escoge?")
productos = prod
switch(productos){

    case ("lentejas"):
    alert("Este producto no paga IVA")
    break
    case("crema"):
    alert("Este producto si paga IVA")
    break
    case("arroz"):
    alert("Este producto no paga IVA")
    break
    case("vino"):
    alert("Este producto si paga IVA")
    break
    default:
        alert("No escogio ningun producto")
    break
}
*/

//Horas trabajadas
/*let horas = parseInt(prompt("Cuantas horas trabajó? Si trabajó 40 horas hacia abajo, el pago por cada hora es de 16000 pesos"))
let horasExtra = parseInt(prompt("Si tuvo horas extras, ingrese cuantas trabajó"))

if(horas < 40){
    alert(`Su pago es de ${horas * 16000} pesos al haber trabajado ${horas} horas.`)
}else if(horas >= 40){
    alert(`Su pago es de ${(horas * 16000) + (horasExtra * 20000)} pesos al haber trabajado ${horas} horas y ${horasExtra} horas extras`)
}
*/

//Programas SENA
/*let matricula = prompt(`A que programa del SENA quiere matricularse? Los programas que estan disponibles son:\n
- ADSO.\n
- Seguridad digital.\n
- Analitica de datos.`)

if(matricula == "ADSO"){
    let bachiller = prompt("Es bachiller?")

    if(bachiller == "Si"){
        alert("Ya quedó matriculado en este programa")
    }else if(bachiller == "No"){
        alert("Tiene que ser bachiller para poder matricularse")
    }else{
        alert("No respondio a la pregunta")
    }

}else if(matricula == "Seguridad digital" || matricula == "Analitica de datos"){
    let grado = prompt("Aprobo 9 grado?")
    let cedula = prompt("Tiene C.C(Cedula de Ciudadania) o C.E(Cedula de Extranjeria)?")
    let acuerdo = prompt("Usted esta de acuerdo con el reglamento del aprendiz?")

    if(grado == "Si" && (cedula == "C.C" || cedula == "C.E") && acuerdo == "Si"){
        alert("Ya quedo matriculado en este programa")
    }else{
        alert("No puede estar matriculado en este programa")
    }
}else{
    alert("No dijo en que programa quiere matricularse")
}
*/

//Fuerzas militares
/*let genero = prompt("Cual es su genero, Masculino(M) o Femenino(F)")

let estatura = parseFloat(prompt(`Cual es su estatura?\n
La estatura minima para los hombres es a partir de 1.70 hacia adelante.\n
La estatura minima para las mujeres es a partir de 1.50 hacia adelante.`))

let edad = parseInt(prompt(`Cual es su edad?\n
Los hombres deben estar entre 18 a 25 años.\n
Las mujeres deben estar entre 18 a 28 años.`))

switch(genero){

    case "M":{
        if(estatura >= 1.70 && estatura <= 2.10){
            alert("Su estatura esta en el rango solicitado")
        }else if(estatura < 1.70 && estatura >= 0){
            alert("Su estatura no esta en el rango solicitado, no se puede matricular")
        }

        if(edad >= 18 && edad <= 25){
            alert("Su edad esta en el rango solicitado")
        }else if(edad < 18 && edad >= 0){
            alert("Es menor de edad, no se puede matricular")
        }
    break

    }case "F":{
        if(estatura >= 1.50 && estatura <= 1.90){
            alert("Su estatura esta en el rango solicitado")
        }else if(estatura < 1.50 && estatura >= 0){
            alert("Su estatura no esta en el rango solicitado, no se puede matricular")
        }

        if(edad >= 18 && edad <= 28){
            alert("Su edad esta en el rango solicitado")
        }else if(edad < 18 && edad >= 0){
            alert("Es menor de edad, no se puede matricular")
        }
    break
    }default:{
        alert("No dijo que genero tiene")
    }
}

alert(`La matricula vale 11.800.000 pesos y dependiendo de su puntaje en el icfes se puede aplicar un descuento o un aumento.\n
Las condiciones son:\n
Si sacó menos de 65 puntos, se le aplica un aumento del 25%.\n
Si su puntaje esta entre los 66 y 70 puntos y es mayor de 22 años, no se le aplica nada.\n
Si su puntaje esta entre los 66 y 70 puntos y tiene 22 años o menos, se le aplica un descuento del 25%.\n
Si su puntaje es mayor que 70 puntos, se le aplica un descuento del 50%.`)

let icfes = parseFloat(prompt("Cual es su resultado Icfes? El rango va de 1 a 100"))

if((icfes < 65) && (edad >= 18 && edad <= 28) && (genero == "M" || genero == "F")){
    alert(`Tiene que pagar ${11800000 + (11800000 * 0.25)} pesos`)

}else if((icfes >= 66 && icfes <= 70) && (edad > 22 && edad <= 28) && (genero == "M" || genero == "F")){
    alert("Tiene que pagar 11.800.000 pesos")

}else if((icfes >= 66 && icfes <= 70) && (edad >= 18 && edad <= 22) && (genero == "M" || genero == "F")){
    alert(`Tiene que pagar ${11800000 - (11800000 * 0.25)} pesos`)

}else if((icfes > 70 && icfes <= 100) && (edad >= 18 && edad <= 28) && (genero == "M" || genero == "F")){
    alert(`Tiene que pagar ${11800000 - (11800000 * 0.5)} pesos`)

}else{
    alert("No dijo que puntaje sacó")
}
*/

//Salario con categorias
/*let salario = parseInt(prompt(`Cual es su salario?\n`))

let categoria = parseInt(prompt(`Que categoria es usted?\n
Si es categoria 1, se le aplica un aumento del 12% a su salario.\n
Si es categoria 2, se le aplica un aumento del 10% a su salario.\n
Si es categoria 3, se le aplica un aumento del 8% a su salario.\n
Si es categoria 4, se le aplica un aumento del 5% a su salario.\n`))

switch(categoria){
    case 1:{
        alert(`Su sueldo(${salario}) con el aumento de su categoria es: ${salario + (salario*0.12)}`)
    break
    }case 2:{
        alert(`Su sueldo(${salario}) con el aumento de su categoria es: ${salario + (salario*0.1)}`)
    break
    }case 3:{
        alert(`Su sueldo(${salario}) con el aumento de su categoria es: ${salario + (salario*0.08)}`)
    break
    }case 4:{
        alert(`Su sueldo(${salario}) con el aumento de su categoria es: ${salario + (salario*0.05)}`)
    break
    }default:{
        alert("No dijo que categoria es")
    }

}
*/

//Sueldo con aumento
/*let sueldo = parseInt(prompt("Ingrese su sueldo."))

if(sueldo >= 0 && sueldo < 300000){
    alert(`Como su sueldo (${sueldo}) es menor a 300000 pesos, aumentandole el 12% su sueldo es de ${sueldo + (sueldo * 0.12)} pesos.`)
}else if(sueldo >= 300000 && sueldo < 500000){
    alert(`Como su sueldo (${sueldo}) es menor a 500000 pesos, aumentandole el 10% su sueldo es de ${sueldo + (sueldo * 0.1)} pesos.`)
}else if(sueldo >= 500000){
    alert(`Como su sueldo (${sueldo}) es mayor a 500000 pesos, aumentandole el 5% su sueldo es de ${sueldo + (sueldo * 0.05)} pesos.`)
}else{
    alert("Ingrese su sueldo")
}
*/

//Promedio
/*let nota = parseFloat(prompt("Ingrese la primera nota. El rango es de 1 a 5"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota. El rango es de 1 a 5"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota. El rango es de 1 a 5"))

let prcnota = nota * 0.3
let prcnota2 = nota2 * 0.3
let prcnota3 = nota3 * 0.4

let promedio = prcnota + prcnota2 + prcnota3

if(promedio >= 0 && promedio < 1){
    alert(`Perdio el curso, su nota fue ${promedio}. Obtendrá una multa del 40%`)
}else if(promedio >= 1 && promedio < 2){
    alert(`Perdio el curso, su nota fue ${promedio}. Obtendrá una multa del 20%`)
}else if(promedio >= 2 && promedio < 3){
    alert(`Perdio el curso, su nota fue ${promedio}. Obtendrá una multa del 10%`)
}else if(promedio >= 3 && promedio < 4){
    alert(`Ganó el curso, su nota fue ${promedio}. Obtendrá un descuento del 20%`)
}else if(promedio >= 4 && promedio < 4.5){
    alert(`Ganó el curso, su nota fue ${promedio}. Obtendrá un descuento del 30%`)
}else if(promedio >= 4.5 && promedio <= 5){
    alert(`Ganó el curso, su nota fue ${promedio}. Obtendrá un descuento del 40%`)
}else{
    alert("No ingresó un numero")
}
*/

//Semillas switch
/*let verduras = prompt(`Las verduras disponibles son:\n
1. Cebolla
2. Papa
3. Tomate
Cual va a escoger?`)
function cantidad(){
    cantidad = parseInt(prompt(`Cuantas semillas quiere comprar?
    Si el precio es mayor a 30000, el gobierno el subsidiara el 32% pero si el precio es mayor a 50000, el gobierno le subsidiara el 68%`))
    
}

switch(verduras){
    case "Cebolla":{
        semillas = prompt(`Las semillas disponibles son:
        - Larga = 1500 pesos
        - De huevo = 1300 pesos`)
        cantidad()
        if(semillas == "Larga"){
            if((cantidad * 1500) <= 30000){
                console.log(`Serian ${1500 * cantidad} pesos`)
    
            }else if((cantidad*1500) > 30000 && (cantidad*1500) < 50000){
                console.log(`Serian ${1500*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1500*cantidad)*0.32} pesos`)
    
            }else if((cantidad*1500) >= 50000){
                console.log(`Serian ${1500*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1500*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }
    
        }else if(semillas == "De huevo"){
            if((cantidad * 1300) <= 30000){
                console.log(`Serian ${1300 * cantidad} pesos`)
    
            }else if((cantidad*1300) > 30000 && (cantidad*1300) < 50000){
                console.log(`Serian ${1300*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1300*cantidad)*0.32} pesos`)

            }else if((cantidad*1300) >= 50000){
                console.log(`Serian ${1300*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1300*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }
        }else{
            console.log("No dijo que tipo de cebolla quiere")
        }
    break

    }case "Papa":{
        semillas = prompt(`Las semillas disponibles son:
        - Criolla = 8000 pesos
        - Pastusa = 9000 pesos
        - Salentuna = 1100 pesos`)
        cantidad()
        if(semillas == "Criolla"){
            if((cantidad * 8000) <= 30000){
                console.log(`Serian ${8000 * cantidad} pesos`)
    
            }else if((cantidad*8000) > 30000 && (cantidad*8000) < 50000){
                console.log(`Serian ${8000*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(8000*cantidad)*0.32} pesos`)
    
            }else if((cantidad*8000) >= 50000){
                console.log(`Serian ${8000*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(8000*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }
    
        }else if(semillas == "Pastusa"){
            if((cantidad * 9000) <= 30000){
                console.log(`Serian ${9000 * cantidad} pesos`)
    
            }else if((cantidad*9000) > 30000 && (cantidad*9000) < 50000){
                console.log(`Serian ${9000*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(9000*cantidad)*0.32} pesos`)
    
            }else if((cantidad*9000) >= 50000){
                console.log(`Serian ${9000*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(9000*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }

        }else if(semillas == "Salentuna"){
            if((cantidad * 1100) <= 30000){
                console.log(`Serian ${1100 * cantidad} pesos`)
    
            }else if((cantidad*1100) > 30000 && (cantidad*1100) < 50000){
                console.log(`Serian ${1100*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1100*cantidad)*0.32} pesos`)
    
            }else if((cantidad*1100) >= 50000){
                console.log(`Serian ${1100*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1100*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }

        }else{
            console.log("No dijo que tipo de papa quiere")
        }
    break

    }case "Tomate":{
        alert("En este caso solo tenemos tomate chonto, vale 1500 pesos cada semilla")
        cantidad()
        if((cantidad * 1500) <= 30000){
            console.log(`Serian ${1500 * cantidad} pesos`)

        }else if((cantidad*1500) > 30000 && (cantidad*1500) < 50000){
            console.log(`Serian ${1500*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1500*cantidad)*0.32} pesos`)

        }else if((cantidad*1500) >= 50000){
            console.log(`Serian ${1500*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1500*cantidad)*0.68} pesos`)
        }else{
            console.log("No dijo que cantidad quiere llevar")
        }
    break

    }default:{
        console.log("No escogio ninguna verdura")
    }
}
*/

//Semillas if
/*let verduras = prompt(`Las verduras disponibles son:\n
1. Cebolla
2. Papa
3. Tomate
Cual va a escoger?`)
function cantidad(){
    cantidad = parseInt(prompt("Cuantas semillas quiere?"))
}

if(verduras == "Cebolla"){
    semillas = prompt(`Las semillas disponibles son:
        - Larga = 1500 pesos
        - De huevo = 1300 pesos`)
        cantidad()
        if(semillas == 'Larga'){
            if((cantidad*1500) <= 30000){
                console.log(`Serian ${1500 * cantidad} pesos`)
    
            }else if((cantidad*1500) > 30000 && (cantidad*1500) < 50000){
                console.log(`Serian ${1500*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1500*cantidad)*0.32} pesos`)
    
            }else if((cantidad*1500) >= 50000){
                console.log(`Serian ${1500*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1500*cantidad)*0.68} pesos`)
            }else{
                console.log("No dijo que cantidad quiere llevar")
            }
        }else if(semillas == 'De huevo'){
            if((cantidad * 1300) <= 30000){
                console.log(`Serian ${1300 * cantidad} pesos`)
    
            }else if((cantidad*1300) > 30000 && (cantidad*1300) < 50000){
                console.log(`Serian ${1300*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1300*cantidad)*0.32} pesos`)
    
            }else if((cantidad*1300) >= 50000){
                console.log(`Serian ${1300*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1300*cantidad)*0.68} pesos`)
            }else{
                alconsole.logert("No dijo que cantidad quiere llevar")
            }
        }else{
            console.log("No dijo que tipo de cebolla quiere")
        }
}else if(verduras == "Papa"){
    semillas = prompt(`Las semillas disponibles son:
    - Criolla = 8000 pesos
    - Pastusa = 9000 pesos
    - Salentuna = 1100 pesos`)
    cantidad()
    if(semillas == "Criolla"){
        if((cantidad * 8000) <= 30000){
            console.log(`Serian ${8000 * cantidad} pesos`)

        }else if((cantidad*8000) > 30000 && (cantidad*8000) < 50000){
            console.log(`Serian ${8000*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(8000*cantidad)*0.32} pesos`)

        }else if((cantidad*8000) >= 50000){
            console.log(`Serian ${8000*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(8000*cantidad)*0.68} pesos`)
        }else{
            console.log("No dijo que cantidad quiere llevar")
        }
    }else if(semillas == "Pastusa"){
        if((cantidad * 9000) <= 30000){
            console.log(`Serian ${9000 * cantidad} pesos`)

        }else if((cantidad*9000) > 30000 && (cantidad*9000) < 50000){
            console.log(`Serian ${9000*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(9000*cantidad)*0.32} pesos`)

        }else if((cantidad*9000 ) >= 50000){
            console.log(`Serian ${9000*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(9000*cantidad)*0.68} pesos`)
        }else{
            console.log("No dijo que cantidad quiere llevar")
        }
    }else if(semillas == "Salentuna"){
        if((cantidad * 1100) <= 30000){
            alert(`Serian ${1100 * cantidad} pesos`)

        }else if((cantidad*1100) > 30000 && (cantidad*1100) < 50000){
            console.log(`Serian ${1100*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1100*cantidad)*0.32} pesos`)

        }else if((cantidad*1100) >= 50000){
            console.log(`Serian ${1100*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1100*cantidad)*0.68} pesos`)
        }else{
            console.log("No dijo que cantidad quiere llevar")
        }

    }else{
        console.log("No dijo que tipo de papa quiere")
    }
}else if(verduras == "Tomate"){
    alert("En este caso solo tenemos tomate chonto, vale 1500 pesos cada semilla")
    cantidad()
        if((cantidad * 1500) <= 30000){
            console.log(`Serian ${1500 * cantidad} pesos`)

        }else if((cantidad*1500) > 30000 && (cantidad*1500) < 50000){
            console.log(`Serian ${1500*cantidad} pesos y como pasó de los 30000 entonces el gobierno le subsidiara el 32%, lo cual serian ${(1500*cantidad)*0.32} pesos`)
            
        }else if((cantidad*1500) >= 50000){
            console.log(`Serian ${1500*cantidad} pesos y como pasó de los 50000 entonces el gobierno le subsidiara el 68%, lo cual serian ${(1500*cantidad)*0.68} pesos`)

        }else{
            console.log("No dijo que cantidad quiere llevar")
        }
}else{
    console.log("No escogio una verdura")
}
*/

//0 a 100 y 100 a 0
/*for(i = 0; i <= 100; i++){
    console.log(i)
}
for(i = 100; i >= 0; i--){
    console.log(i)
}
*/

//Tabla del 3
/*for(i=0; i<=50; i++){
    console.log((i*3))
}
*/

// Promedio n estudiantes
/*let est = parseInt(prompt("A cuantos estudiantes va a calificar?"))
for(n=1; n<=est; n++){
    a = parseFloat(prompt("Ingrese nota 1"))
    b = parseFloat(prompt("Ingrese nota 2 "))
    c = parseFloat(prompt("Ingrese nota 3"))
    prom=(a+b+c)/3

    
    console.log(`Estudiante ${n} su nota es ${prom}`)
}
*/

//Promedio con condicionales
/*let est = parseInt(prompt("A cuantos estudiantes va a calificar?"))
for(n=1; n<=est; n++){
    a = parseFloat(prompt("Ingrese nota 1"))
    b = parseFloat(prompt("Ingrese nota 2 "))
    c = parseFloat(prompt("Ingrese nota 3"))
    let prom=(a+b+c)/3
    let promr = prom.toFixed(2)

    if(prom>=0 && prom <3){
        console.log(`Estudiante ${n} el promedio es ${promr}. Perdio`)
    }else if(prom>=3 && prom <=5){
        console.log(`Estudiante ${n} el promedio es ${promr}. Gano`)
    }else{
        console.log('Ingrese un dato valido')
    }
}
*/

//Cantidad numeros
/*let can = parseInt(prompt("Cuantos numeros va a ingresar?"))
for(i=0; i<=can; i++){
    num = parseInt(prompt("Ingrese un numero"))
    if(num>=0){
        console.log(`El numero ingresado es ${num} y le quedan ${can-i} numeros por ingresar`)
    }else if(num<0){
        console.log(`El numero ingresado es ${(num*-1)} y le quedan ${can-i} numeros por ingresar`)
    }
}
*/

//Promedio
/*let cantidad = parseInt(prompt("Que cantidad de numeros va a ingresar?"))
let sum = 1
for(i = 0; i < cantidad; i++){
    num = parseFloat(prompt("Ingrese un numero"))
    sum += num
    if(num>=0){
        console.log(`Ingreso el numero ${num}`)
    }else if(num<0){
        console.log("Solo puede ingresar numeros positivos")
        break
    }
}
let prom = sum / cantidad
let promd = prom.toFixed(2)
console.log(`El promedio de los numeros ingresados es: ${promd}`)
*/

//Triangulo de asteriscos
/*let triangulo = parseInt(prompt("Cuantos * quiere como base?"))
for(a=1; a<=triangulo; a++){
base= ''
    for(b=1;b<=a;b++){
        base+='*'
    }
    console.log(base)
}for(a=triangulo-1; a>=0; a--){
    base=''
    for(b=1; b<=a; b++){
        base+='*'
    }
    console.log(base)
}
*/

//Numeros amigos
/*function sumaDivisoresPropios(n) {
    let suma = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i
        }
    }
    return suma
}

function sonNumerosAmigos(num1, num2) {
    return sumaDivisoresPropios(num1) === num2 && sumaDivisoresPropios(num2) === num1
}

let num1 = 220
let num2 = 284

if (sonNumerosAmigos(num1, num2)) {
    console.log(`${num1} y ${num2} son números amigos.`)
} else {
    console.log(`${num1} y ${num2} no son números amigos.`)
}
*/

//Impares desde -100
/*let cantidad = parseFloat(prompt("Ingrese un numero"))

for(a=(-100); a<=cantidad; a++){
    if((a%2)!==0){
        console.log(a)
    }
}
*/

//Letras con Z
/*let texto = prompt("Ingrese texto")
let c = 0
let p = 0
let espacios = false


for(i=0; i<texto.length; i++){
    if(texto[i] === 'Z' || texto[i] === 'z'){
        c++
    }
    if(texto[i] !== ' ' && !espacios){
        espacios = true
        p++
    }else if(texto[i] === ' '){
        espacios = false
    }
}
console.log(`Este texto tiene (${c}) Z y (${p}) palabras`)
*/

//Divisibles entre 9
/*let num = parseInt(prompt("Ingrese un numero#️⃣"))
let div = num % 9

while (div != 0) {
  console.log(`Este numero (${num}) no es divisible entre 9, el resultado da (${num/9})`)
  num = parseInt(prompt("Ingrese otro numero"))
  div = num % 9
}

console.log(`Este numero (${num}) si es divisible entre 9, el resultado da (${num/9})`)
*/

//Ejemplos funciones
/*let mensaje = 'Somos programadores'

for(let i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
}

let mensaje = 'Hola'
mensaje[1] = 'Z'
console.log(mensaje)

let mensaje = 'Javascript es un buen lenguaje'
console.log(mensaje[3])
console.log(mensaje[6])
console.log(mensaje[8])
*/

//ADN parte 1
/*let longitud = parseInt(prompt("Ingrese la longitud"))
let base = prompt("Ingrese la base")
let cadena = ''

//Condicion para las bases
if(base === "A" || base === "T" || base === "C" || base === "G"){
    for(b=1; b<=longitud; b++){
        //La base que hayamos puesto quedara almacenada en cadena
        cadena+=base
    }
    //Salida(AAAAAAA, TTTTTTTT, CCCCCCCCC, GGGGGGGGGG. Dependiendo de la longitud que la persona ponga)
    console.log(cadena)
}else{
    console.log("Ingrese una base correcta")
}
*/

//ADN parte 2
/*let longitud = parseInt(prompt("Ingrese la longitud"))
let bases = 'ATCG'
let cadena = ''

//Esto es lo que almacenará las bases siendo: 0=A, 1=T, 2=C, 3=G
//El math.floor sirve para quitarle los decimales al numero que haya salido, osea volviendolo entero
let base1 = bases[(Math.floor(Math.random() * bases.length))]
let base2 = bases[(Math.floor(Math.random() * bases.length))]

//Para que no se repitan las letras
while (base2 === base1) {
    base2 = bases[(Math.floor(Math.random() * bases.length))]
}


if (longitud > 0) {
    for (b = 0; b < longitud; b++) {

        //Si el resto de b es 0, la base que haya salido en base1 quedara almacenada en cadena
        if (b % 2 == 0) {
            cadena += base1

        //Si el resto de b no es 0, la base de base2 quedara almacenada en cadena
        } else {
            cadena += base2
        }


    }
    //Salida(ACACACACA, TGTGTGTGTGTGT, ATATATATATATAT, AGAGAGAGAGAGAGAG, etc)
    console.log(cadena)
} else {
    console.log("Ingrese la longitud")
}
*/

//ADN parte 3
/*let longitud = parseInt(prompt("Ingrese la longitud, tiene que ser multiplo de 10"))
let restlo = longitud % 10
let cadena = ''

//Condicion falsa
while (restlo !== 0) {
    if (restlo !== 0) {
        console.log(`La longitud ingresada (${longitud}) no es multiplo de 10`)
    }
    longitud = parseInt(prompt("Ingrese otra vez la longitud"))
    restlo = longitud % 10
}

//Condicion verdadera
if (restlo == 0) {
    //Estas son las bases basandonos en lo que decia el ejercicio.
    //C es 4 veces G, T es 2 veces G y A, A es 3 veces G

    g = longitud / 10
    c = 4 * g
    t = 2 * g
    a = 3 * g

    //Estos ciclos son para que las bases queden almacenadas en cadena
    for (i = 0; i < g; i++) {
        cadena += 'G'
    }
    for (i = 0; i < c; i++) {
        cadena += 'C'
    }
    for (i = 0; i < t; i++) {
        cadena += 'T'
    }
    for (i = 0; i < a; i++) {
        cadena += 'A'
    }
    //Salida(GCCCCTTAAA, GGCCCCCCCCTTTTAAAAAA, etc)
    console.log(cadena)
}
*/

//Funciones constructoras
/*let nombre = prompt("Cual es su nombre?")
let apellidos = prompt("Cual el su apellido")
let edad = parseInt(prompt("Cual es su edad"))
let telefono = parseInt(prompt("Cual es su telefono"))
let paisResidencia = prompt("Cual es su pais de residencia?")
let idiomas = prompt("Que idiomas habla?")

function usuario (nombre, apellidos, edad, telefono, paisResidencia, idiomas) {
    this.nombreCompleto = {
        'nombre' : nombre,
        'apellidos' : apellidos,
    }
    this.edad = edad
    this.telefono = telefono
    this.paisResidencia = paisResidencia
    this.idiomas = idiomas
}

let usuario1 = new usuario (
    nombre,
    apellidos,
    edad,
    telefono,
    paisResidencia,
    idiomas
)
console.log(usuario1)
*/

//Ejercicios cadenas
/*let mensaje = 'hola a todos'
for(i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
}
*/

/*let mensaje = 'Javascript es un buen lenguaje'
console.log(mensaje[3])
console.log(mensaje[6])
console.log(mensaje[8])
for(i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
}
*/

/*let mensaje = 'Somos SENA'
for(i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
    if(mensaje[i] === 'E'){
        console.log('Si es E')
    }else{
        console.log("No es E")
    }
}
*/

/*let mensaje = 'Somos SENA'
let c = 0
for(i=0; i<mensaje.length; i++){
    console.log(mensaje[i])
    if(mensaje[i] === 'o' || mensaje[i] === 'O'){
        c++
    }
}
console.log(`Este texto tiene (${c}) O`)
*/

/*let mensaje = "Javascript es genial"
let c = 0
let p = false

for(i=0; i<mensaje.length; i++){
    if(mensaje[i] !== ' ' && !p){
        p=true
        c++
    }else if(mensaje[i] === ' '){
        p = false
    }
}

console.log(`Esta cadena esta compuesta por ${c} palabras`)
*/

