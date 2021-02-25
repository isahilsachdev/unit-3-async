import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const ProductDetail = () => {
  const { userId } = useParams();
  const { data } = React.useContext(AppContext);

  return (
    <div>
      {data.map(
        (item) =>
          item.id == userId && (
            <div>
              <h1>Product is {item.name}</h1>
              <h2>Price is {item.price}</h2>
            </div>
          )
      )}
    </div>
  );
};

export { ProductDetail };
