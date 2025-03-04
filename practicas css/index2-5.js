const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");

const email = document.getElementById("email");
const npassword = document.getElementById("npassword");
const confnpassword = document.getElementById("confnpassword");

const continuar = document.getElementById("continue");
const change = document.getElementById("change");

const cont = document.getElementById("cont");
const cont2 = document.getElementById("cont2");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

continuar.addEventListener("click", mensajePart1);
change.addEventListener("click", mensajePart2);

function mensajePart1() {
  const mensaje1 = document.getElementById("mensaje1");

  if (mensaje1) {
    mensaje1.remove();
  }

  let p = document.createElement("p");  
  p.id = "mensaje1";

  if (!emailRegex.test(email.value)) {
    p.innerText = "Ingrese un correo valido";
  } else {
    p.innerText = "Redirigiendo";
    setTimeout(() => {
      part1.style.display = "none";
      part2.style.display = "flex";
    }, 3000);
  }

  cont.appendChild(p);
}

function mensajePart2() {
  const mensaje2 = document.getElementById("mensaje2");

  if (mensaje2) {
    mensaje2.remove();
  }

  let p2 = document.createElement("p");
  p2.id = "mensaje2";

  if (npassword.value === "" || confnpassword.value === "") {
    p2.innerText = "Ingrese y confirme la nueva contraseña";
  } else if (npassword.value !== confnpassword.value) {
    p2.innerText = "Las contraseñas no coinciden";
  } else {
    part2.style.display = "none";
    part3.style.display = 'flex'
    setTimeout(() => {
      window.close()
    }, 3000)
  }

  cont2.appendChild(p2);
}
