import "./L-items.css";
import { Paleta } from "../images/svg/Paleta";
import { Editar } from "../images/svg/Editar";
import { Opciones } from "../images/svg/Opciones";
import { Genero } from "../images/svg/Genero";
import { Camiseta } from "../images/svg/Camiseta";

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
