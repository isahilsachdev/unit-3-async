import React, { Children } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [Auth, setisAuth] = React.useState(false);
  const [token, setToken] = React.useState("");
  const handleLogin = (token) => {
    setisAuth(!Auth);
    setToken(token);
  };
  const handleLogout = () => {
    setisAuth(!Auth);
    setToken("");
  };
  const value = { Auth, handleLogin, handleLogout, token, setisAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
