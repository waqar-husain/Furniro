import React from "react";
import style from "./checkout.module.css";

import PageHeader from "../components/pageHeader";
import CheckOutForm from "../components/checkOutForm";

export default function Checkout() {
  return (
    <>
      <PageHeader heading="Checkout" logo="true" />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6.3rem",
          marginBottom: "12.3rem",
          fontSize: "1.6rem",
        }}
      >
        <div className={style.mainCont}>
          <CheckOutForm />
        </div>
      </main>
    </>
  );
}
