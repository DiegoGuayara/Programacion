const part1 = document.getElementById('part1')
const part2 = document.getElementById('part2')

const email = document.getElementById('email')
const npassword = document.getElementById('npassword')
const confnpassword = document.getElementById('confnpassword')

const continuar = document.getElementById('continue')
const change = document.getElementById('change')

const cont = document.getElementById('cont')
const cont2 = document.getElementById('cont2')


continuar.addEventListener('click', mensajePart1)
change.addEventListener('click', mensajePart2)

function mensajePart1(){
    const mensaje1 = document.getElementById('mensaje1')

    if(mensaje1){
        mensaje1.remove()
    }

    let p = document.createElement('p')
    p.id = 'mensaje1'

    if(email.value === "" || email.value.includes('@')){
        p.innerText = 'Ingrese un correo valido'
    }else{
        p.innerText = 'Redirigiendo'
    }

    cont.appendChild(p)
}

function mensajePart2(){

}