import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { verificarCliente } from "../actions/auth";
import { Header } from "../components/Header";
import { GraciasScreen } from "../pages/GraciasScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(verificarCliente());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <PublicRoute
            exact
            isAuthenticated={logged}
            path="/"
            component={HomeScreen}
          />
          <PrivateRoute
            isAuthenticated={logged}
            path="/auth"
            component={AuthRouter}
          />
          <Route exact path="/gracias" component={GraciasScreen} />
        </Switch>
      </div>
    </Router>
  );
};
