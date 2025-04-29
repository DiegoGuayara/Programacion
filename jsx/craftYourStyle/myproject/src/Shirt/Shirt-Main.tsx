import { L_items } from "./L-items/L-items";
import { R_Items } from "./R-Items/R-Items";
import { Scene } from "./Shirt-3D/Scene";
import "./Shirt-Main.css";

export const Shirt_Main = () => {
  return (
    <main style={{width:'90vw', height:'100vh'}}>
      <L_items />
      <Scene />
      <R_Items />
    </main>
  );
};
