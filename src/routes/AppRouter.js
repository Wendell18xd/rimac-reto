import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "../components/Header";
import { HomeScreen } from "../pages/HomeScreen";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={HomeScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
