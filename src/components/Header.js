import React from "react";
import logo from "../img/rimaclogo.png";

export const Header = () => {
  return (
    <div className="header">
      <p className="header__text">¿Tienes alguna duda?</p>
      <img src={logo} alt="logo" width="100%" />
      <div className="header__group__celular">
        <p className="header__number">
          <i className="fas fa-phone-alt"></i> (01) 411 6001
        </p>
        <p className="header__number__md">
          <i className="fas fa-phone-alt"></i> Llamanos
        </p>
      </div>
    </div>
  );
};
