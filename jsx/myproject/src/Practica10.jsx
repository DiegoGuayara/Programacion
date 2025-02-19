import { useState } from "react";

function Practica10() {
  // Estado para almacenar el mensaje
  const [mensaje, setMensaje] = useState("Hola");

  // Función para alternar entre "Hola" y "Adiós"
  const alternarTexto = () => {
    setMensaje(
      mensaje === "Hola"
        ? "Adiós"
        : mensaje === "Adiós"
        ? "Hasta luego"
        : "Hola"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2
        style={{
          color:
            mensaje === "Hola" ? "red" : mensaje === "Adiós" ? "blue" : "green",
        }}
      >
        {mensaje}
      </h2>{" "}
      {/* Texto dinámico */}
      <button onClick={alternarTexto}>Cambiar texto</button>
    </div>
  );
}

export default Practica10;
