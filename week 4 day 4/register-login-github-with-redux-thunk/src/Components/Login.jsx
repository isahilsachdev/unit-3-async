import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../Redux/action";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isAuth2 = useSelector((state) => state.isAuth2);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      password,
      username
    };
    return dispatch(login(payload));
  };

  return isAuth2 ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          name="username"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export { Login };
