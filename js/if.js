//Horas trabajadas
/*Ejercicio 1

let nombre = prompt("Cual es su nombre?")
let horas = prompt("Señor " + nombre + " cuantas horas trabajó?")


if(horas <= 10){
    alert("Señor " + nombre + " su pago será de " + 30000 * horas + " pesos")
}else if(horas > 10){
    alert("Señor "+ nombre +" su pago será de " + 33000 * horas + " pesos")
}else{
    alert("Usted no trabajó")
}
*/

//Positivo o negativo
/*Ejercicio 2

let prg = prompt("Ingresa un numero positivo (+) o negativo(-)")
if (prg > 0){
    alert("Es un numero positivo")
}else if(prg < 0){
    alert("Esto es un numero negativo")
}else{
    alert("No ingresaste un numero")
}
*/

//Lavadora grande o pequeña
/*Ejercicio 3

alert('bienvenido selecione una opcion, opcion 1 lavadora grande, opcion 2 lavadora pequeña')
let opciones = prompt('ingrese una opcion')

if(opciones == 1){
    alert(' has escogido la lavadora grande,la lavadora tiene un costo de 4000 por hora')
} else if(opciones == 2){
    alert('has escogido la lavadora pequeña,la lavadora tiene un costo de 3000 por hora')
 }else{
    alert('ingrese una opcion valida')
}

alert('de tres lavadoras en adelante tiene un descuento del 3%')
let descuento = prompt('cuantas lavadoras nececita')

if(descuento<=3){
    let precio1 = 4000
    alert(descuento*precio1)
}else if(descuento>3){
    let precio = 3000
    let precio1 = 4000
    alert(' su descuento es de ' + descuento*precio1*0.10)
}else{
    alert('introduzca un dato valido')
}
*/

//Par o impar
/*Ejercicio 4

let prg = prompt("Ingrese un numero del 1 al 10")

if((prg === "2") || (prg === "4") || (prg === "6") || (prg === "8") || (prg === "10")){
    alert("Es un numero par")
}else if((prg === "1") || (prg === "3") || (prg === "5") || (prg === "7") || (prg === "9")){
    alert("Es un numero impar")
}else{
    alert("Ingrese un valor")
}
*/

