import { useState } from "react";

function Practica8() {
  const [color, setColor] = useState("white");

  const colores = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "white",
  ];

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

      {/* Select con onChange para cambiar el color */}
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ padding: "5px", marginTop: "10px" }}
      >
        {colores.map((col, index) => (
          <option key={index} value={col}>
            {col}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Practica8;
