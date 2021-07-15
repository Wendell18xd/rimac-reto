import React from "react";
import { useSelector } from "react-redux";
import chicorimacsm from "../../img/chicorimacsm.png";

export const Cobertura = () => {
  const { placa } = useSelector((state) => state.auth);
  const { marca, fecha } = useSelector((state) => state.cliente);

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
            <p>Placa: {placa}</p>
          </div>
          <div className="armaplan-left-cobertura-placa-detalles__titulo">
            <h2>
              {marca} {fecha} <br /> Golf
            </h2>
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
