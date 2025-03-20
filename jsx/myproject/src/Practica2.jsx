import { useState } from "react";

function Practica2() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe algo"
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Texto ingresado {texto}</p>
    </div>
  );
}

export default Practica2;
