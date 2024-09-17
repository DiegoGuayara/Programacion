//Tipo de lavado
/*let lavado = prompt("Cual tipo de lavado quiere, Basico o Premium(incluye secado y planchado)")
let prendas = parseInt(prompt("Cuantas prendas va a meter?"))
let prcBasico = 2000
let prcPremium = 4000

switch(lavado){
    case "Basico":{
        if(prendas >= 1 && prendas <= 20){
            if(prendas >= 1 && prendas <= 20){
                alert("El precio total seria de: " + prcBasico * prendas + " pesos")
            }else{
                alert("No metio ninguna prenda")
            }
        }else{
        }
    break
    }case "Premium":{
        if(prendas >= 1 && prendas <= 20){
            if(prendas >= 1 && prendas <= 20){
                alert("El precio total seria de: " + prcPremium * prendas + " pesos")
            }else{
            }
        }else{
            alert("Esta lavadora solo maneja 1 a 20 prendas")
        }
    break
    }default:{
        alert("No selecciono que tipo de lavado quiere utilizar")
    }
}
*/

//Pago matricula
/*let matricula = parseInt(prompt(`La matricula vale 7000000 y pagarla su matricula estan estas opciones las cuales son: \n
1. Pago completo(5% de descuento).\n
2. Pago en 2 cuotas.\n
3. Pago en 3 cuotas.\n
Cual pago escoge?`))

let descuento = 7000000 - 350000
let interes2 = 3500000 + 140000
let interes3 = 2333333 + 140000
switch(matricula){
    case 1:{
        alert("El pago completo de la matricula es: " + descuento)
    break
    }case 2:{
        alert("El pago en 2 cuotas con el 2% de interes cada mes es: " + interes2)
    break
    }case 3:{
        alert("El pago en 3 cuotas con el 2% de interes cada mes es " + interes3)
    break
    }default:
        alert("No selecciono que tipo de pago quiere")
}
*/

//Venta de zapatos
/*let marca = prompt(`Esta es una venta de zapatos deportivos, los modelos que tenemos son:
    -Clasicos: 500000 pesos.
    -Running: 800000 pesos.
    -Basketball: 1000000 pesos.
    Que modelos quiere escoger?.`)

const preguntas = () => {
    talla = parseInt(prompt("Que talla de zapatos es usted? El rango de tallas es 35 - 44"))
    cantidad = parseInt(prompt("Cuantos pares de estos tenis va a llevar? El maximo de pares que puede llevar es 5"))

    clasicos = 500000
    running = 800000
    basketball = 1000000
    prcl = cantidad * clasicos
    prru = cantidad * running
    prba = cantidad * basketball
    dccl = prcl * 0.1
    dcru = prru * 0.1
    dcba = prba * 0.1
}


switch (marca) {
    case "Clasicos": {
        preguntas()
        if (talla >= 35 && talla <= 44) {
            if (talla >= 35 && talla <= 44) {
                alert("Ya los conseguimos")
            }
        } else {
            alert("En este momento no hay tenis de su talla")
        }

        if (cantidad < 3) {
            alert("El precio total es: " + prcl)
        } else if (cantidad >= 3 || cantidad <= 5) {
            alert("El precio total con descuento del 10% por comprar 3 o mas pares de tenis es: " + (prcl - dccl) + " pesos")
        } else {
            alert("No dijo cuantos pares quiere comprar")
        }
        break

    } case "Running": {
        preguntas()
        if (talla >= 35 && talla <= 44) {
            if (talla >= 35 && talla <= 44) {
                alert("Ya los conseguimos")
            }
        } else {
            alert("En este momento no hay tenis de su talla")
        }

        if (cantidad < 3) {
            alert("El precio total es: " + prru)
        } else if (cantidad >= 3 || cantidad <= 5) {
            alert("El precio total con descuento del 10% por comprar 3 o mas pares de tenis es: " + (prru - dcru) + " pesos")
        } else {
            alert("No dijo cuantos pares quiere comprar")
        }

        break

    } case "Basketball": {
        preguntas()
        if (talla >= 35 && talla <= 44) {
            if (talla >= 35 && talla <= 44) {
                alert("Ya los conseguimos")
            }
        } else {
            alert("En este momento no hay tenis de su talla")
        }

        if (cantidad < 3) {
            alert("El precio total es: " + prba)
        } else if (cantidad >= 3 || cantidad <= 5) {
            alert("El precio total con descuento del 10% por comprar 3 o mas pares de tenis es: " + (prba - dcba) + " pesos")
        } else {
            alert("No dijo cuantos pares quiere comprar")
        }
        break

    } default: {
        alert("No dijo que modelo de tenis quiere")
    }
}
*/

