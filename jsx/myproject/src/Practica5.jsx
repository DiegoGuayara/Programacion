import { useState } from "react";

function Practica5() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  function agregarTarea() {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  }

  function eliminarTarea(index) {
    setTareas(tareas.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => eliminarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practica5;
