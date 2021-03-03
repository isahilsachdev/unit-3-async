import axios from "axios";

const getUsers = (category, offset) => {
  return axios.get("http://api.mediastack.com/v1/news", {
    params: {
      access_key: "1efe21e313e199a3773775736b6a3252",
      categories: category,
      languages: "en",
      offset: offset,
      limit: 5,
    },
  });
  const obj = { "name ": "saknsk ", dlamd: "kak ndklas" };
};
export { getUsers };
