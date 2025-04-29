import { Scene } from "./Cap-3D/Scene";
import { L_items } from "./L-Items/L_Items";
import { R_Items } from "./R-Items/R-Items";
import './Cap-Main.css'

export const Cap_Main = () => {
  return (
    <main style={{width:'90vw', height:'100vh'}}>
      <L_items/>
      <Scene />
      <R_Items/>
    </main>
  );
};
