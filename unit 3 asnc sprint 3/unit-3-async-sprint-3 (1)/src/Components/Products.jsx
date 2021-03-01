import React from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Card } from "./Card";
import { useHistory, useParams } from "react-router-dom";

function Products() {
  const { data } = React.useContext(AppContext);
  const { inPro } = useParams();
  const history = useHistory();

  const handleIncard = () => {
    history.push(`/products/${inPro}`);
  };
  console.log(data);
  return (
    <div>
      {data.map((i) => (
        <Card key={i.id} {...i} handleIncard={handleIncard} />
      ))}
    </div>
  );
}

export default Products;
