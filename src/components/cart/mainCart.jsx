"use client";
import React from "react";

import style from "@/src/app/cart/cart.module.css";

import NoItem from "../partials/noItems/noItem";
import CartTotal from "./cartTotal";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";

export default function MainCart() {
  const cart = useSelector((state) => state.cart.cartList);

  return (
    <>
      {cart.length !== 0 && (
        <div className={style.cartInner}>
          <div className={style.cartItems}>
            <div className={style.cartItemsTop}>
              <div
                style={{
                  maxWidth: "399px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Product
              </div>
              <div
                style={{
                  maxWidth: "140px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Price
              </div>
              <div
                style={{
                  maxWidth: "100px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Quantity
              </div>
              <div
                style={{
                  maxWidth: "145px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Subtotal
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////// */}
            <div className={style.cartItem}>
              {cart.map((el, i) => (
                <CartItem key={i} item={el} />
              ))}
            </div>
            {/* ///////////////////////////////////////////////////////////////////////// */}
          </div>
          <CartTotal />
        </div>
      )}
      {cart.length === 0 && <NoItem text="Your Cart Is Empty!" button="true" />}
    </>
  );
}
