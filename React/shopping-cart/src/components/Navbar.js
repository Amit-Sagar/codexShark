import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = ({ size, onSetShow, onSetUserInput }) => {
  const searchHandler = (e) => onSetUserInput(e.target.value);

  return (
    <nav>
      <div className={styles.nav_box}>
        <span className={styles.my_shop} onClick={() => onSetShow(true)}>
          Lets's Shopping
        </span>
      </div>
      <div className={styles.users}>
        <input
          className="form-control me-2"
          id="myInput"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={searchHandler}
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li></li>
            {/* <li>
              <a className="dropdown-item active" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li> */}
          </ul>
        </div>
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