//Desempeño
/*Ejercicio 5
let prgMateria = prompt("En cual materia quiere saber su desempeño? Las materias son: Fisica, Quimica, Biologia, Matematicas y Informatica")
let materia = ""
alert("El rango de notas es 1 - 10. Teniendo en cuenta esto ingrese sus notas.")
let nota1 = parseFloat(prompt("Ingrese la primera nota"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota"))
let nota4 = parseFloat(prompt("Ingrese la cuarta nota"))
let nota5 = parseFloat(prompt("Ingrese la quinta nota"))
let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if(prgMateria == "Fisica"){
        if(promedio >= 0 && promedio < 2){
        alert("Su desempeño en Fisica ha sido bajo")
    }else if(promedio >= 2 && promedio < 4){
        alert("Su desempeño en Fisica ha sido basico")
    }else if(promedio >= 4 && promedio < 6){
        alert("Su desempeño en Fisica ha sido alto")
    }else if (promedio >= 6 && promedio <=10){
        alert("Su desempeño en Fisica ha sido superior. Felicitaciones")
    }else{
        alert("La nota ingresada no esta en el rango valido")
    }
}else if(prgMateria == "Quimica"){
    if(promedio >= 0 && promedio < 2){
        alert("Su desempeño en Quimica ha sido bajo")
    }else if(promedio >= 2 && promedio < 4){
        alert("Su desempeño en Quimica ha sido basico")
    }else if(promedio >= 4 && promedio < 6){
        alert("Su desempeño en Quimica ha sido alto")
    }else if (promedio >= 6 && promedio <=10){
        alert("Su desempeño en Quimica ha sido superior. Felicitaciones")
    }else{
        alert("La nota ingresada no esta en el rango valido")
    }
}else if(prgMateria == "Biologia"){
    if(promedio >= 0 && promedio < 2){
        alert("Su desempeño en Biologia ha sido bajo")
    }else if(promedio >= 2 && promedio < 4){
        alert("Su desempeño en Biologia ha sido basico")
    }else if(promedio >= 4 && promedio < 6){
        alert("Su desempeño en Biologia ha sido alto")
    }else if (promedio >= 6 && promedio <=10){
        alert("Su desempeño en Biologia ha sido superior. Felicitaciones")
    }else{
        alert("La nota ingresada no esta en el rango valido")
    }
}else if(prgMateria == "Matematicas"){
    if(promedio >= 0 && promedio < 2){
        alert("Su desempeño en Matematicas ha sido bajo")
    }else if(promedio >= 2 && promedio < 4){
        alert("Su desempeño en Matematicas ha sido basico")
    }else if(promedio >= 4 && promedio < 6){
        alert("Su desempeño en Matematicas ha sido alto")
    }else if (promedio >= 6 && promedio <=10){
        alert("Su desempeño en Matematicas ha sido superior. Felicitaciones")
    }else{
        alert("La nota ingresada no esta en el rango valido")
    }
}else if(prgMateria == "Informatica"){
    if(promedio >= 0 && promedio < 2){
        alert("Su desempeño en Informatica ha sido bajo")
    }else if(promedio >= 2 && promedio < 4){
        alert("Su desempeño en Informatica ha sido basico")
    }else if(promedio >= 4 && promedio < 6){
        alert("Su desempeño en Informatica ha sido alto")
    }else if (promedio >= 6 && promedio <=10){
        alert("Su desempeño en Informatica ha sido superior. Felicitaciones")
    }else{
        alert("La nota ingresada no esta en el rango valido")
    }
}else{
    alert("No seleccionó ninguna de la materias anteriores")
}
*/

//Mayor o menor
/*Ejercicio 6

let num = prompt("Ingrese el primer numero")
let num2 = prompt("Ingrese el segundo numero")
let num3 = prompt("Ingrese el tercer numero")
let num4 = prompt("Ingrese el cuarto numero")
let num5 = prompt("Ingrese el quinto numero")

if(num >= num2 && num >= num3 && num >= num4 && num >= num5){
    alert("El primer numero ingresado es el mayor: " + num)
}else if(num2 >= num && num2 >= num3 && num2 >= num4 && num2 >= num5){
    alert("El segundo numero ingresado es el mayor: " + num2)
}else if(num3 >= num && num3 >= num2 && num3 >= num4 && num3 >= num5){
    alert("El tercer numero ingresado es el mayor: " + num3)
}else if(num4 >= num && num4 >= num2 && num4 >= num3 && num4 >= num5){
    alert("El cuarto numero ingresado es el mayor: " + num4)
}else if (num5 >= num && num5 >= num2 && num5 >= num3 && num5 >= num4){
    alert("El quinto numero ingresado es el mayor: " + num5)
}else{
    alert("Ingresó un valor erroneo")
}
*/

//Mensualidad
/*Ejercicio 7

let genero = prompt("Bienvenido, cual es su genero, masculino o femenino?")
let nombre = prompt("Cual es su nombre?")
let edad = prompt("Señor/a " + nombre + " cuantos años tiene?")

if(genero === "Masculino" || genero === "Femenino"){
    if(edad >= 30 && edad <= 50){
        alert("Su mensualidad será de 100.000 pesos")
    }else if(edad > 50 ){
        alert("Su mensualidad sera de 120.000 pesos")
    }else{
        alert("Usted no recibe mensualidad")
    }
}else{
    alert("Genero no reconocido")
}
*/

