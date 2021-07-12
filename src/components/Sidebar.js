import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import arrowleft from "../img/arrowleft.svg";

export const Sidebar = () => {
  const [medida, setMedida] = useState({
    sm: 50,
    md: "sidebar-activeclass",
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
        md: "sidebar-activeclass",
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/auth/armaplan") {
      setMedida({
        sm: 100,
        md: "sidebar-activeclass",
      });
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-options-group">
          <NavLink
            exact
            to="/auth/datosauto"
            activeClassName="sidebar-activeclass"
            className="sidebar-options-group__navlink"
          >
            <span>1</span>
            <p className="sidebar-options-group__text">Datos del auto</p>
          </NavLink>
        </div>
        <div className="sidebar-options-group">
          <NavLink
            exact
            to="/auth/armaplan"
            activeClassName="sidebar-activeclass"
            className="sidebar-options-group__navlink"
          >
            <span>2</span>
            <p className="sidebar-options-group__text">Arma tu plan</p>
          </NavLink>
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
            <p>Paso 1 de 2</p>
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
