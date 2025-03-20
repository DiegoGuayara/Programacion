//Ejercicio 1
/*let lavadora = (tamaño, horas, domicilio) => {
    preciog = 8000 * horas
    preciop = 6000 * horas
    descuento = (horas - 5) * 4000

    //Tamaño
    if (tamaño === 'Grande') {
        console.log('Escogio la lavadora grande')
    } else if (tamaño === 'Pequeña') {
        console.log('Escogio la lavadora pequeña')
    }

    //Grande
    if ((horas > 0 && horas <= 5) && tamaño === 'Grande') {
        console.log(`El precio total es ${preciog} pesos`)
    }else if (horas > 5 && tamaño === 'Grande') {
        console.log(`El precio total es ${preciog - descuento} pesos con el descuento de ${descuento} pesos`)
    
    //Pequeña
    }else if((horas > 0 && horas <= 5) && tamaño === 'Pequeña'){
        console.log(`El precio total es ${preciop} pesos`)
    }else if (horas > 5 && tamaño === 'Pequeña') {
        console.log(`El precio total es ${preciop - descuento} pesos con el descuento de ${descuento} pesos`)
    }

    //Grande
    if (domicilio == 'Si' && tamaño == 'Grande' && (horas > 0 && horas <= 5)) {
        console.log(`El precio total es ${preciog + (preciog * 0.02)} por el domicilio`)
    } else if (domicilio == 'Si' && tamaño == 'Grande' && horas > 5) {
        console.log(`El precio total es ${preciog-descuento + ((preciog - descuento) * 0.02)} por el domicilio`)
    
    //Pequeña
    }else if (domicilio == 'Si' && tamaño == 'Pequeña' && (horas > 0 && horas <= 5)) {
        console.log(`El precio total es ${preciop + (preciop * 0.02)} por el domicilio`)
    } else if (domicilio == 'Si' && tamaño == 'Pequeña' && horas > 5) {
        console.log(`El precio total es ${(preciop-descuento) + ((preciop - descuento) * 0.02)} por el domicilio`)

    }else if(domicilio == 'No'){
        console.log('El precio es el mismo, no cambia')
    }
}
*/

//Ejercicio 2
/*console.log(`Escoja un combo:
Combo 1: Pizza grande con sabor a elección acompañada de gaseosa 1.5 lt a 50.000 pesos
Combo 2: Pizza Toci Vegetales Personal - tocineta, champiñon, pimentón, cebolla y tomate $ 25.000
Combo 3: Pizza Peperoni Mega Chesse Personal - peperoni y queso mozarella en salsa napolitana incluye extra-queso. $30.000
Compras menores a 50000 pesos se cobra 5000 pesos mas por el domicilio`)

function combos(c){
    if(c === 'Combo 1'){
        console.log('Serian 50000 pesos, el domicilio es gratis')
    }else if(c === 'Combo 2'){
        console.log('Serian 30000 pesos con el domicilio')
    }else if(c === 'Combo 3'){
        console.log('Serian 35000 pesos con el domicilio')
    }else if(c==='Combo 1 y Combo 2'){
        console.log(`Serian ${50000+25000} pesos, el domicilio es gratis`)
    }else if(c==='Combo 1 y Combo 3'){
        console.log(`Serian ${50000+30000} pesos, el domicilio es gratis`)
    }else if(c==='Combo 2 y Combo 3'){
        console.log(`Serian ${25000+30000} pesos, el domicilio es gratis`)
    }else if(c==='Combo 1, Combo 2 y Combo 3'){
        console.log(`Serian ${50000+25000+30000} pesos, el domicilio es gratis`)
    }
}
*/

//Ejercicio 3
/*console.log(`Los precios son:
Corte camisa: $3000
Corte pantalón: $5000
Confección de camisa: $15000
Confección de pantalón: $25000
Estampado de camiseta: $3000
Acabados y terminación de pantalón: $3000
Acabado y terminación de camisa: $2500
Cual va a escoger?`)

let preciospr = [3000, 5000, 15000, 25000, 3000, 3000, 2500]
let productos = producto => cantidad => producto*cantidad
let producto = productos(preciospr[0])
console.log(producto(2))
*/


//Ejercicio 4
/*let cuadro = (x)=>{
    for (let i = 1; i <= x; i++) {
        let line = ""
        for (let j = 1; j <= x; j++) {
            if (i === 1 || i === 7 || j === 1 || j === 7) {
                line += "* "
            } else {
                line += "  "
            }
        }
        console.log(line)
    }
}
cuadro(10)
*/


//Ejercicio 5
/*let num = x => {
    for(i=2; i<=x; i+=2){
        if(i!==8){
            console.log(i)
        }
    }
}

num(10)
*/