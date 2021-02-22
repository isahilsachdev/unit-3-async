import React from "react";

const Card = ({ login, avatar_url }) => {
  return (
    <div>
      <img width="200px" src={avatar_url} />
      <h1>{login}</h1>
    </div>
  );
};

export { Card };
