import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/slices/cartSlice";
import Button from "../UI/Button";
const Cart = ({ cart, onSetCart }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const handleRemove = (id ) => {
    dispatch(remove(id));
  }

  return (
    <div>
      {cartItems.map((product) => {
        return (
          <div
            key={product.id}
            className="flex items-center justify-between mb-5 p=[14px] rounded-xl bg-slate-200 w-[80%]"
          >
            <img src={product.image} alt="" className="w-[200px] h-[120px]" />
            <h5>{product.title}</h5>
            <h5 className="mr-10">{product.price}</h5>
            <Button className="bg-indigo-900" onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
