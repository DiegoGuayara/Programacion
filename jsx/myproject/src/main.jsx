import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Practica1 from "./Practica1.jsx";
import Practica2 from "./Practica2.jsx";
import Practica3 from "./Practica3.jsx";
import Practica4 from "./Practica4.jsx";
import Practica5 from "./Practica5.jsx";
import Practica6 from "./Practica6.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Practica1 />
    <Practica2 />
    <Practica3 />
    <Practica4 />
    <Practica5 />
    <Practica6 />
  </StrictMode>
);
