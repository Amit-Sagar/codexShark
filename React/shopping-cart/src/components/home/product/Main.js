import React, { useEffect, useState } from "react";
import {fetchProducts} from '../../../store/slices/productSlice'
import {STATUSES} from '../../../store/slices/productSlice'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "../../UI/Card";
import styles from "../../../styles/Card.module.css";
import Button from "../../UI/Button";

const Main = ({ onAddData, userInput }) => {
  const [endPoint, setEndPoint] = useState(8);
  const [page, setPage] = useState({ start: 0, end: endPoint });

  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.product)

  // const searchData = !!userInput
  //   ? shoppingItems
  //       .filter((item) => item.title.toLowerCase().includes(userInput))
  //       .slice(page.start, page.end)
  //   : shoppingItems.slice(page.start, page.end);


  const loadMoreData = () => {
    setEndPoint(endPoint + 8);
    setPage({ start: 0, end: endPoint });
  };


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {status === STATUSES.LOADING ? <div className={styles.loading}></div>:(
        <div>
          <div className={styles.card_container}>
            {/* {searchData.length ? ( */}
            {
              data.slice(page.start, page.end).map((item, index) => {
                return <Card item={item} key={item.id}/>;
              })}
            {/* // ) : (
            //   <h3>No result found</h3>
            // )} */}
          </div>
          <Button className={styles.btn} onClick={loadMoreData} >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Main;
