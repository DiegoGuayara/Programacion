function cambiarColor(color) {
  const t = document.getElementById("titulo");
  t.style.color = color;
}

function cambiarColor2(color) {
  const r = document.getElementById("titulo2");
  r.style.color = color;
}

function cambiar() {
  document.getElementById("titulo3").innerText = "Hola";
}

function regresar() {
  document.getElementById("titulo3").innerText = "Titulo 3";
}

let tam = 31;

function aumentar() {
  tam += 2;
  document.getElementById("titulo4").style.fontSize = tam + "px";
}

function disminuir() {
  tam -= 2;
  document.getElementById("titulo4").style.fontSize = tam + "px";
}
