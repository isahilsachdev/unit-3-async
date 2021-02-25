import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/products", title: "All Products" }
];

const Linkpage = () => {
  return (
    <div>
      {links.map(({ to, title }) => (
        <div key={to}>
          <Link to={to}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export { Linkpage };
