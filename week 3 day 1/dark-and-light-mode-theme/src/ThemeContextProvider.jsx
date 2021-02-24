import React from "react";

export const ThemeContext = React.createContext();
const theme = {
  dark: {
    color: "#fff",
    backgroundColor: "#333"
  },
  light: {
    color: "#333",
    backgroundColor: "lightgrey"
  }
};

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");
  const [dark, setDark] = React.useState(true);

  const toggle = () => {
    setDark(!dark);
    setMode(mode === "light" ? "dark" : "light");
  };

  const value = { toggle, mode, theme, dark, setDark };

  return (
    <ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
