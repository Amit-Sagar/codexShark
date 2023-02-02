import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = ({size, onSetShow}) => {
  return (
    <nav>
      <div className={styles.nav_box}>
        <span className={styles.my_shop} onClick={() => onSetShow(true)}>Lets's Shopping</span>
      </div>
      <div className={styles.carts} onClick={() => onSetShow(false)}>
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span className={styles.size}>{size}</span>
      </div>
      
    </nav>
  );
};

export default Navbar;
