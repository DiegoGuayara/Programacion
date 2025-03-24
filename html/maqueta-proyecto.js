const paleta = document.getElementById("paleta");
const paletaColores = document.getElementById("paleta-colores");

const help = document.getElementById("help");
const contOpciones2A = document.getElementById("cont-opciones2A");

paleta.addEventListener("click", () => {
  if (paletaColores.style.display === "flex") {
    paletaColores.style.display = "none";
  } else {
    paletaColores.style.display = "flex";
  }
});

help.addEventListener("click", () => {
  if (contOpciones2A.style.display === "block") {
    contOpciones2A.style.display = "none";
  } else {
    contOpciones2A.style.display = "block";
  }
});
