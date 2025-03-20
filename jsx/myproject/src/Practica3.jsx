import { useState } from "react";

function Practica3() {
  const [color, setColor] = useState("white");

  function cambiarColor() {
    const nuevoColor = prompt("Ingrese un color (ej: red, blue, green):");
    if (nuevoColor) {
      setColor(nuevoColor);
    }
  }

  return (
    <div style={{ backgroundColor: color, height: "10vh", textAlign: "center", padding: "50px" }}>
      <h2>Color de fondo: {color}</h2>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
}

export default Practica3;