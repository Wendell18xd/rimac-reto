import React from "react";

import line from "../../img/Line.svg";
import mass from "../../img/mass.svg";
import arrow from "../../img/arrow.svg";
import raya from "../../img/raya.png";
import rayita from "../../img/rayita.svg";
import { Right } from "./Right";
import { useHistory } from "react-router-dom";
import { Footer } from "../Footer";

export const Left = () => {
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <>
      <div className="datosauto-left">
        <div className="datosauto-left-volver">
          <button onClick={back}> {"<"} </button>
          <p>VOLVER</p>
        </div>
        <div className="datosauto-left-titulo">
          <h1>
            ¡Hola, <span>Juan!</span>
          </h1>
          <p>Completa los datos de tu auto</p>
        </div>
        <div className="datosauto-left-formulario">
          <form>
            <div className="datosauto-left-formulario-content">
              <div>
                <div className="datosauto-left-formulario__group">
                  <label>Año</label>
                  <select>
                    <option value="2019">2019</option>
                  </select>
                </div>
                <div className="datosauto-left-formulario__group">
                  <label>Marca</label>
                  <select>
                    <option value="Wolkswagen">Wolkswagen</option>
                  </select>
                </div>
              </div>
              <Right />
            </div>
            <div className="datosauto-left-formulario-sino">
              <span>¿Tu auto es a gas?</span>
              <div className="datosauto-left-formulario-sino__group">
                <div className="datosauto-left-formulario-sino__radio">
                  <input type="radio" id="si" name="sino" value="si" />
                  <label htmlFor="si">Sí</label>
                </div>
                <div className="datosauto-left-formulario-sino__radio">
                  <input type="radio" id="no" name="sino" value="no" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div className="datosauto-left-formulario-raya">
              <img src={raya} alt="raya" />
            </div>
            <div className="datosauto-left-formulario-suma">
              <div className="datosauto-left-formulario-suma__text">
                <p>Indica la suma asegurada</p>
                <p>
                  <span className="datosauto-left-formulario-suma__min">
                    MIN $12,500
                  </span>
                  <img src={rayita} alt="|" />
                  <span className="datosauto-left-formulario-suma__max">
                    MAX $16,500
                  </span>
                </p>
              </div>
              {/* SUMAS Y RESTAR -- Inicio */}
              <div className="datosauto-left-formulario-suma-accion">
                <button
                  className="datosauto-left-formulario-suma-accion__menos"
                  type="button"
                >
                  <img src={line} alt="-" />
                </button>
                <span>$ 14,300</span>
                <button
                  className="datosauto-left-formulario-suma-accion__mas"
                  type="button"
                >
                  <img src={mass} alt="+" />
                </button>
              </div>
              {/* SUMAS Y RESTAR -- End */}
            </div>
            <div className="datosauto-left-formulario-continuarbtn">
              <button className="btn btn--primary datosauto-left-formulario-continuarbtn__next">
                <span>CONTINUAR</span> <img src={arrow} alt="arrow" />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
