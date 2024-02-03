import React from "react";
import style from "@/src/app/cart/cart.module.css";
import ButtonSecondary from "../buttons/buttonSecondary";

export default function CartTotal() {
  return (
    <>
      <div className={style.cartTotal}>
        <h1 className={style.cartTotalHead}>Cart Totals</h1>
        <div className={style.cartTotalMain}>
          <div className={style.cartPrices}>
            <div style={{ display: "flex" }}>
              <span style={{ flex: "1" }}>Subtotal</span>
              <span className={style.priceSubtotal}>Rs. 250,000.00</span>
              {/* Subtotal by Redux */}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: "1" }}>Total</span>
              <span className={style.priceTotal}>Rs. 250,000.00</span>
              {/* total by Redux */}
            </div>
          </div>
          <ButtonSecondary
            title="Check Out"
            styleObj={{ padding: "1.4rem 5.9rem" }}
            url="/checkout"
          />
        </div>
      </div>
    </>
  );
}
