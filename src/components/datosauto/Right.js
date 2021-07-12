import React from "react";
import iconcar from "../../img/icon_car.svg";
import raya224 from "../../img/raya224.png";

export const Right = () => {
  return (
    <div className="datosauto-right">
      <div className="datosauto-right-ayuda">
        <p className="datosauto-right-ayuda__ayuda">AYUDA</p>
        <div className="datosauto-right-ayuda__hr">
          <img src={raya224} alt="-" />
        </div>
        <div className="datosauto-right-ayuda__modelo">
          <div className="datosauto-right-ayuda__modelo-texto">
            <span>¿No encuentras el modelo ?</span>
            <p className="datosauto-right-ayuda__click">clic aquí</p>
          </div>
          <img src={iconcar} alt="iconcar" />
        </div>
      </div>
    </div>
  );
};
