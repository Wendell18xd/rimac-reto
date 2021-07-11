import React from "react";

export const Banner = () => {
  return (
    <div className="banner">
      <div
        className="banner-fondo"
        style={{ backgroundImage: "url(./assets/img/fondorimac.png)" }}
      >
        <div className="banner-chicaimg">
          <img src="./assets/img/chicacarro.png" alt="chica" />
        </div>
        <div className="banner-texto">
          <span className="banner-texto__nuevo">¡NUEVO!</span>
          <h1 className="banner-texto__tracking">
            Seguro <span>Vehicular Tracking</span>
          </h1>
          <p className="banner-texto__parrafo">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </div>
      </div>
    </div>
  );
};
