import { Fetch } from "./Fetch";
import { Card } from "./Card";
import React from "react";

const Github = () => {
  const [query, setQuery] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const handleSearch = () => {
    Fetch(query).then((res) => {
      setUsers(res.data.items);
    });
  };

  return (
    <div>
      <div>
        <h1> Github </h1>
        <input
          value={query}
          placeholder="query"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {users.map((item) => (
          <div>{<Card key={item.id} {...item} />}</div>
        ))}
      </div>
    </div>
  );
};

export { Github };
