import React from "react";
import axios from "axios";
import { AuthContext } from "./AuthContextProvider";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { handleLogin } = React.useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    };
    return axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log(res.data.token);
        handleLogin(res.data.token);
      })
      .catch((err) => "Something went wrong");
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Email</label>
      <input
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export { Form };
