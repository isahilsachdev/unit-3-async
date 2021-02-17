import React from "react";
import { getData, addData, deleteData } from "./utils";

const TodoApi = () => {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    showTodo();
  }, []);

  const showTodo = () => {
    getData()
      .then((res) => setData(res))
      .then(() => setLoad(false))
      .catch((err) => setErr(true));
  };

  const addTodo = () => {
    addData(title)
      // .then((res) => res.json())
      .then((res) => showTodo())
      .then((res) => setTitle(""))
      .then(() => setLoad(false))
      .catch((err) => setErr(true));
  };

  const deleteTodo = (id) => {
    deleteData(id)
      // .then((res) => res.json())
      .then((res) => showTodo())
      .then(() => setLoad(false))
      .catch((err) => setErr(true));
  };

  const handleToggle = (id) => {
    const updated = data.map((item) =>
      item.id == id ? { ...item, status: !item.status } : item
    );
    setData(updated);
  };

  return load ? (
    <div>...Loading</div>
  ) : err ? (
    <div>Something is wrong</div>
  ) : (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <input
          value={title}
          placeholder="write your todo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <button
              onClick={() => handleToggle(item.id)}
            >{`${item.status}`}</button>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TodoApi };
