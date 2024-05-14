import React from "react";
import style from "./cart.module.css";
import BottomBanner from "../../components/partials/bottomBanner/bottomBanner";
import PageHeader from "../../components/partials/pageHeader/pageHeader";
import MainCart from "../../components/cart/mainCart";

export default function Cart() {
  return (
    <>
      <PageHeader heading="Cart" />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <section className={style.cartSec}>
          <MainCart />
        </section>
      </main>
      <BottomBanner />
    </>
  );
}
