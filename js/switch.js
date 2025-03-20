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
/*let hamsimp = 25000;
let pizfam = 85000;
let fidpol = 18000;
let pagoTotal = 0;
let domicilio = 5000;
let cantidad = 0;
let pago;
let rest = prompt(`Elija el/los restaurante/s donde vaya a pedir :
1.Hamburguesas.
2.Pizzeria.
3.Comida china.`);

switch (rest) {
  case "Hamburguesas": {
    ham();
    break;
  }

  case "Pizzeria": {
    piz();
    break;
  }

  case "Comida china": {
    chin();
    break;
  }

  case "Hamburguesas y Pizzeria": {
    hampiz();
    break;
  }

  case "Hamburguesas y Comida china": {
    hamchin();
    break;
  }

  case "Pizzeria y Comida china": {
    pizchin();
    break;
  }

  case "Hamburguesas, Pizzeria y Comida china": {
    hampizchin();
    break;
  }

  default: {
    alert("Opción no válida");
  }
}

function ham() {
  let menu = prompt(
    `El menú de este restaurante es:\nHamburguesa Simple: $25000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = hamsimp * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert(
          `El precio seria ${
            pagoTotal + domicilio
          } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
        );
      }
    }
  }
}

function piz() {
  let menu = prompt(
    `El menú de este restaurante es:\nPizza familiar: $85000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = pizfam * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert(
          `El precio seria ${
            pagoTotal + domicilio
          } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
        );
      }
    }
  }
}

function chin() {
  let menu = prompt(
    `El menú de este restaurante es:\nFideos con pollo: $18000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = fidpol * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert(
          `El precio seria ${
            pagoTotal + domicilio
          } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
        );
      }
    }
  }
}

function hampiz() {
  let menu = prompt(
    `El menú de este restaurante es:\nHamburguesa Simple: $25000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = hamsimp * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert("Redirigiendo al otro restaurante");
        let menu = prompt(
          `El menú de este restaurante es:\nPizza familiar: $85000.\nQuiere comprar esto?`
        );
        if (menu === "Si") {
          cantidad = parseInt(
            prompt(
              "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
            )
          );
          pagoTotal = pizfam * cantidad;

          if (pagoTotal >= 23000) {
            pago = prompt(
              "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
            );

            if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
              pagoTotal = hamsimp * cantidad + pizfam * cantidad;
              alert(
                `El precio seria ${
                  pagoTotal + domicilio
                } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
              );
            }
          }
        }
      }
    }
  }
}

function hamchin() {
  let menu = prompt(
    `El menú de este restaurante es:\nHamburguesa Simple: $25000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = hamsimp * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert("Redirigiendo al otro restaurante");
        let menu = prompt(
          `El menú de este restaurante es:\nFideos con pollo: $18000.\nQuiere comprar esto?`
        );
        if (menu === "Si") {
          cantidad = parseInt(
            prompt(
              "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
            )
          );
          pagoTotal = fidpol * cantidad;

          if (pagoTotal >= 23000) {
            pago = prompt(
              "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
            );

            if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
              pagoTotal = hamsimp * cantidad + fidpol * cantidad;
              alert(
                `El precio seria ${
                  pagoTotal + domicilio
                } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
              );
            }
          }
        }
      }
    }
  }
}

function pizchin() {
  let menu = prompt(
    `El menú de este restaurante es:\nPizza familiar: $85000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = pizfam * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert("Redirigiendo al otro restaurante");
        let menu = prompt(
          `El menú de este restaurante es:\nFideos con pollo: $18000.\nQuiere comprar esto?`
        );
        if (menu === "Si") {
          cantidad = parseInt(
            prompt(
              "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
            )
          );
          pagoTotal = fidpol * cantidad;

          if (pagoTotal >= 23000) {
            pago = prompt(
              "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
            );

            if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
              pagoTotal = pizfam * cantidad + fidpol * cantidad;
              alert(
                `El precio seria ${
                  pagoTotal + domicilio
                } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
              );
            }
          }
        }
      }
    }
  }
}

function hampizchin() {
  let menu = prompt(
    `El menú de este restaurante es:\nHamburguesa Simple: $25000.\nQuiere comprar esto?`
  );
  if (menu === "Si") {
    cantidad = parseInt(
      prompt(
        "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
      )
    );
    pagoTotal = hamsimp * cantidad;

    if (pagoTotal >= 23000) {
      pago = prompt(
        "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
      );

      if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
        alert("Redirigiendo al otro restaurante");
        let menu = prompt(
          `El menú de este restaurante es:\nPizza familiar: $85000.\nQuiere comprar esto?`
        );
        if (menu === "Si") {
          cantidad = parseInt(
            prompt(
              "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
            )
          );
          pagoTotal = pizfam * cantidad;

          if (pagoTotal >= 23000) {
            pago = prompt(
              "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
            );

            if (pago === "Efectivo" || pago === "Tarjeta debito/credito") {
              pagoTotal = hamsimp * cantidad + pizfam * cantidad;
              alert("Redirigiendo al otro restaurante");
              let menu = prompt(
                `El menú de este restaurante es:\nFideos con pollo: $18000.\nQuiere comprar esto?`
              );
              if (menu === "Si") {
                cantidad = parseInt(
                  prompt(
                    "Diga la cantidad que quiere comprar. El minimo de compra es de 23000 pesos"
                  )
                );
                pagoTotal = fidpol * cantidad;

                if (pagoTotal >= 23000) {
                  pago = prompt(
                    "Que medio de pago va utilizar? Efectivo o Tarjeta debito/credito"
                  );

                  if (
                    pago === "Efectivo" ||
                    pago === "Tarjeta debito/credito"
                  ) {
                    pagoTotal =
                      hamsimp * cantidad +
                      pizfam * cantidad +
                      fidpol * cantidad;
                    alert(
                      `El precio seria ${
                        pagoTotal + domicilio
                      } pesos mas el domicilio. El domicilio se demora de 45 minutos a 1 hora.\nMuchas gracias por comprar`
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/