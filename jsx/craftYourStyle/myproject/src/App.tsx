import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Header } from "./Header/Header";
import { Shirt_Main } from "./Shirt/Shirt-Main";
import { Cap_Main } from "./Cap/Cap-Main";
import { Pants_Main } from "./Pants/Pants-Main";
import { Home } from "./Home/Home";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";

export const App: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let backgroundClass = "";

  switch (pathname) {
    case "/Home":
      backgroundClass = "background-home"; // Home
      break;
    case "/cap":
    case "/shirt":
    case "/pants":
    case "/outfit":
      backgroundClass = "background-other"; // Cap y Shirt
      break;

    default:
      backgroundClass = "background-other"; // Para cualquier otra ruta futura
  }

  return (
    <div className={backgroundClass}>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/cap" element={<Cap_Main />} />
        <Route path="/shirt" element={<Shirt_Main />} />
        <Route path="/pants" element={<Pants_Main />} />
        <Route path="/outfit" />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
