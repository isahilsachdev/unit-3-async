import React from "react";
import styles from "./Grocery.module.css";

const GroceryCard = ({
  product_name,
  image_url,
  description,
  is_available,
  price
}) => {
  const [quan, setQuan] = React.useState(1);
  const handleReduce = () => {
    if (quan >= 1) { setQuan((prev) => prev - 1)} 
  };

  const handleAdd = () => {
    setQuan((prev) => prev + 1);
  };
    
  

  return (
    <div className={styles.card}>
      <div>
        <img src={image_url} />
      </div>
      <div className={styles.details}>
        <h4>{product_name}</h4>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
      <div>
        <div className={styles.buttons}>
          {quan ? <button onClick={handleReduce}>-</button> : null}
          <div>{quan}</div>
          <button onClick={handleAdd}>+</button>
        </div>
        <div>{is_available ? <button style={{backgroundColor:"lightgreen"}}>High Stock</button> : <button style={{backgroundColor:"red"}}>Low Stock</button>}</div>
      </div>
    </div>
  );
};

export { GroceryCard };
