import React from "react";
import styles from "../styles/Card.module.css";
const Card = ({ item, onAddData }) => {
  return (
    <div className={styles.cards}>
      <img src={item.image} alt=""/>
      <div className={styles.card_type}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>${item.price}</p>
      </div>
      <button className={styles.button} onClick={() => onAddData(item)}>Add to Cart</button>
    </div>
  );
};

export default Card;
