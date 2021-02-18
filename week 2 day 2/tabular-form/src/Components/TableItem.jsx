import React from "react";

const TableItem = ({
  id,
  name,
  age,
  address,
  salary,
  status,
  department,
  handleDelete
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{salary}</td>
      <td>{department}</td>
      <td>{status ? "Married" : "Not married"}</td>

      <td>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </td>
    </tr>
  );
};

export { TableItem };
