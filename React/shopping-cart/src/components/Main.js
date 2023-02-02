import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "../styles/Card.module.css";
const Main = ({onAddData}) => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const getAPi = () => {
    axios.get(url).then((res) => {
      return setShoppingItems(res.data);
    });
  };
  useEffect(() => {
    getAPi();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2>Best Sales</h2>
        <div className={styles.card_container}>
          {shoppingItems.slice(0,12).map((item) => {
            return <Card item={item} key={item.id} onAddData={onAddData}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
