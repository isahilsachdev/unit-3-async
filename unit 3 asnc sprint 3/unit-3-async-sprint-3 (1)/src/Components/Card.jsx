import React from "react";
import styles from "../Css/Card.module.css";

const Card = ({ id, name, category, price, handleIncard }) => {
  return (
    <div className={styles.card} onClick={() => handleIncard(id)}>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h2>{price}</h2>
    </div>
  );
};
export { Card };
