import { Card } from "./Card";
import "./styles.css";
import React from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function App() {
  const { theme, mode } = React.useContext(ThemeContext);

  return (
    <div style={theme[mode]} className="App">
      <Card />
    </div>
  );
}
