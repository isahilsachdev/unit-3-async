import React from "react";
import { TableItem } from "./TableItem";
import { v4 as uuid } from "uuid";
import "./Table.css";

const init = {
  name: "",
  age: "",
  address: "",
  salary: "",
  department: "",
  status: false
};
const Table = () => {
  const [details, setDetails] = React.useState(init);
  const { name, age, address, salary, department, status } = details;
  const [data, setData] = React.useState([]);
  const [sort, setSort] = React.useState([]);
  const [dep, setDep] = React.useState([]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setDetails({ ...details, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...details, id: uuid() };
    setData([...data, payload]);
  };
  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const Filter = (item) => {
    switch (dep) {
      case "production":
        return item.department === "production";
      case "sales":
        return item.department === "sales";
      default:
        return item.department;
    }
  };
  const Sort = (a, b) => {
    switch (sort) {
      case "inc":
        return a.salary - b.salary;
      case "dec":
        return b.salary - a.salary;
      default:
        return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="age"
        />
        <br />
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="address"
        />
        <br />
        <input
          type="text"
          name="salary"
          value={salary}
          onChange={handleChange}
          placeholder="salary"
        />
        <br />
        <select name="department" value={department} onChange={handleChange}>
          {["select", "production", "sales"].map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        <br />
        Marital Status
        <input
          type="checkbox"
          name="status"
          checked={status}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
      <select name="dep" value={dep} onChange={(e) => setDep(e.target.value)}>
        <option value="select">Both</option>
        {["production", "sales"].map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      <select
        name="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="select">Original</option>
        {["inc", "dec"].map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      <table>
        <th>NAME</th>
        <th>AGE</th>
        <th>ADDRESS</th>
        <th>SALARY</th>
        <th>DEPARTMENT</th>
        <th>MARITAL STATUS</th>
        {data
          .filter(Filter)
          .sort(Sort)
          .map((item) => (
            <TableItem key={item.id} {...item} handleDelete={handleDelete} />
          ))}
      </table>
    </div>
  );
};

export { Table };
