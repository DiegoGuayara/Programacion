/*function conversion(x) {
  let formula = x * (9 / 5) + 32;
  console.log(`${formula}° fahrenheit`);
}
conversion(2);
*/

/*function newton(x) {
  let fuerza = x * 52;
  console.log(fuerza);
}
newton(42);
*/

//aplicacamos una fuerza de 300 newton a una motocicleta de 60kg, despreciando la fuerza de friccion, determina la aceleracion teorica que se le dio a la moto
/*function newton2(f, m) {
  let aceleracion = f / m;
  console.log(`${aceleracion} m/s**2`);
}
newton2(300, 60);
*/

function changeColor(color) {
  const t = document.getElementById("titulo");
  t.style.color = color;
}

function rango() {
  const t = document.getElementById("Tipo");
  t.setAttribute("type", "range");
}

function reversa() {
  const t = document.getElementById("Tipo");
  t.setAttribute("type", "text");
}

let tam = 31;
function aum() {
  tam += 2;
  document.getElementById("titulo").style.fontSize = tam + "px";
}

function dis() {
  tam -= 2;
  document.getElementById("titulo").style.fontSize = tam + "px";
}

function cambiarn() {
  document.getElementById("titulo").innerText = "hola";
}


