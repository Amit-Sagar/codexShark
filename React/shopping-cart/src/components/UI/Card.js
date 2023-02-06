import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/slices/cartSlice";
import styles from "../../styles/Card.module.css";
const Card = ({ item, onAddData }) => {
  const dispatch = useDispatch();
  const addData = () => {
    dispatch(add(item));
  };

  return (
    <div className={styles.cards}>
      <img src={item.image} alt="" />
      <div className="flex flex-col h-[150px]">
        <p className="font-medium text-xl mt-1 text-center">{item.title}</p>
        <p className="text-black font-bold text-center">${item.price}</p>
      </div>
      <button className={styles.button} onClick={() => addData(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
