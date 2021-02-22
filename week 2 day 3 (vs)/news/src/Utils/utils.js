import axios from "axios";

const getUser = (query,page) => {
  const config = {
    url: "https://newsapi.org/v2/everything",
    params: {
      q: query,
      apiKey: "4f37fe8aa6c54630a850409566abf541",
      page,
      pageSize:20
    }
  };
  return axios(config);
};

export { getUser };