//Gimnasio
/*Ejercicio 8

let mensualidad = prompt(`Si usted quiere registrarse a este gimnasio estan estos planes de registro los cuales son: \n
15 dias serian 18.000 pesos.\n
30 dias serian 35.000 pesos.\n
3 meses serian 86.000 pesos.\n
Cual de estos planes escoge?`)

if(mensualidad == "15 dias"){
    alert("Serian 18.000 pesos")
}else if(mensualidad == "30 dias"){
    alert("Serian 35.000")
}else if(mensualidad == "3 meses"){
    alert("Serian 86.000 pesos")
}else{
    alert("No se registró en el gimnasio")
}
*/

//Triangulo
/*Ejercicio 9

let trg = alert("Ingrese 3 numeros para que la suma de esos valores sea el angulo total de un triangulo")
let g1= parseInt(prompt("Ingrese el primer numero"))
let g2 = parseInt(prompt("Ingrese el segundo numero"))
let g3 = parseInt(prompt("Ingrese el tercer numero"))

if(g1 + g2 + g3 == 180){
    alert("Ganaste")
}else if(g1 + g2 + g3 != 180){
    alert("Perdiste")
}else{
    alert("Error")
}
*/

//Copias
/*Ejercicio 10

let valorcps = prompt(`Estos son los precios para sacar copias: \n
1. De 0-499 copias serian $120 por copia.\n
2. De 500-749 copias serian $100 por copia.\n
3. de 750-999 copias serian $80 por copia.\n
4. De 1000 copias hacia adelante serian $50 por copia.\n
Cuantas copias necesita?`)

if(valorcps >= 0 && valorcps <= 499){
    alert("Tiene que pagar " + valorcps * 120 + " pesos")
}else if(valorcps >= 500 && valorcps <= 749){
    alert("Tiene que pagar " + valorcps * 100 + " pesos")
}else if(valorcps >= 750 && valorcps <= 999){
    alert("Tiene que pagar " + valorcps * 80 + " pesos")
}else if(valorcps >= 1000){
    alert("Tiene que pagar " + valorcps * 50 + " pesos")
}else{
    alert("No sacó ninguna copia")
}
*/

//Resolucion de problemas
/*Ejercicio 11

let inf = prompt(`Este es el sistema de resolucion de problemas para computador.\n
Las siguientes opciones son los posibles problemas que pueda tener su computador, seleccione una de las opciones:\n
1. Si emite un pitido y la unidad gira, seleccione esta opción.\n
2. Si emite un pitido y la unidad no gira, sleccione esta opción.\n
3. Si no emite un sonido y el disco duro no gira, seleccione esta opción.\n
4. Si no emite un pitido y el disco duro gira, seleccione esta opcion.`)

if(inf == "1"){
    alert("Tiene que ponerse en contacto con el tecnico de apoyo")
}else if(inf == "2"){
    alert("Verifique los contactos de la unidad")
}else if(inf == "3"){
    alert("Tiene que traer el computador para repararlo en la central")
}else if(inf == "4"){
    alert("Compruebe las conexiones de los altavoces")
}else{
    alert("Su computador no tiene ningun problema")
}
*/

//Empresa automotriz
/*Ejercicio 12

let modelo = parseInt(prompt(`Una empresa automotriz produjo algunos modelos de automoviles los cuales sus neumaticos no son redondos, y posiblemente su automovil sea uno de esos.\n
El numero de modelo esta conformado por un numero de 3 cifras, y los modelos defectuosos estan entre los siguientes rangos: \n
1. Del 115 - 199\n
2. Del 215 - 225\n
3. Del 770 - 790\n
Para saber si su automovil es un modelo defectuoso, ingrese el numero del modelo del automovil, siguiendo el rango de modelos: `))

if(modelo === 119 || modelo === 179 || modelo === 189 || modelo === 195 || modelo === 221 || modelo === 780){
    alert("Este automóvil esta defectuoso, debe llevar a garantía")
}else{
    alert("Su automóvil no está defectuoso")
}
*/