//Fabrica de escobas
/*let fabrica = prompt(`Esta es una fabrica de escobas y nosotros tenemos:
Escoba dura, Escoba suave y Cepillos.
Cual de estos quiere escoger?`)

function preguntas(){
    cerdas = prompt("Para el producto que usted escogio, quiere que tenga cerda Sintetica o Natural?")
    cantidad = parseInt(prompt("Que cantidad quiere llevar de este producto?, la cantidad minima de productos es 3 y la maxima es 30"))
    dursin = 8000
    durnat = 10000
    suasin = 6000
    suanat = 8000
    cepsin = 12000
    cepnat = 15000
    manlar = 2000
    ganpun = 500
    dursinporcan = dursin * cantidad
    durnatporcan = durnat * cantidad
    suasinporcan = suasin * cantidad
    suanatporcan = suanat * cantidad
    cepsinporcan = cepsin * cantidad
    cepnatporcan = cepnat * cantidad
    adicional = prompt(`Nosotros tenemos como productos adicionales: Mango largo(2.000 pesos) y Gancho en punta(500 pesos)
        Si quiere agregar estos productos adicionales diga cual de los dos quiere y si no los necesita diga No`)
    
}

switch(fabrica){
    case "Escoba dura":{
        preguntas()

        if(cantidad >= 3 && cantidad <= 30){
            if(cantidad >= 3 && cantidad <= 30 && cerdas == "Sintetica"){
                alert("El precio hasta ahora va en: " + dursinporcan + " pesos")
            }else if(cantidad >= 3 && cantidad <= 30 && cerdas == "Natural"){
                alert("El precio hasta ahora va en: " + durnatporcan + " pesos")
            }
        }else{
            alert("No dijo que cantidad quiere llevar")
        }

        if(adicional == "Mango largo" && cerdas === "Sintetica"){
            alert("El precio total es " + (dursinporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Sintetica"){
            alert("El precio total es " + (dursinporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Sintetica"){
            alert("El precio total es " + dursinporcan + " pesos. Gracias por comprar")

        }else if(adicional == "Mango largo" && cerdas === "Natural"){
            alert("El precio total es " + (durnatporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Natural"){
            alert("El precio total es " + (durnatporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Natural"){
            alert("El precio total es " + durnatporcan + " pesos. Gracias por comprar")
        }else{
            alert("No dijo si queria un producto adicional")
        }

    break
    
    }case "Escoba suave":{
        preguntas()

        if(cantidad >= 3 && cantidad <= 30){
            if(cantidad >= 3 && cantidad <= 30 && cerdas == "Sintetica"){
                alert("El precio hasta ahora va en: " + suasinporcan + " pesos")
            }else if(cantidad >= 3 && cantidad <= 30 && cerdas == "Natural"){
                alert("El precio hasta ahora va en: " + suanatporcan + " pesos")
            }
        }else{
            alert("No dijo que cantidad quiere llevar")
        }

        if(adicional == "Mango largo" && cerdas === "Sintetica"){
            alert("El precio total es " + (suasinporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Sintetica"){
            alert("El precio total es " + (suasinporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Sintetica"){
            alert("El precio total es " + suasinporcan + " pesos. Gracias por comprar")

        }else if(adicional == "Mango largo" && cerdas === "Natural"){
            alert("El precio total es " + (suanatporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Natural"){
            alert("El precio total es " + (suanatporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Natural"){
            alert("El precio total es " + suanatporcan + " pesos. Gracias por comprar")
        }else{
            alert("No dijo si queria un producto adicional")
        }
    break

    }case "Cepillos":{
        preguntas()
        
        if(cantidad >= 3 && cantidad <= 30){
            if(cantidad >= 3 && cantidad <= 30 && cerdas == "Sintetica"){
                alert("El precio hasta ahora va en: " + cepsinporcan + " pesos")
            }else if(cantidad >= 3 && cantidad <= 30 && cerdas == "Natural"){
                alert("El precio hasta ahora va en: " + cepnatporcan + " pesos")
            }
        }else{
            alert("No dijo que cantidad quiere llevar")
        }

        if(adicional == "Mango largo" && cerdas === "Sintetica"){
            alert("El precio total es " + (cepsinporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Sintetica"){
            alert("El precio total es " + (cepsinporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Sintetica"){
            alert("El precio total es " + cepsinporcan + " pesos. Gracias por comprar")

        }else if(adicional == "Mango largo" && cerdas === "Natural"){
            alert("El precio total es " + (cepnatporcan + (manlar * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "Gancho en punta" && cerdas == "Natural"){
            alert("El precio total es " + (cepnatporcan + (ganpun * cantidad)) + " pesos. Gracias por comprar")
        }else if(adicional == "No" && cerdas == "Natural"){
            alert("El precio total es " + cepnatporcan + " pesos. Gracias por comprar")
        }else{
            alert("No dijo si queria un producto adicional")
        }
    break

    }default:{
        alert("No dijo que producto necesita")
    }
}
*/

