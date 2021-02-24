import React from "react";

export const ThemeContext = React.createContext();
const theme = {
  dark: {
    color: "red",
    backgroundColor: "gray"
  },
  light: {
    color: "black",
    backgroundColor: "pink"
  }
};

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const value = { toggle, mode, theme };

  return (
    <ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
