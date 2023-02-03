import React, { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";
import classes from "../styles/Card.module.css";
import Button from "./Button";
import Price_Item from "./Price_Item";
const Cart = ({ cart, onSetCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(1);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      return (ans += item.price);
    });
    setTotalPrice(ans);
  };

  const deletCart = (id) => {
    handlePrice();
    let result = cart.filter((item) => item.id !== id);
    onSetCart(result);
  };

  const addItem = (id) => {
    let addData = cart.find((item) => {
      if(item.id === id){
        if(item.id > 1){
          setTotalItem( item.id = item.id)
        }
      }})

      // if(item.id === id){
      //   setTotalItem(totalItem + 1)
      // }


  }

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className={styles.container}>
      {cart.length == "" ? (
        <h1>Your cart is empty. No item added</h1>
      ) : (
        <div className={styles.left_container}>
          {cart?.map((item, index) => {
            return (
              <div key={item.id} className={styles.content}>
                <img src={item.image} alt="" />
                <div>
                  <p className={classes.title}>{item.title}</p>
                  <div className={styles.quantAndPrice}>
                  <p className={styles.price}>${item.price}</p>
                  <p>Quantity: <span>{totalItem}</span></p>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.btnContainer}>
                    <Button >-</Button>
                    <Button onClick={()=>addItem(item.id)}>+</Button>
                  </div>
                  <Button onClick={() => deletCart(item.id)}>Remove</Button>
                </div>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <Price_Item cart={cart} totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
