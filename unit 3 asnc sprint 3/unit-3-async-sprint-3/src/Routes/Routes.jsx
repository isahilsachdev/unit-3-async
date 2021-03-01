import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import { InProduct } from "../Components/InProduct";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/products/:inPro">
          <InProduct />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
