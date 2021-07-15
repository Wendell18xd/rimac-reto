import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { ArmaPlanScreen } from "../pages/ArmaPlanScreen";
import { DatosAutoScreen } from "../pages/DatosAutoScreen";

export const AuthRouter = () => {
  return (
    <div className="authrouter">
      <div className="authrouter-background-white"></div>
      <div className="authrouter-content">
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/auth/datosauto" component={DatosAutoScreen} />
            <Route exact path="/auth/armaplan" component={ArmaPlanScreen} />
            <Redirect to="/auth/datosauto" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
