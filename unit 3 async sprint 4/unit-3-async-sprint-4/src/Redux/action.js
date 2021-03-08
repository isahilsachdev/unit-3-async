import {
  DELETE,
  GET_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  SINGLE_DATA
} from "./actionType";
import axios from "axios";

const get_request = () => {
  return {
    type: GET_REQUEST
  };
};

const get_success = (payload) => {
  return {
    type: GET_SUCCESS,
    payload
  };
};

const get_failure = () => {
  return {
    type: GET_FAILURE
  };
};

const Delete = (id) => {
  return {
    type: DELETE,
    payload: { id }
  };
};
const singleData = (payload) => {
  return {
    type: SINGLE_DATA,
    payload
  };
};

const fetchData = (params) => (dispatch) => {
  return axios
    .get("http:localhost:3000/student")
    .then((res) => dispatch(get_success(res.data)));
};

const singlefetch = ({ id }) => (dispatch) => {
  return axios.get(`http:localhost:3000/student/${id}`).then((res) => {
    console.log(res.data);
    dispatch(singleData(res.data));
  });
};

export {
  fetchData,
  get_failure,
  get_success,
  get_request,
  singleData,
  singlefetch,
  Delete
};
