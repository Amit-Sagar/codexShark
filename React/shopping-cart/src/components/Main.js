import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "../styles/Card.module.css";
import Button from "./Button";
const Main = ({ onAddData, userInput }) => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [endPoint, setEndPoint] = useState(9);
  const [page, setPage] = useState({ start: 0, end: endPoint });
  const url = "https://fakestoreapi.com/products";


  const getAPi = () => {
    axios.get(url).then((res) => {
      setLoadData(true);
      return setShoppingItems(res.data);
    });
  };
  

  const searchData = !!userInput
    ? shoppingItems
        .filter((item) => item.title.toLowerCase().includes(userInput))
        .slice(page.start, page.end)
    : shoppingItems.slice(page.start, page.end);


  const loadMoreData = () => {
    setEndPoint(endPoint + 9);
    setPage({ start: 0, end: endPoint });
  };


  useEffect(() => {
    getAPi();
  }, [page]);

  return (
    <div className={styles.container}>
      {loadData ? (
        <div>
          <h2>Best Sales</h2>
          <div className={styles.card_container}>
            {searchData.length ? (
              searchData.map((item) => {
                return <Card item={item} key={item.id} onAddData={onAddData} />;
              })
            ) : (
              <h3>No result found</h3>
            )}
          </div>
          <Button className={styles.btn} onClick={loadMoreData}>
            Load More
          </Button>
        </div>
      ) : (
        <div className={styles.loading}></div>
      )}
    </div>
  );
};

export default Main;
