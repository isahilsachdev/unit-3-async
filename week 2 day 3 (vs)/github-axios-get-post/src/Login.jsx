import React from "react";
import loginUser from "./LoginUser";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [auth, setAuth] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password }).then((res) => {
      setAuth(true);
      setToken(res.data.token);
    });
  };
  if (auth) {
    return <div>Token : {token}</div>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <input type="submit" />
      </form>
    </>
  );
};

export { Login };
