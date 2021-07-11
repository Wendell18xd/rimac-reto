import React from "react";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-fondo">
        <div className="banner-chicaimg">
          <img
            className="banner-chicaimg__grande"
            src="./assets/img/chicacarro.png"
            alt="chica"
          />
          <img
            className="banner-chicaimg__peque"
            src="./assets/img/chicarimacsm.png"
            alt="chica"
          />
        </div>
        <div className="banner-texto">
          <span className="banner-texto__nuevo">¡NUEVO!</span>
          <h1 className="banner-texto__tracking">
            Seguro{" "}
            <span>
              <span>Vehicular</span> Tracking
            </span>
          </h1>
          <p className="banner-texto__parrafo">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </div>
      </div>
    </div>
  );
};
