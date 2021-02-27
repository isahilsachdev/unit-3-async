import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { Dashboard } from "../Components/Dashboard";
import { Settings } from "../Components/Settings";
import { PrivateRoute } from "./PrivateRoutes";
import { Login } from "../Components/Login";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <PrivateRoute redirectPath="/login" exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute
          redirectPath="/dashboard"
          exact
          path="/dashboard/settings"
        >
          <Settings />
        </PrivateRoute>

        <Route>
          <h1>Error 404 , not found</h1>
        </Route>
      </Switch>
    </div>
  );
};
export { Routes };
