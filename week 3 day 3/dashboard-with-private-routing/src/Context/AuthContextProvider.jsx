import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const toggle = () => {
    setIsAuth((prev) => !prev);
  };
  const value = { isAuth, toggle };
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
