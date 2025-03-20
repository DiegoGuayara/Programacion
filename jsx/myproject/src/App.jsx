import Practica1 from "./Practica1.jsx";
import Practica2 from "./Practica2.jsx";
import Practica3 from "./Practica3.jsx";
import Practica4 from "./Practica4.jsx";
import Practica5 from "./Practica5.jsx";
import Practica6 from "./Practica6.jsx";
import Practica7 from "./Practica7.jsx";
import Practica8 from "./Practica8.jsx";
import Practica9 from "./Practica9.jsx";
import Practica10 from "./Practica10.jsx";
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
    <Practica1/>
    <Practica2/>
    <Practica3/>
    <Practica4/>
    <Practica5/>
    <Practica6/>
    <Practica7/>
    <Practica8/>
    <Practica9/>
    <Practica10/>

    </div>
  );
}

export default App;
