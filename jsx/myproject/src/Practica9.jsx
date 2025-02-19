import { useState } from "react";

function Practica9() {
  const [text, setText] = useState("");

  return (
    <div>
      <p>Contador de caracteres, no puedes pasar de 20 caracteres</p>

      <input
        type="text"
        placeholder="Escribe aquí"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Mensaje dinámico */}
      <p style={{ color: text.length > 20 ? "red" : "black" }}>
        {text.length > 20
          ? `⚠️ Advertencia: Has superado el límite (${text.length} caracteres).`
          : `Número de caracteres: ${text.length}`}
      </p>
    </div>
  );
}

export default Practica9;
