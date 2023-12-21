"use client";
import React, { useState } from "react";
import style from "./cartButton.module.css";
import CartIcon from "../icon/cart";

export default function CartButton(props) {
  const [clicked, setClicked] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked((prev) => !prev);
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
