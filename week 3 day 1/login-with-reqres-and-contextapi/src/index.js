import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./AuthContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  rootElement
);
