import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const { isAuth, toggle } = React.useContext(AuthContext);
  const handleLogin = () => {
    toggle();
  };
  return !isAuth ? (
    <button onClick={handleLogin}>Sign In</button>
  ) : (
    <Redirect to={"/dashboard"} />
  );
};

export { Login };
