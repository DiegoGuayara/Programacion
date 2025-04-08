import "./L-items.css";
import { Paleta } from "../images/svg/L-Items/Paleta";
import { Editar } from "../images/svg/L-Items/Editar";
import { Opciones } from "../images/svg/L-Items/Opciones";
import { Genero } from "../images/svg/L-Items/Genero";
import { GeneroFem } from "../images/svg/L-Items/GeneroFem";
import { Camiseta } from "../images/svg/L-Items/Camiseta";
import { Scene } from "../Shirt-3D/Scene";
import { useState } from "react";

export const L_items = () => {
  const [color, setColor] = useState("white");
  const [menuPaletaisOpen, setmenuPaletaIsOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [isPersonalizarOpen, setIsPersonalizarOpen] = useState(false);
  const [isGeneroOpen, setIsGeneroOpen] = useState(false);
  const [isTipoCamisetaOpen, setIsTipoCamisetaOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handlePaletaClick = () => {
    setmenuPaletaIsOpen(!menuPaletaisOpen);
    if (!menuPaletaisOpen) {
      setIsEditarOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleEditarClick = () => {
    setIsEditarOpen(!isEditarOpen);
    if (!isEditarOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handlePersonalizarClick = () => {
    setIsPersonalizarOpen(!isPersonalizarOpen);
    if (!isPersonalizarOpen) {
      setmenuPaletaIsOpen(false);
      setIsEditarOpen(false);
      setIsGeneroOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleGeneroClick = () => {
    setIsGeneroOpen(!isGeneroOpen);
    if (!isGeneroOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsEditarOpen(false);
      setIsTipoCamisetaOpen(false);
    }
  };

  const handleTipoCamisetaClick = () => {
    setIsTipoCamisetaOpen(!isTipoCamisetaOpen);
    if (!isTipoCamisetaOpen) {
      setmenuPaletaIsOpen(false);
      setIsPersonalizarOpen(false);
      setIsGeneroOpen(false);
      setIsEditarOpen(false);
    }
  };

  const handleRotation = (degrees: number) => {
    setRotation(degrees);
    setIsRotating(false);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    setIsRotating(newSpeed > 0);
  };

  return (
    <div className="hoverArea">
      <div className="relleno-cont1">
        <div className="cont1">
          <button className="buttons-L-items" onClick={handlePaletaClick}>
            <Paleta />
          </button>
          <button className="buttons-L-items" onClick={handleEditarClick}>
            <Editar />
          </button>
          <button className="buttons-L-items" onClick={handlePersonalizarClick}>
            <Opciones />
          </button>
          <button className="buttons-L-items" onClick={handleGeneroClick}>
            <Genero />
          </button>
          <button className="buttons-L-items" onClick={handleTipoCamisetaClick}>
            <Camiseta />
          </button>
        </div>
      </div>

      {menuPaletaisOpen && (
        <div className="color-picker">
          <div id="paleta-colores">
            <div className="titulo-paleta">
              <h2>Background Color</h2>
              <button onClick={() => setmenuPaletaIsOpen(false)}>X</button>
            </div>
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
            <button className="opciones" onClick={() => setColor("white")}>
              Delete Design
            </button>
            <button className="opciones">Delete Background</button>
          </div>
        </div>
      )}

      {isEditarOpen && (
        <div className="editar-container">
          <div className="titulo-editar">
            <h2>Personalizacion</h2>
            <button onClick={() => setIsEditarOpen(false)}>X</button>
          </div>
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
          <h2>Velocidad de animación</h2>
          <input
            type="range"
            min="0"
            max="100"
            className="velocidadAnimacion"
            value={speed}
            onChange={handleSpeedChange}
          />
          <div className="gradosCamiseta">
            <button onClick={() => handleRotation(0)}>0°</button>
            <button onClick={() => handleRotation(45)}>45°</button>
            <button onClick={() => handleRotation(90)}>90°</button>
            <button onClick={() => handleRotation(135)}>135°</button>
            <button onClick={() => handleRotation(180)}>180°</button>
            <button onClick={() => handleRotation(225)}>225°</button>
            <button onClick={() => handleRotation(270)}>270°</button>
            <button onClick={() => handleRotation(315)}>315°</button>
            <button onClick={() => handleRotation(360)}>360°</button>
          </div>
          <button className="direccionAnimacion">Izquierda</button>
          <button className="direccionAnimacion">Derecha</button>
        </div>
      )}

      {isGeneroOpen && (
        <div className="genero-container">
          <h2>Genero</h2>
          <div className="genero-container-buttons">
            <button>
              <GeneroFem />
            </button>
            <button>
              <Genero />
            </button>
          </div>
        </div>
      )}

      {isTipoCamisetaOpen && (
        <div className="tipo-camiseta-container">
          <h2>Tipo de camiseta</h2>
          <div className="tipo-camiseta-container-buttons">
            <button>
              Camiseta <span>👕</span>
            </button>
            <button>
              Camibuso <span>👚</span>
            </button>
            <button>
              Camisa <span>👔</span>
            </button>
            <button>
              Buso <span>🧥</span>
            </button>
            <button>
              Saco <span>🧥</span>
            </button>
            <button>
              Esqueleto <span>🦺</span>
            </button>
          </div>
        </div>
      )}
      <Scene
        color={color}
        rotation={rotation}
        speed={speed}
        isRotating={isRotating}
      />
    </div>
  );
};
