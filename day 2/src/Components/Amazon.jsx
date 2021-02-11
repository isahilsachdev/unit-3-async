import React from "react";

const Amazon = ({ back }) => {
  console.log(back);
  return (
    <div
      style={{
        margin: "30px",
        width: "500px",
        height: "400px",
        backgroundColor: back
      }}
    >
      <div style={{ fontSize: "30px" }}>28/10/2020</div>
      <button style={{ fontSize: "30px" }}>Case study</button>
      <h1 style={{ fontSize: "50px" }}>Amazon Gift Pay </h1>
      <h1 style={{ fontSize: "50px" }}>Desktop-Mobile</h1>
    </div>
  );
};

export { Amazon };
