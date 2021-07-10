import React from "react";
import chicarimac from "../../img/chicarimac.png";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__texto">
          <p>¡Nuevo!</p>
          <h2>Seguro Vehicular</h2>
          <h2>
            <span>Tracking</span>
          </h2>
          <p>
            <span>Cuentanos donde le haras seguimiento a tu seguro</span>
          </p>
        </div>
        <div className="banner__img">
          <img src={chicarimac} alt="chica" width="100%" />
        </div>
      </div>
    </div>
  );
};
