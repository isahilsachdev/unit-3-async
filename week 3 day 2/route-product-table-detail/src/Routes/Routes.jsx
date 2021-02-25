import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { ProductDetail } from "./ProductDetail";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:userId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
};
export { Routes };