//Operadores telefonicos
/*Ejercicio 13

let operadores = prompt(`Selecciona que operador eres en tu telefono: \n
1. Claro, 2. Tigo, 3. Movistar`)
let opciones = prompt(`Cual servicio quieres pagar :\n
1. Cargo fijo, 2. Valor minuto internacional, 3. Valor paquete de datos`)

if(operadores == "1"){
    if(opciones == "1"){
        alert("Este servicio vale 30.000 pesos")
    }else if(opciones == "2"){
        alert("Este servicio vale 100 pesos")
    }else if(opciones == "3"){
        alert("Este servicio vale 18.000 pesos")
    }else{
        alert("No selecciono ningun servicio")
    }
}else if(operadores == "2"){
    if(opciones == "1"){
        alert("Este servicio vale 45.000 pesos")
    }else if(opciones == "2"){
        alert("Este servicio vale 200 pesos")
    }else if(opciones == "3"){
        alert("Este servicio vale 12.000 pesos")
    }else{
        alert("No selecciono ningun servicio")
    }
}else if(operadores == "3"){
    if(opciones == "1"){
        alert("Este servicio vale 40.000 pesos")
    }else if(opciones == "2"){
        alert("Este servicio vale 250 pesos")
    }else if(opciones == "3"){
        alert("Este servicio vale 8.000 pesos")
    }else{
        alert("No selecciono ningun servicio")
    }
}else{
    alert("No selecciono ningun operador")
}
*/

//SandwichOrder
/*Ejercicio 14

let sandwinch = prompt(`Bienvenido a SandwichOrder, que tamaño de sandwich desea, Grande o Pequeño?\n
El sandwich grande vale 12.000 pesos y el pequeño vale 6.000`)

let adicional = prompt(`Si quiere ingredientes adicionales estos son los siguientes:\n
1. Jalapeño es gratis.\n
2. Tocineta vale 3.000 pesos.\n
3. Pavo vale 3.000 pesos.\n
4. Queso vale 2.500 pesos.\n
Solo puede escoger un ingrediente adicional, y si no quiere agregarle algo adicional entonces diga No`)

if(sandwinch == "Grande"){
    if(adicional == "No" || adicional == "1"){
        alert("Serian 12.000 pesos. Gracias por comprar en SandwichOrder.")
    }else if(adicional == "2" || adicional == "3"){
        alert("Serian " + (12000 + 3000) + " pesos. Gracias por comprar en SandwichOrder.")
    }else if(adicional == "4"){
        alert("Serian " + (12000 + 2500) + " pesos. Gracias por comprar en SandwichOrder.")
    }else{
        alert("No esta en la lista")
    }
}else if(sandwinch == "Pequeño"){
    if(adicional == "No" || adicional == "1"){
        alert("Serian 6.000 pesos. Gracias por comprar en SandwichOrder.")
    }else if(adicional == "2" || adicional == "3"){
        alert("Serian " + (6000 + 3000) + " pesos. Gracias por comprar en SandwichOrder.")
    }else if(adicional == "4"){
        alert("Serian " + (6000 + 2500) + " pesos. Gracias por comprar en SandwichOrder.")
    }else{
        alert("No esta en la lista")
    }
}else{
    alert("No ordenó nada")
}
*/

//Black jack
// Ejercicio 15



/*Ejemplo 15

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra"
    }else if(jugada == 2){
        resultado = "papel"
    }else if(jugada == 3){
        resultado = "Tijeras"
    }else{
        resultado = "Elegiste mal"
    }
    return resultado
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let min = 1
let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = Math.floor(Math.random() * (max - min + 1) + min)
    jugador = prompt("Eliges: 1 para piedra, 2 para papel, 3 para tijera")

    //alert("Elegiste " + jugador)
    alert("Pc elige " + eleccion(pc))
    alert("Tu eliges " + eleccion(jugador))

    if(jugador == pc){
        alert("EMPATE")
    }else if(jugador == 1 && pc == 3){
        alert("GANASTE")
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos = triunfos + 1
    }else{
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces")
*/
