import React from "react";
import { getUsers, sendUsers } from "../Utils/utils";

const Todo = () => {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    handleUsers();
  }, []);

  const handleUsers = () => {
    getUsers().then((res) => setData(res.data));
  };
  const handlePost = () => {
    sendUsers(value).then(() => handleUsers());
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="post todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handlePost}>Send</button>
      <div>
        {data.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
export { Todo };
