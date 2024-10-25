document.getElementById("load").addEventListener("click", fetchdatos);

function fetchdatos() {
  const urlApi = "https://nodejs-api-rstq.onrender.com/";

  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const datosContainer = document.getElementById("datos");
      datosContainer.innerHTML = "";

      data.forEach((datos) => {
        const datosElement = document.createElement("div");
        const ruta1 = datos.ruta1 ? datos.ruta1 : "";
        const ruta2 = datos.ruta2 ? datos.ruta2 : "";
        const ruta3 = datos.ruta3 ? datos.ruta3 : "";

        datosElement.innerHTML = `
        <h2 class="titulos">
          ${ruta1}  
        </h2>

        <h2 class="titulos">
          ${ruta2}
        </h2>

        <h2 class="titulos">
          ${ruta3}
        </h2>
        `;

        datosContainer.appendChild(datosElement);
      });
    })
    .catch((err) => console.error("Error", err));
}
