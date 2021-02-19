import axios from "axios";

const Fetch = (query) => {
  if (!query) {
    return Promise.reject("wrong");
  }
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query
    }
  });
};

export { Fetch };
