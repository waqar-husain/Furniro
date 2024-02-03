"use client";
import React from "react";
import style from "./inputNumberProudct.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

function InputNumberProduct(props) {
  const dispatch = useDispatch();

  return (
    <div className={style.inputItem}>
      <button
        className={`${style.inputButtons} ${style.left}`}
        onClick={(e) => {
          e.preventDefault();
          if (props.item.quantity === 1) return;
          dispatch(cartAction.decrementCart(props.item));
        }}
      >
        &minus;
      </button>
      <input
        id="quantity"
        type="number"
        readOnly="readonly"
        value={props.item.quantity}
        className={style.inputBar}
      />
      <button
        className={`${style.inputButtons} ${style.right}`}
        onClick={(e) => {
          e.preventDefault();
          if (props.item.quantity === 5) return;
          dispatch(cartAction.incrementCart(props.item));
        }}
      >
        +
      </button>
    </div>
  );
}

export default InputNumberProduct;
