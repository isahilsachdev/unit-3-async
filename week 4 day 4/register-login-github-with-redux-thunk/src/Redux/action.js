import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";
// import { useDispatch } from "react-redux";
const register_success = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload
  };
};

const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

const register = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8080/auth/register", payload)
    .then((res) => dispatch(register_success(payload)))
    .catch((err) => {
      "something went wrong";
    });
};

const login = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8080/auth/login", payload)
    .then((res) => dispatch(login_success(payload)))
    .catch((err) => {
      "something went wrong";
    });
};

export { register_success, login_success, register, login };
