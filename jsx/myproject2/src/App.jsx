import { useState } from "react";
import "./App.css";

function App() {
  const [textoUser, setTextoUser] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [password, setPassword] = useState("");
  const [mensaje2, setMensaje2] = useState("");

  function nombreUser() {
    if (textoUser === "") setMensaje("Ingrese su nombre de usuario por favor");
    else setMensaje(`Bienvenido ${textoUser}`);
  }

  function clavePassword() {
    if (password === "") setMensaje2("Ingrese la contraseña por favor");
    else setMensaje2("Contraseña ingresada");
  }

  return (
    <div>
      <main>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={textoUser}
          onChange={(e) => setTextoUser(e.target.value)}
        />
        {mensaje && <p id="mens1">{mensaje}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mensaje2 && <p id="mens2">{mensaje2}</p>}
        <a href="#">Forgot your Password?</a>
        <button
          onClick={() => {
            nombreUser();
            clavePassword();
          }}
        >
          Login
        </button>
      </main>
    </div>
  );
}

export default App;
