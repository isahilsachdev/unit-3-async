import axios from "axios";

const loginUser = ({ email, password }) => {
  if (!email || !password) {
    return Promise.reject("wrong");
  }
  const config = {
    method: "post",
    data: {
      email,
      password
    },
    url: "https://reqres.in/api/login"
  };
  return axios(config);
};

export { loginUser };
