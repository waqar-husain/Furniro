import React from "react";
import style from "@/src/app/cart/cart.module.css";
import ButtonSecondary from "../buttons/buttonSecondary";
import { useSelector } from "react-redux";
import { formatNum } from "@/src/util/numerFormat";

export default function CartTotal() {
  const { subTotal, totalPrice } = useSelector((state) => state.cart);
  return (
    <>
      <div className={style.cartTotal}>
        <h1 className={style.cartTotalHead}>Cart Totals</h1>
        <div className={style.cartTotalMain}>
          <div className={style.cartPrices}>
            <div>
              <div style={{ display: "flex" }}>
                <span style={{ flex: "1" }}>Subtotal</span>
                <span className={style.priceSubtotal}>
                  {formatNum(subTotal)}
                </span>
                {/* Subtotal by Redux */}
              </div>
              <div style={{ display: "flex", marginTop: "1rem" }}>
                <span style={{ flex: "1" }}>Delivery</span>
                <span
                  className={style.priceSubtotal}
                  style={{
                    color: "#388E3C",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                  }}
                >
                  FREE
                </span>
                {/* Subtotal by Redux */}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: "1", fontSize: "2rem" }}>Total</span>
              <span className={style.priceTotal}>{formatNum(totalPrice)}</span>
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
