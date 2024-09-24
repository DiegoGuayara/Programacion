import React from "react";

let prg = parseInt(prompt("Ingrese un numero"));
function App() {
  if (prg % 2 === 0) {
    return <h1>Es un numero par</h1>;
  } else {
    return <h1>Es un numero impar</h1>;
  }
}

export default App;
