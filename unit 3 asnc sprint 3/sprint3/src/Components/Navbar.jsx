import React from 'react';
import styles from '../Css/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div>Home</div>
      <div>Products</div>
      <div>Login</div>
      <div>logo</div>
    </div>
  );
}

export default Navbar;
