const consultar = document.getElementById("consultar");
const cont = document.getElementById("cont");
const emoji = document.getElementById("emoji");

emoji.addEventListener('mouseover', ()=> {
  emoji.textContent = '🤑'
})

emoji.addEventListener('mouseout', ()=> {
  emoji.textContent = '💰'
})

consultar.addEventListener("click", estimacion);

function estimacion() {
  let m1 = document.getElementById("mensaje1");
  let m2 = document.getElementById("mensaje2");
  let m3 = document.getElementById("mensaje3");

  if (m1) {
    m1.remove();
  }

  if (m2) {
    m2.remove();
  }

  if (m3) {
    m3.remove();
  }

  let p1 = document.createElement("p");
  p1.id = "mensaje1";

  let p2 = document.createElement("p");
  p2.id = "mensaje2";

  let p3 = document.createElement("p");
  p3.id = "mensaje3";

  p1.textContent = '🎚️ '

  let funcionalidad = parseFloat(
    prompt("Que complejidad tiene su funcionalidad")
  );

  while (funcionalidad < 0 || funcionalidad > 15 || isNaN(funcionalidad)) {
    alert("Ingrese datos validos");
    funcionalidad = parseFloat(
      prompt("Que complejidad tiene su funcionalidad")
    );
  }

  if (funcionalidad <= 5) {
    p1.textContent += "Complejidad Funcionalidad: Baja";
  } else if (funcionalidad > 5 && funcionalidad <= 10) {
    p1.textContent += "Complejidad Funcionalidad: Media";
  } else if (funcionalidad > 10 && funcionalidad <= 15) {
    p1.textContent += "Complejidad Funcionalidad: Alta";
  }
  cont.appendChild(p1);

  let dias = parseFloat(prompt("Cuantos dias trabajó?"));

  while (isNaN(dias) || dias <= 0) {
    alert("Ingrese datos validos");
    dias = parseFloat(prompt("Cuantos dias trabajó?"));
  }

  let saldo = 8 * 30 * dias;
  
  p2.textContent = `⌛ Tiempo Estimado: ${dias} dias (${8 * dias} horas)`;
  cont.appendChild(p2);

  p3.textContent = `💲 Saldo Establecido: $${saldo} USD.`;
  cont.appendChild(p3);
}
