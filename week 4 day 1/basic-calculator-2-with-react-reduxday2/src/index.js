import ReactDOM from "react-dom";
import { store } from "./Redux/store";
import App from "./App";
// import { ReduxProvider } from "./Components/Provider";
import React from "react";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
