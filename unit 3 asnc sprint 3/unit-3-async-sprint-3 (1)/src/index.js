import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  rootElement
);
