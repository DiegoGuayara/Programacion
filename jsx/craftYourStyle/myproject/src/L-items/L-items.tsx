import "./L-items.css";
import { Paleta } from "../images/svg/L-Items/Paleta";
import { Editar } from "../images/svg/L-Items/Editar";
import { Opciones } from "../images/svg/L-Items/Opciones";
import { Genero } from "../images/svg/L-Items/Genero";
import { Camiseta } from "../images/svg/L-Items/Camiseta";
import { Scene } from "../Shirt-3D/Scene";
import { useState } from "react";

export const L_items = () => {
  const [color, setColor] = useState("white");
  const [menuPaletaisOpen, setmenuPaletaIsOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [isPersonalizarOpen, setIsPersonalizarOpen] = useState(false);

  return (
    <div className="hoverArea">
      <div className="relleno-cont1">
        <div className="cont1">
          <button
            className="buttons-L-items"
            onClick={() => setmenuPaletaIsOpen(!menuPaletaisOpen)}
          >
            <Paleta />
          </button>
          <button
            className="buttons-L-items"
            onClick={() => setIsEditarOpen(!isEditarOpen)}
          >
            <Editar />
          </button>
          <button className="buttons-L-items" onClick={() => setIsPersonalizarOpen(!isPersonalizarOpen)}>
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

      {menuPaletaisOpen && (
        <div className="color-picker">
          <div id="paleta-colores">
            <h2>Background Color</h2>
            <div className="coloresPrincipales">
              <button
                style={{ backgroundColor: "red" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("red")}
              ></button>
              <button
                style={{ backgroundColor: "blue" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("blue")}
              ></button>
              <button
                style={{ backgroundColor: "green" }}
                className="color-coloresPrincipales"
                onClick={() => setColor("green")}
              ></button>
              <input
                type="color"
                name="color"
                id="color"
                value={color}
                className="color-coloresPrincipales"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div id="cuadro-cuadricula"></div>

            <button className="opciones">Upload Design</button>
            <button className="opciones">Delete Design</button>
            <button className="opciones">Delete Background</button>
          </div>
        </div>
      )}

      {isEditarOpen && (
        <div className="editar-container">
          <h2>Personalizacion</h2>
          <label className="check-label">
            <input type="checkbox" />
            Cuello
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Brazalete
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Dobladillo inferior
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Mangas
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Interior
          </label>
          <label className="check-label">
            <input type="checkbox" />
            Fondo
          </label>
          <button>Personalizar colores</button>
        </div>
      )}

      {isPersonalizarOpen && (
        <div className="personalizar-container">
          <h2>Personalizar colores</h2>
          <button>Personalizar colores</button>
        </div>
      )}
      <Scene color={color} />
    </div>
  );
};
