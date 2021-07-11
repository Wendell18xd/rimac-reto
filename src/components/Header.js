import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          className="header-logo__img"
          src="./assets/img/logo.png"
          alt="logo"
        />
      </div>
      <div className="header-contactar">
        <span className="header-contactar__text">¿Tienes alguna duda?</span>
        <div className="header-contactar-phone-icon">
          <img
            className="header-contactar-phone-icon__img"
            src="./assets/img/phone.svg"
            alt="phone"
          />
        </div>
        <div className="header-contactar-phone">
          <span className="header-contactar-phone__number">(01) 411 6001</span>
        </div>
      </div>
    </div>
  );
};
