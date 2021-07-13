import React from "react";
import chicorimacsm from "../../img/chicorimacsm.png";

export const Cobertura = () => {
  return (
    <div className="armaplan-left-cobertura">
      <div className="armaplan-left-cobertura-titulo">
        <h1>Mira las coberturas</h1>
      </div>
      <div className="armaplan-left-cobertura-parrafo">
        <p>Conoce las coberturas para tu plan</p>
      </div>
      <div className="armaplan-left-cobertura-placa">
        <div className="armaplan-left-cobertura-placa-detalles">
          <div className="armaplan-left-cobertura-placa-detalles__numero">
            <p>Placa: C2U-114</p>
          </div>
          <div className="armaplan-left-cobertura-placa-detalles__titulo">
            <h2>Wolkswagen 2019 Golf</h2>
          </div>
          <div className="armaplan-left-cobertura-placa-detalles__botton">
            <p>editar</p>
          </div>
        </div>
        <div className="armaplan-left-cobertura-placa-imagen">
          <img src={chicorimacsm} alt="chicorimac" />
        </div>
      </div>
    </div>
  );
};
