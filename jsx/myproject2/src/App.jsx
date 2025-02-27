import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState('')

  function datosUser(){    
  }

  return (
    <div>
      <main>
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder="Username"
        onChange={(e) => setTexto(e.target.value)}/>
        <input type="password" placeholder="Password"/>
        <a href="">Forgot your Password?</a>
        <button>Login</button>
        
      </main>
    </div>
  );
}

export default App;
