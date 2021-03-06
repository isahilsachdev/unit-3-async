import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";

import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
const Routes = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};
export { Routes };
