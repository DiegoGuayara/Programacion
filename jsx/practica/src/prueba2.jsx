import React, { useState } from "react";

const a = prompt("Ingrese su nombre");

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hola {a}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        sumar
      </button>
      <h2>contador: {count}</h2>
    </div>
  );
}

export default App;
