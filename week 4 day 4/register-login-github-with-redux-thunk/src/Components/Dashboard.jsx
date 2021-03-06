import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Fetch } from "./Fetch";

const Dashboard = () => {
  const [query, setQuery] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const { isAuth, isAuth2 } = useSelector((state) => state, shallowEqual);

  const handleSearch = () => {
    Fetch(query).then((res) => {
      setUsers(res.data.items);
    });
  };
  // if (isAuth === "true" && isAuth2 === "true") {
  return isAuth2 ? (
    <div>
      <div>
        <h1> Dashboard </h1>
        <input
          value={query}
          placeholder="query"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {users.map((item) => (
          <div>
            <div>
              <img width="200px" src={item.avatar_url} alt="" />
              <h1>{item.login}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};
export { Dashboard };
