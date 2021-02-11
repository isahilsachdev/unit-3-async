import React from "react";

const Data = ({ data }) => {
  console.log(data);
  const { name, location, description, arr } = data;

  return (
    <div
      style={{ width: "400px", height: "500px", backgroundColor: "darkblue" }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          margin: "auto",
          backgroundColor: "purple"
        }}
      >
        <img
          style={{ marginTop: "5px", borderRadius: "14px" }}
          src="https://tse1.mm.bing.net/th?id=OIP.PEoJopw6_8ds7jz7nOEcVwHaKH&pid=Api&rs=1&c=1&qlt=95&w=84&h=115"
          alt=""
        />
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{description}</h2>
        <div
          style={{ color: "#fff", marginTop: "5px", border: "1px solid black" }}
        >
          <h1>Skills</h1>
          <div style={{ display: "flex" }}>
            {arr.map((item) => (
              <h3 style={{ margin: "4px" }}>{item}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Data };