//Biblioteca
/*let biblioteca = prompt(`Bienvenido a esta biblioteca, si quiere gestionar un prestamo para llevar libros estan estas categorias:\n
-Bestsellers: 500 pesos por dia.\n
-Literatura: 100 pesos por dia.\n
-Academicos: prestamo gratuito.\n
Teniendo en cuenta las categorias cual quiere escoger?`)
let libros = parseInt(prompt("Cuantos libros quiere llevar? Solo puede solicitar maximo 5 libros."))
let dias = parseInt(prompt(`Por cuantos dias se va a quedar con los libros? El tiempo maximo es de 30 dias.\n
Se hará un descuento del 10% despues de 10 dias.`))
let prcBest = (libros * (dias * 500))
let prcLite = (libros * (dias * 100))
let descBest = prcBest * 0.1
let descLite = prcLite * 0.1

switch(biblioteca){
    case "Bestsellers":{

        if(libros >= 1 && libros <= 5){
            alert("Ya los traemos")
        }else if(!(libros < 1 && libros > 5)){
            alert("Se pasó del rango o no ingresó un valor valido")
        }

        if(dias >= 1 && dias <= 9){
            alert("Serian " + prcBest  + " pesos.")
        }else if(dias >= 10 && dias <= 30){
            alert("Agregando el descuento serian " + (prcBest - descBest) + " pesos.")
        }else{
            alert("No dijo por cuantos dias va a llevarse los libros")
        }

    break
    
    }case "Literatura":{

        if(libros >= 1 && libros <= 5){
            alert("Ya los traemos")
        }else if(!(libros < 1 && libros > 5)){
            alert("Se pasó del rango o no ingresó un valor valido")
        }

        if(dias >= 1 && dias <= 9){
            alert("Serian " + prcLite  + " pesos.")
        }else if(dias >= 10 && dias <= 30){
            alert("Agregando el descuento serian " + (prcLite - descLite) + " pesos.")
        }else{
            alert("No dijo por cuantos dias va a llevarse los libros")
        }

    break

    }case "Academicos":{

        if(libros >= 1 && libros <= 5){
            alert("Ya los traemos")
        }else if(!(libros < 1 && libros > 5)){
            alert("Se pasó del rango o no ingresó un valor valido")
        }

        if(dias >= 1 && dias <= 30){
            alert("Puede llevarselos.")
        }else{
            alert("No dijo por cuantos dias va a llevarse los libros")
        }

    break

    }default:{
        alert("No dijo que categoria queria escoger")
    }
}
*/

