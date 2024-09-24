import React from "react";
let prg = parseInt(prompt("Ingrese un numero"));

function App() {
  if (prg % 2 === 0) {
    return <h1>Es par</h1>;
  } else if (isNaN(prg)) {
    return <h1>Ingrese un numero</h1>;
  } else {
    return <h1>Es impar</h1>;
  }
}

export default App;
