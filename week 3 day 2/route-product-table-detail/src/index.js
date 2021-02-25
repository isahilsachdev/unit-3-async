import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppContextProvider } from "./context/AppContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
  rootElement
);
