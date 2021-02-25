import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const Products = () => {
  const { data } = React.useContext(AppContext);
  return (
    <div>
      <h1>All Products</h1>
      <div>
        {data.map(({ name, price, id }) => {
          return (
            <table style={{ width: "500px", margin: "auto" }}>
              <tr>
                <td style={{ border: "1px solid black", width: "100px" }}>
                  {name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    width: "50px",
                    marginRight: "2px"
                  }}
                >
                  {" "}
                  {price}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    width: "120px",
                    padding: "5px"
                  }}
                >
                  {" "}
                  <Link name={name} to={`/products/${id}`}>
                    More Detail
                  </Link>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export { Products };
