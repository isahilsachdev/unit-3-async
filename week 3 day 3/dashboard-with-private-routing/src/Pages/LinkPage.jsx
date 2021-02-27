import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/login", title: "Login" },
  { to: "/dashboard", title: "Dashboard" }
];

const LinkPage = () => {
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

export { LinkPage };
