import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, fetchData } from "../Redux/action";
import { Card } from "./Card";
export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(Delete(id));
  };

  console.log(data);
  return (
    <div>
      <h1>All Students</h1>
      {data.map((item) => (
        <>
          <Card key={item.id} {...item} />
          <button key={item.name} onClick={() => handleDelete(item.id)}>
            Delete {item.name}'s details?
          </button>
        </>
      ))}
    </div>
  );
};
