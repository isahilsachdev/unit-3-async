import axios from "axios";

const getUsers = () => {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks");
};
const sendUsers = (title) => {
  const payload = {
    title
  };
  return axios.post(
    "https://json-server-mocker-masai.herokuapp.com/tasks",
    payload
  );
};
export { getUsers, sendUsers };
