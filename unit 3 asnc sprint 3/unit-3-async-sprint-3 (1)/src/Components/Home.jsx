import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleAllProducts = () => {
    history.push("/products");
  };
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleAllProducts}>All Products</button>
    </div>
  );
}

export default Home;
