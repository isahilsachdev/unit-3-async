import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../Redux/action";
const init = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: ""
};
const Register = () => {
  const [details, setDetails] = React.useState(init);
  const { name, email, username, password, mobile, description } = details;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description
    };
    return dispatch(register(payload));
  };
  return isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={name}
          name="name"
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <input
          type="text"
          placeholder="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={username}
          name="username"
        />
        <input
          type="text"
          placeholder="mobile"
          onChange={handleChange}
          value={mobile}
          name="mobile"
        />

        <input
          type="text"
          placeholder="description"
          onChange={handleChange}
          value={description}
          name="description"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export { Register };
