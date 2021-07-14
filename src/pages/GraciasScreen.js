import React from "react";

import chicobarba from "../img/chicobarba.png";
import sofa from "../img/sofa.png";
import chicobarbasofa from "../img/chicobarbasofa.png";
import { Footer } from "../components/Footer";

export const GraciasScreen = () => {
  return (
    <>
      <div className="authrouter-background-white"></div>
      <div className="gracias">
        <div className="gracias-left">
          <div className="gracias-left-fondosm">
            <img src={chicobarbasofa} alt="chicobarbasofa" />
          </div>
          <div className="gracias-left-img">
            <img src={chicobarba} alt="chico" />
          </div>
          <div className="gracias-left-sofa">
            <img src={sofa} alt="sofa" />
          </div>
        </div>
        <div className="gracias-right">
          <div className="gracias-right-group">
            <div className="gracias-right-group-titulo">
              <h1>
                <span>¡Te damos la bienvenida!</span> Cuenta con nosotros para
                proteger tu vehículo
              </h1>
            </div>
            <div className="gracias-right-group-parrafo">
              <p>
                Enviaremos la confirmación de compra de tu Plan Vehícular
                Tracking a tu correo:
              </p>
              <span>joel.sanchez@gmail.com</span>
            </div>
            <div className="gracias-right-group-botton">
              <button>cómo usar mi seguro</button>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
