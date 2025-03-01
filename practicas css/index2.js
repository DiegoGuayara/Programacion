const usuario = document.getElementById('usuario')
const password = document.getElementById('password')
const cont = document.getElementById('cont')
const login = document.getElementById('login')

login.addEventListener('click', ()=>{

    if(usuario && password){
        const mensaje = document.getElementById('mensaje')
        if(mensaje){
            mensaje.remove()
        }
        let p = document.createElement('p')
        p.id = 'mensaje'
        p.style.fontSize = '10px'
        
        if (usuario.value === "" && password.value === "") {
            p.innerText = 'Ingrese el usuario y la contraseña'
        } else if (usuario.value === "") {
            p.innerText = 'Ingresa usuario'
        } else if (password.value === "") {
            p.innerText = 'Ingresa la contraseña'
        } else {
            p.innerText = 'Bienvenido'
        }
    
        cont.appendChild(p)
    }
})
