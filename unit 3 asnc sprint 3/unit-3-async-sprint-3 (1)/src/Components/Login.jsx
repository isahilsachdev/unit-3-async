import React from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

const Login = () => {
  const { isAuth, toggle } = React.useContext(AppContext);
  const handleLogin = () => {
    toggle();
  };
  return !isAuth ? (
    <div>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  ) : (
    <Redirect to={"/users"} />
  
  );
};

export { Login };
