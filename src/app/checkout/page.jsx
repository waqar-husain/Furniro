import React from "react";
import style from "./checkout.module.css";

import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import CheckOutForm from "@/src/components/checkout/checkOutForm";

export default function Checkout() {
  return (
    <>
      <PageHeader heading="Checkout" />
      <main>
        <section
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
        </section>
      </main>
    </>
  );
}
