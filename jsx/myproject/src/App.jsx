import { useState } from "react";

function evento() {
  alert("Hola");
}

function App() {
  const [color, setColor] = useState("white");

  function cambiarColor() {
    let nuevoColor = prompt("Ingrese un color");
    if (nuevoColor) {
      setColor(nuevoColor);
    }
  }

  return (
    <div>
      <button onClick={evento}>Haz click aquí</button>
      <button style={{ backgroundColor: color }} onClick={cambiarColor}>
        Haz click para cambiar el color
      </button>
    </div>
  );
}

export default App;