//Domicilios
/*let restaurantes = prompt(`Esto es un servicio de entrega a domicilio de comida, en estos diferentes restaurantes puede comprar:
Hamburguesas.
Pizzas.
Comida china.
Cual de estos restaurante escoge? Puede seleccionar varios`)

function hamburguesas() {
    menuHam = parseInt(prompt(`El menu de este restaurante es:
    1. Hamburguesa pequeña 5000 pesos.
    2. Hamburguesa mediana 8000 pesos.
    3. Hamburguesa grande 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos.`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    hamp = 5000
    hamm = 8000
    hamg = 12000
    domicilio = 5000
    tothamp = (hamp * cantidad + domicilio)
    tothamm = (hamm * cantidad + domicilio)
    tothamg = (hamg * cantidad + domicilio)
}

function pizzas() {
    menuPiz = parseInt(prompt(`El menu de este restaurante es:
    1. Pizza hawaiana 7000 pesos.
    2. Pizza con champiñones 9000 pesos.
    3. Pizza con carnes 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    pizha = 7000
    pizch = 9000
    pizca = 12000
    domicilio = 5000
    totpizha = (pizha * cantidad + domicilio)
    totpizch = (pizch * cantidad + domicilio)
    totpizca = (pizca * cantidad + domicilio)
}

function comidachina() {
    menuCch = parseInt(prompt(`El menu de este restaurante es:
    1. Fideos instantaneos 4000 pesos.
    2. Chop suey 6000 pesos.
    3. Arroz chino 8000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    cchfi = 4000
    cchsu = 6000
    cchar = 8000
    domicilio = 5000
    totcchfi = (cchfi * cantidad + domicilio)
    totcchsu = (cchsu * cantidad + domicilio)
    totcchar = (cchar * cantidad + domicilio)
}

function hamPiz() {
    menuHam = parseInt(prompt(`El menu de este restaurante es:
    1. Hamburguesa pequeña 5000 pesos.
    2. Hamburguesa mediana 8000 pesos.
    3. Hamburguesa grande 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos.`))
    hamp = 5000
    hamm = 8000
    hamg = 12000
    domicilio = 5000
    tothamp = (hamp * cantidad + domicilio)
    tothamm = (hamm * cantidad + domicilio)
    tothamg = (hamg * cantidad + domicilio)
    menuPiz = parseInt(prompt(`El menu de este restaurante es:
    1. Pizza hawaiana 7000 pesos.
    2. Pizza con champiñones 9000 pesos.
    3. Pizza con carnes 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad2 = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    pizha = 7000
    pizch = 9000
    pizca = 12000
    domicilio = 5000
    totpizha = (pizha * cantidad2 + domicilio)
    totpizch = (pizch * cantidad2 + domicilio)
    totpizca = (pizca * cantidad2 + domicilio)
}

function hamCch() {
    menuHam = parseInt(prompt(`El menu de este restaurante es:
    1. Hamburguesa pequeña 5000 pesos.
    2. Hamburguesa mediana 8000 pesos.
    3. Hamburguesa grande 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos.`))
    menuCch = parseInt(prompt(`El menu de este restaurante es:
    1. Fideos instantaneos 4000 pesos.
    2. Chop suey 6000 pesos.
    3. Arroz chino 8000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad2 = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    hamp = 5000
    hamm = 8000
    hamg = 12000
    domicilio = 5000
    tothamp = (hamp * cantidad + domicilio)
    tothamm = (hamm * cantidad + domicilio)
    tothamg = (hamg * cantidad + domicilio)
    cchfi = 4000
    cchsu = 6000
    cchar = 8000
    domicilio = 5000
    totcchfi = (cchfi * cantidad2 + domicilio)
    totcchsu = (cchsu * cantidad2 + domicilio)
    totcchar = (cchar * cantidad2 + domicilio)
}

function pizCch() {
    menuPiz = parseInt(prompt(`El menu de este restaurante es:
    1. Pizza hawaiana 7000 pesos.
    2. Pizza con champiñones 9000 pesos.
    3. Pizza con carnes 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pizha = 7000
    pizch = 9000
    pizca = 12000
    domicilio = 5000
    totpizha = (pizha * cantidad + domicilio)
    totpizch = (pizch * cantidad + domicilio)
    totpizca = (pizca * cantidad + domicilio)
    menuCch = parseInt(prompt(`El menu de este restaurante es:
    1. Fideos instantaneos 4000 pesos.
    2. Chop suey 6000 pesos.
    3. Arroz chino 8000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad2 = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    cchfi = 4000
    cchsu = 6000
    cchar = 8000
    domicilio = 5000
    totcchfi = (cchfi * cantidad2 + domicilio)
    totcchsu = (cchsu * cantidad2 + domicilio)
    totcchar = (cchar * cantidad2 + domicilio)
}

function todo() {
    menuHam = parseInt(prompt(`El menu de este restaurante es:
    1. Hamburguesa pequeña 5000 pesos.
    2. Hamburguesa mediana 8000 pesos.
    3. Hamburguesa grande 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos.`))
    hamp = 5000
    hamm = 8000
    hamg = 12000
    domicilio = 5000
    tothamp = (hamp * cantidad + domicilio)
    tothamm = (hamm * cantidad + domicilio)
    tothamg = (hamg * cantidad + domicilio)
    menuPiz = parseInt(prompt(`El menu de este restaurante es:
    1. Pizza hawaiana 7000 pesos.
    2. Pizza con champiñones 9000 pesos.
    3. Pizza con carnes 12000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad2 = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pizha = 7000
    pizch = 9000
    pizca = 12000
    domicilio = 5000
    totpizha = (pizha * cantidad2 + domicilio)
    totpizch = (pizch * cantidad2 + domicilio)
    totpizca = (pizca * cantidad2 + domicilio)
    menuCch = parseInt(prompt(`El menu de este restaurante es:
    1. Fideos instantaneos 4000 pesos.
    2. Chop suey 6000 pesos.
    3. Arroz chino 8000 pesos.
    Cual quiere escoger? Si no va a escoger nada omita esto`))
    cantidad3 = parseInt(prompt(`Que cantidad quiere de ese producto?
    El precio maximo es de 25000 pesos`))
    pago = prompt("Por cual medio va a pagar? Puede pagar en efectivo o con tarjeta credito/debito")
    cchfi = 4000
    cchsu = 6000
    cchar = 8000
    domicilio = 5000
    totcchfi = (cchfi * cantidad3 + domicilio)
    totcchsu = (cchsu * cantidad3 + domicilio)
    totcchar = (cchar * cantidad3 + domicilio)
}

switch (restaurantes) {

    case "Hamburguesas": {
        hamburguesas()

        if (menuHam == "1" || menuHam == "2" || menuHam == "3") {
            alert("Ya lo preparamos")
        } else {
            alert("No dijo que producto quiere")
        }

        if (menuHam == "1" && tothamp <= 25000) {
            alert("Serian " + tothamp + " pesos junto con el precio del domicilio.")

        } else if (menuHam == "2" && tothamm <= 25000) {
            alert("Serian " + tothamm + " pesos junto con el precio del domicilio.")

        } else if (menuHam == "3" && tothamg <= 25000) {
            alert("Serian " + tothamg + " pesos junto con el precio del domicilio.")

        } else if ((tothamp || tothamm || tothamg) > 25000) {
            alert("Se pasó del precio")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Pizzas": {
        pizzas()

        if (menuPiz == "1" || menuPiz == "2" || menuPiz == "3") {
            alert("Ya lo preparamos")
        } else {
            alert("No dijo que producto quiere")
        }

        if (menuPiz == "1" && totpizha <= 25000) {
            alert("Serian " + totpizha + " pesos junto con el precio del domicilio.")

        } else if (menuPiz == "2" && totpizch <= 25000) {
            alert("Serian " + totpizch + " pesos junto con el precio del domicilio.")

        } else if (menuPiz == "3" && totpizca <= 25000) {
            alert("Serian " + totpizca + " pesos junto con el precio del domicilio.")

        } else if ((totpizha || totpizch || totpizca) > 25000) {
            alert("Se pasó del precio")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Comida china": {
        comidachina()

        if (menuCch == "1" || menuCch == "2" || menuCch == "3") {
            alert("Ya lo preparamos")
        } else {
            alert("No dijo que producto quiere")
        }

        if (menuCch == "1" && totcchfi <= 25000) {
            alert("Serian " + totcchfi + " pesos junto con el precio del domicilio.")

        } else if (menuCch == "2" && totcchsu <= 25000) {
            alert("Serian " + totcchsu + " pesos junto con el precio del domicilio.")

        } else if (menuCch == "3" && totcchar <= 25000) {
            alert("Serian " + totcchar + " pesos junto con el precio del domicilio.")

        } else if ((totcchfi || totcchsu || totcchar) > 25000) {
            alert("Se pasó del precio")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Hamburguesas, Pizzas":
    case "Pizzas, Hamburguesas": {
        hamPiz()

        if ((menuHam == "1" && menuPiz == "1") && (tothamp + totpizha - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} pizzas hawaianas serian ` + ((tothamp + totpizha) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "2") && (tothamp + totpizch - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} pizzas con champiñones serian ` + ((tothamp + totpizch) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "3") && (tothamp + totpizca - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} pizzas con carnes serian ` + ((tothamp + totpizca) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "2" && menuPiz == "1") && (tothamm + totpizha - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} pizzas hawaianas serian ` + ((tothamm + totpizha) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "2") && (tothamm + totpizch - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} pizzas con champiñones serian ` + ((tothamm + totpizch) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "3") && (tothamm + totpizca - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} pizzas con carnes serian ` + ((tothamm + totpizca) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "3" && menuPiz == "1") && (tothamg + totpizha - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} pizzas hawaianas serian ` + ((tothamg + totpizha) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "2") && (tothamg + totpizch - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} pizzas con champiñones serian ` + ((tothamg + totpizch) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "3") && (tothamg + totpizca - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} pizzas con carnes serian ` + ((tothamg + totpizca) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "1") && (tothamp + totpizha - domicilio) ||
            (menuHam == "1" && menuPiz == "2") && (tothamp + totpizch - domicilio) ||
            (menuHam == "1" && menuPiz == "3") && (tothamp + totpizca - domicilio) ||
            (menuHam == "2" && menuPiz == "1") && (tothamm + totpizha - domicilio) ||
            (menuHam == "2" && menuPiz == "2") && (tothamm + totpizch - domicilio) ||
            (menuHam == "2" && menuPiz == "3") && (tothamm + totpizca - domicilio) ||
            (menuHam == "3" && menuPiz == "1") && (tothamg + totpizha - domicilio) ||
            (menuHam == "3" && menuPiz == "2") && (tothamg + totpizch - domicilio) ||
            (menuHam == "3" && menuPiz == "3") && (tothamg + totpizca - domicilio) > 50000) {
            alert("Se pasó del precio")
        } else {
            alert("No dijo que productos quiere")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Hamburguesas, Comida china":
    case "Comida china, Hamburguesas": {
        hamCch()

        if ((menuHam == "1" && menuCch == "1") && (tothamp + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} fideos instantaneos serian ` + ((tothamp + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuCch == "2") && (tothamp + totcchsu - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} chop suey serian ` + ((tothamp + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuCch == "3") && (tothamp + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas y ${cantidad2} arroz chino serian ` + ((tothamp + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "2" && menuCch == "1") && (tothamm + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} fideos instantaneos serian ` + ((tothamm + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuCch == "2") && (tothamm + totcchsu - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} chop suey serian ` + ((tothamm + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuCch == "3") && (tothamm + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas y ${cantidad2} arroz chino serian ` + ((tothamm + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "3" && menuCch == "1") && (tothamg + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} fideos instantaneos serian ` + ((tothamg + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuCch == "2") && (tothamg + totcchsu - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} chop suey serian ` + ((tothamg + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuCch == "3") && (tothamg + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes y ${cantidad2} arroz chino serian ` + ((tothamg + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuCch == "1") && (tothamp + totcchfi - domicilio) ||
            (menuHam == "1" && menuCch == "2") && (tothamp + totcchsu - domicilio) ||
            (menuHam == "1" && menuCch == "3") && (tothamp + totcchar - domicilio) ||
            (menuHam == "2" && menuCch == "1") && (tothamm + totcchfi - domicilio) ||
            (menuHam == "2" && menuCch == "2") && (tothamm + totcchsu - domicilio) ||
            (menuHam == "2" && menuCch == "3") && (tothamm + totcchar - domicilio) ||
            (menuHam == "3" && menuCch == "1") && (tothamg + totcchfi - domicilio) ||
            (menuHam == "3" && menuCch == "2") && (tothamg + totcchsu - domicilio) ||
            (menuHam == "3" && menuCch == "3") && (tothamg + totcchar - domicilio) > 50000) {
            alert("Se pasó del precio")
        } else {
            alert("No dijo que productos quiere")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Pizzas, Comida china":
    case "Comida china, Pizzas": {
        pizCch()

        if ((menuPiz == "1" && menuCch == "1") && (totpizha + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas hawaianas y ${cantidad2} fideos instantaneos serian ` + ((totpizha + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "1" && menuCch == "2") && (totpizha + totcchsu - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas hawaianas y ${cantidad2} chop suey serian ` + ((totpizha + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "1" && menuCch == "3") && (totpizha + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas hawaianas y ${cantidad2} arroz chino serian ` + ((totpizha + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuPiz == "2" && menuCch == "1") && (totpizch + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas con champiñones y ${cantidad2} fideos instantaneos serian ` + ((totpizch + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "2" && menuCch == "2") && (totpizch + totcchsu - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} pizzas con champiñones y ${cantidad2} chop suey serian ` + ((totpizch + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "2" && menuCch == "3") && (totpizch + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas con champiñones y ${cantidad2} arroz chino serian ` + ((totpizch + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")


        } else if ((menuPiz == "3" && menuCch == "1") && (totpizca + totcchfi - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas con carnes y ${cantidad2} fideos instantaneos serian ` + ((totpizca + totcchfi) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "3" && menuCch == "2") && (totpizca + totcchsu - domicilio) <= 100000) {
            alert(`Al pedír ${cantidad} pizzas con carnes y ${cantidad2} chop suey serian ` + ((totpizca + totcchsu) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "3" && menuCch == "3") && (totpizca + totcchar - domicilio) <= 50000) {
            alert(`Al pedír ${cantidad} pizzas con carnes y ${cantidad2} arroz chino serian ` + ((totpizca + totcchar) - domicilio) + " pesos junto con el precio del domicilio.")

        } else if ((menuPiz == "1" && menuCch == "1") && (totpizha + totcchfi - domicilio) ||
            (menuPiz == "1" && menuCch == "2") && (totpizha + totcchsu - domicilio) ||
            (menuPiz == "1" && menuCch == "3") && (totpizha + totcchar - domicilio) ||
            (menuPiz == "2" && menuCch == "1") && (totpizch + totcchfi - domicilio) ||
            (menuPiz == "2" && menuCch == "2") && (totpizch + totcchsu - domicilio) ||
            (menuPiz == "2" && menuCch == "3") && (totpizch + totcchar - domicilio) ||
            (menuPiz == "3" && menuCch == "1") && (totpizca + totcchfi - domicilio) ||
            (menuPiz == "3" && menuCch == "2") && (totpizca + totcchsu - domicilio) ||
            (menuPiz == "3" && menuCch == "3") && (totpizca + totcchar - domicilio) > 50000) {
            alert("Se pasó del precio")
        } else {
            alert("No dijo que productos quiere")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }
        break

    } case "Hamburguesas, Pizzas, Comida china":
    case "Hamburguesas, Comida china, Pizzas":
    case "Pizzas, Comida china, Hamburguesas":
    case "Pizzas, Hamburguesas, Comida china":
    case "Comida china, Pizzas, Hamburguesas":
    case "Comida china, Hamburguesas, Pizzas": {
        todo()

        if ((menuHam == "1" && menuPiz == "1" && menuCch == "1") && (tothamp + totpizha + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamp + totpizha + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "1" && menuCch == "2") && (tothamp + totpizha + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamp + totpizha + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "1" && menuCch == "3") && (tothamp + totpizha + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamp + totpizha + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "1" && menuPiz == "2" && menuCch == "1") && (tothamp + totpizch + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamp + totpizch + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "2" && menuCch == "2") && (tothamp + totpizch + totcchsu + (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamp + totpizch + totcchsu + (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "2" && menuCch == "3") && (tothamp + totpizch + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamp + totpizch + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "1" && menuPiz == "3" && menuCch == "1") && (tothamp + totpizca + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamp + totpizca + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "3" && menuCch == "2") && (tothamp + totpizca + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamp + totpizca + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "1" && menuPiz == "3" && menuCch == "3") && (tothamp + totpizca + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas pequeñas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamp + totpizca + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")



        } else if ((menuHam == "2" && menuPiz == "1" && menuCch == "1") && (tothamm + totpizha + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamm + totpizha + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "1" && menuCch == "2") && (tothamm + totpizha + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamm + totpizha + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "1" && menuCch == "3") && (tothamm + totpizha + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamm + totpizha + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "2" && menuPiz == "2" && menuCch == "1") && (tothamm + totpizch + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamm + totpizch + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "2" && menuCch == "2") && (tothamm + totpizch + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamm + totpizch + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "2" && menuCch == "3") && (tothamm + totpizch + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamm + totpizch + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "2" && menuPiz == "3" && menuCch == "1") && (tothamm + totpizca + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamm + totpizca + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "3" && menuCch == "2") && (tothamm + totpizca + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamm + totpizca + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "2" && menuPiz == "3" && menuCch == "3") && (tothamm + totpizca + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas medianas, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamm + totpizca + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")



        } else if ((menuHam == "3" && menuPiz == "1" && menuCch == "1") && (tothamg + totpizha + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamg + totpizha + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "1" && menuCch == "2") && (tothamg + totpizha + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamg + totpizha + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "1" && menuCch == "3") && (tothamg + totpizha + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamg + totpizha + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "3" && menuPiz == "2" && menuCch == "1") && (tothamg + totpizch + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamg + totpizch + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "2" && menuCch == "2") && (tothamg + totpizch + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamg + totpizch + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "2" && menuCch == "3") && (tothamg + totpizch + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con carnes y ${cantidad3} arroz chino serian ` + (tothamg + totpizch + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if ((menuHam == "3" && menuPiz == "3" && menuCch == "1") && (tothamg + totpizca + totcchfi - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas hawaianas y ${cantidad3} fideos instantaneos serian ` + (tothamg + totpizca + totcchfi - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "3" && menuCch == "2") && (tothamg + totpizca + totcchsu - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con champiñones y ${cantidad3} chop suey serian ` + (tothamg + totpizca + totcchsu - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")

        } else if ((menuHam == "3" && menuPiz == "3" && menuCch == "3") && (tothamg + totpizca + totcchar - (domicilio + domicilio)) <= 100000) {
            alert(`Al pedír ${cantidad} hamburguesas grandes, ${cantidad2} pizzas con champiñones y ${cantidad3} arroz chino serian ` + (tothamg + totpizca + totcchar - (domicilio + domicilio)) + " pesos junto con el precio del domicilio.")


        } else if (
            (menuHam == "1" && menuPiz == "1" && menuCch == "1") && (tothamp + totpizha + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "1" && menuCch == "2") && (tothamp + totpizha + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "1" && menuCch == "3") && (tothamp + totpizha + totcchar - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "2" && menuCch == "1") && (tothamp + totpizch + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "2" && menuCch == "2") && (tothamp + totpizch + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "2" && menuCch == "3") && (tothamp + totpizch + totcchar - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "3" && menuCch == "1") && (tothamp + totpizca + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "3" && menuCch == "2") && (tothamp + totpizca + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "1" && menuPiz == "3" && menuCch == "3") && (tothamp + totpizca + totcchar - (domicilio + domicilio)) ||

            (menuHam == "2" && menuPiz == "1" && menuCch == "1") && (tothamm + totpizha + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "1" && menuCch == "2") && (tothamm + totpizha + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "1" && menuCch == "3") && (tothamm + totpizha + totcchar - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "2" && menuCch == "1") && (tothamm + totpizch + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "2" && menuCch == "2") && (tothamm + totpizch + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "2" && menuCch == "3") && (tothamm + totpizch + totcchar - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "3" && menuCch == "1") && (tothamm + totpizca + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "3" && menuCch == "2") && (tothamm + totpizca + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "2" && menuPiz == "3" && menuCch == "3") && (tothamm + totpizca + totcchar - (domicilio + domicilio)) ||


            (menuHam == "3" && menuPiz == "1" && menuCch == "1") && (tothamg + totpizha + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "1" && menuCch == "2") && (tothamg + totpizha + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "1" && menuCch == "3") && (tothamg + totpizha + totcchar - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "2" && menuCch == "1") && (tothamg + totpizch + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "2" && menuCch == "2") && (tothamg + totpizch + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "2" && menuCch == "3") && (tothamg + totpizch + totcchar - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "3" && menuCch == "1") && (tothamg + totpizca + totcchfi - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "3" && menuCch == "2") && (tothamg + totpizca + totcchsu - (domicilio + domicilio)) ||
            (menuHam == "3" && menuPiz == "3" && menuCch == "3") && (tothamg + totpizca + totcchar - (domicilio + domicilio)) > 100000) {
            alert("Se pasó del precio")
        } else {
            alert("No dijo que productos quiere")
        }

        if (pago == "Efectivo" || pago == "Tarjeta credito" || pago == "Tarjeta debito") {
            alert("Ya esta pago su pedido, el domicilio llegara a su casa en 45 minutos o en 1 hora. Gracias por comprar")
        } else {
            alert("No dijo con que medio va a pagar el domicilio")
        }

        break

    } default: {
        alert("No dijo en que restaurante quiere pedir")
    }
}
*/
