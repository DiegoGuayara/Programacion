import "./App.css";
import React from "react";
import { Header } from "./Header/Header";
import { L_items } from "./L-items/L-items";
import { Scene } from "./Shirt-3D/Scene";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="App">
        <L_items />
        <Scene />
      </main>
    </div>
  );
};
