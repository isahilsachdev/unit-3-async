import React from "react";

const NewsCard = ({ title, author, description }) => {
  return (
    <div style={{border:"1px solid black" ,textAlign:"center" ,width:"500px" ,margin:"20px auto" ,backgroundColor:"lightgray" }}>
      <h1>{author}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export { NewsCard };
