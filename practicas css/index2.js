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
        p.innerText = usuario.value == "" && password.value !== '' ? 'Ingresa usuario' 
        : password.value == "" && usuario.value !== '' ? 'Ingresa la contraseña' 
        : usuario.value == "" && password.value == "" ? 
        'Ingrese el usuario y la contraseña' 
        : 'Bienvenido'
    
        cont.appendChild(p)
    }
})
