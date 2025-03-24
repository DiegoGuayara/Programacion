const paleta = document.getElementById("paleta");
const paletaColores = document.getElementById("paleta-colores");

const help = document.getElementById("help");
const contOpciones2A = document.getElementById("cont-opciones2A");

paleta.addEventListener("click", () => {
  paletaColores.classList.toggle('mostrar')
});

help.addEventListener("click", () => {
  contOpciones2A.classList.toggle('mostrar')
});
