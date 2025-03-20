import { useState } from "react";

function CambiarColor() {
  const [color, setColor] = useState("white"); // Estado inicial

  const colores = ["red", "blue", "green", "yellow", "purple", "orange", 'white']; // Array de colores

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* DIV que cambia de color */}
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "20px auto",
          border: "2px solid black",
        }}
      ></div>

      {/* Mapeamos el array para generar los botones automáticamente */}
      {colores.map((col, index) => (
        <button
          key={index} // Clave única para React
          onClick={() => setColor(col)}
          style={{
            backgroundColor: col,
            color: 'none', // Texto negro si el fondo es amarillo
            margin: "5px",
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        >
         {/* Sin modificar el texto */}
        </button>
      ))}
    </div>
  );
}

export default CambiarColor;
