import React, { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";
import classes from "../styles/Card.module.css";
import Button from "./Button";
import Price_Item from "./Price_Item";
const Cart = ({ cart, onSetCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  
  const handlePrice = () => {
    let ans = 0
    cart.map((item )=>{
      return(
        ans += item.price 
      )
    })
    setTotalPrice(ans)
  }

const deletCart = (id) => {
  handlePrice()
  let result = cart.filter((item) => item.id !== id)
  onSetCart(result)
  
}

  useEffect(() => {
    handlePrice()
  },)
  
  return (
    <div className={styles.container}>
      {cart.length == "" ? <h1>Your cart is empty. No item added</h1> 
      :
      <div className={styles.left_container}>
        {cart?.map((item) => {
          return (
            <div key={item.id} className={styles.content}>
              <div>
                <p className={classes.title}>{item.title}</p>
                <p className={styles.price}>${item.price}</p>
              </div>
              <div className={styles.button}>
                <Button>-</Button>
                <Button>+</Button>
              </div>
              <div>
                <Button className={styles.button} onClick={()=>deletCart(item.id)}>Remove</Button>
              </div>
              <br />
              <br />
              <div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
}
      <Price_Item cart={cart} totalPrice={totalPrice}/>
    </div>
  );
};

export default Cart;
