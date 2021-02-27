import { React } from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  rootElement
);
