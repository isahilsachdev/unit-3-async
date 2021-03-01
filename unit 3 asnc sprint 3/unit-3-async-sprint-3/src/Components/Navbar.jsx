import React from "react";
import styles from "../Css/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">logo</Link>
    </div>
  );
}

export default Navbar;
