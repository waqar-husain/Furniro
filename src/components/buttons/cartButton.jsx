"use client";
import React, { useEffect, useState } from "react";
import style from "./cartButton.module.css";
import CartIcon from "../icon/Cart";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

export default function CartButton(props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (props.inCart) setClicked(true);
  }, []);

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked((prev) => !prev);
    if (!clicked) {
      dispatch(cartAction.incrementCart(props.item));
    } else {
      dispatch(cartAction.decrementCart(props.item));
    }
  };
  return (
    <abbr title="Cart">
      <button
        className={style.buttonCart}
        style={props?.styleData}
        onClick={clickHandler}
      >
        <CartIcon fill={clicked ? "#3a3a3a" : "none"} type={props.type} />
        {props?.title && (
          <span className={style.buttonName}>{props?.title}</span>
        )}
      </button>
    </abbr>
  );
}
