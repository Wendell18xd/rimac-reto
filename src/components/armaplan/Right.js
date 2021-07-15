import React from "react";

import vf from "../../img/vf.png";
import checkgreen from "../../img/checkgreen.svg";
import { useSelector } from "react-redux";

export const Right = () => {
  const { precio } = useSelector((state) => state.cobertura);

  return (
    <div className="armaplan-right">
      <div className="armaplan-right-dinero">
        <div>
          <div className="armaplan-right-dinero__numero">
            <h1>${precio}.00</h1>
          </div>
          <div className="armaplan-right-dinero__mes">
            <p>MENSUAL</p>
          </div>
        </div>
        <div className="armaplan-right-logo">
          <div className="armaplan-right-logo__img">
            <img src={vf} alt="VF" />
          </div>
          <div className="armaplan-right-logo__parrafo">
            <h3>Vehicular Flexible</h3>
          </div>
        </div>
      </div>
      <hr className="armaplan-right-hr" />
      <div className="armaplan-right-precioincluye">
        <h1>El precio incluye:</h1>
        <p>
          <span>
            <img src={checkgreen} alt="check" />
          </span>
          Llanta de respuesto
        </p>
        <p>
          <span>
            <img src={checkgreen} alt="check" />
          </span>
          Analisis de motor
        </p>
        <p>
          <span>
            <img src={checkgreen} alt="check" />
          </span>
          Aros gratis
        </p>
      </div>

      <div className="armaplan-right-botton">
        <button>lo quiero </button>
      </div>
    </div>
  );
};
