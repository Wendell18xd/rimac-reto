import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { ArmaPlanScreen } from "../pages/ArmaPlanScreen";
import { DatosAutoScreen } from "../pages/DatosAutoScreen";
import { GraciasScreen } from "../pages/GraciasScreen";

export const AuthRouter = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Switch>
          <Route exact path="/auth/datosauto" component={DatosAutoScreen} />
          <Route exact path="/auth/armaplan" component={ArmaPlanScreen} />
          <Route exact path="/auth/gracias" component={GraciasScreen} />

          <Redirect to="/auth/datosauto" />
        </Switch>
      </div>
    </>
  );
};
