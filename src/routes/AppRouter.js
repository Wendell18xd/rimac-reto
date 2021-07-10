import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ArmaPlanScreen } from "../pages/ArmaPlanScreen";
import { DatosAutoScreen } from "../pages/DatosAutoScreen";
import { GraciasScreen } from "../pages/GraciasScreen";
import { HomeScreen } from "../pages/HomeScreen";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/datosauto" component={DatosAutoScreen} />
          <Route path="/armaplan" component={ArmaPlanScreen} />
          <Route path="/gracias" component={GraciasScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};
