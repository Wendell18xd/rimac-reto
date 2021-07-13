import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import arrowleft from "../img/arrowleft.svg";

export const Sidebar = () => {
  const [medida, setMedida] = useState({
    sm: 50,
    p1: true,
    p2: false,
  });

  const history = useHistory();
  const { location } = history;

  const back = () => {
    history.goBack();
  };

  useEffect(() => {
    if (location.pathname === "/auth/datosauto") {
      setMedida({
        sm: 50,
        p1: true,
        p2: false,
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/auth/armaplan") {
      setMedida({
        sm: 100,
        p1: false,
        p2: true,
      });
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-options-group">
          <div
            className={`sidebar-options-group__navlink ${
              medida.p1 && "sidebar-activeclass"
            } `}
          >
            <span>1</span>
            <p className="sidebar-options-group__text">Datos del auto</p>
          </div>
        </div>
        <div className="sidebar-options-group">
          <div
            className={`sidebar-options-group__navlink ${
              medida.p2 && "sidebar-activeclass"
            } `}
          >
            <span>2</span>
            <p className="sidebar-options-group__text">Arma tu plan</p>
          </div>
        </div>
      </div>
      <div className="sidebar-sm">
        <div className="sidebar-sm-options">
          <div className="sidebar-sm-options-back">
            <button onClick={back}>
              <img src={arrowleft} alt="<" />
            </button>
          </div>
          <div className="sidebar-sm-options-pasos">
            {medida.p1 && <p>Paso 1 de 2</p>}
            {medida.p2 && <p>Paso 2 de 2</p>}
          </div>
          <div className="sidebar-sm-options-barra">
            <div className="sidebar-sm-options-barra__fondo">
              <div
                className="sidebar-sm-options-barra__morado"
                style={{ width: medida.sm + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
