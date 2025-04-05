import "./L-items.css";
import { Paleta } from "../images/svg/L-Items/Paleta";
import { Editar } from "../images/svg/L-Items/Editar";
import { Opciones } from "../images/svg/L-Items/Opciones";
import { Genero } from "../images/svg/L-Items/Genero";
import { Camiseta } from "../images/svg/L-Items/Camiseta";

export const L_items = () => {
  return (
    <div className="relleno-cont1">
      <div className="cont1">
        <button className="buttons-L-items">
          <Paleta />
        </button>
        <button className="buttons-L-items">
          <Editar />
        </button>
        <button className="buttons-L-items">
          <Opciones />
        </button>
        <button className="buttons-L-items">
          <Genero />
        </button>
        <button className="buttons-L-items">
          <Camiseta />
        </button>
      </div>
    </div>
  );
};
