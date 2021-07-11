import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
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
    </div>
  );
};
