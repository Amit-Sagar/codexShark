import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [userInput, setUserInput] = useState([]);

  const addDataOnCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navbar
        size={cart.length}
        onSetShow={setShow}
        onSetUserInput={setUserInput}
      />
      {show ? (
        <Main onAddData={addDataOnCart} userInput={userInput} />
      ) : (
        <Cart cart={cart} onSetCart={setCart} />
      )}
    </div>
  );
}

export default App;
