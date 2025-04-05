import "./R-Items.css";
import { Add } from "../images/svg/R-Items/Add";
import { Manual } from "../images/svg/R-Items/Manual";
import { Save } from "../images/svg/R-Items/Save";
import { Download } from "../images/svg/R-Items/Download";
import { Share } from "../images/svg/R-Items/Share";
import { Cancel } from "../images/svg/R-Items/Cancel";
import { Help } from "../images/svg/R-Items/Help";

export const R_Items = () => {
  return (
    <div className="relleno-cont2">
      <div className="cont2">
        <button className="buttons-R-items">
          <Add />
        </button>
        <button className="buttons-R-items">
          <Manual />
        </button>
        <button className="buttons-R-items">
          <Save />
        </button>
        <button className="buttons-R-items">
          <Download />
        </button>
        <button className="buttons-R-items">
          <Share />
        </button>
        <button className="buttons-R-items">
          <Cancel />
        </button>
        <button className="buttons-R-items">
          <Help />
        </button>
      </div>
    </div>
  );
};
