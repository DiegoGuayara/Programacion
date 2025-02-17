import { useState } from "react";

function Practica4() {
  const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "No cuentes los días, haz que los días cuenten.",
    "Nunca es tarde para ser lo que podrías haber sido.",
    "Cree en ti mismo y todo será posible."
  ];

  const [frase, setFrase] = useState(frases[0]);

  function cambiarFrase() {
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(nuevaFrase);
  }

  return (
    <div>
      <h3>{frase}</h3>
      <button onClick={cambiarFrase}>Nueva Frase</button>
    </div>
  );
}

export default Practica4;