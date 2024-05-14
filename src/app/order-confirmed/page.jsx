import ButtonPrimary from "@/src/components/buttons/buttonPrimary";
import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import React from "react";
import style from "./orderConfirm.module.css";
import Image from "next/image";
import orderIco from "@/src/components/icon/order-compelete.svg";

export default function OrderConfirmed() {
  return (
    <>
      <PageHeader heading="Order Confirmed" to="home" />
      <main>
        <section className={style.section}>
          <div className={style["main-cont"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image src={orderIco} alt="right arrow" />
              <h1
                style={{
                  marginTop: "2rem",
                  color: "var(--color-grey1)",
                  fontSize: "3.2rem",
                  fontWeight: "600",
                  lineHeight: "1.6",
                }}
              >
                Your Order Is Compeleted!
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1.6rem",
                  color: "var(--color-grey5)",
                  marginTop: "1.4rem",
                  width: "100%",
                  maxWidth: "680px",
                }}
              >
                Thank you for your order! Your order is being processed and will
                be completed within 3-6 hours. You will receive an email
                confirmation when your order is completed.
              </span>
              <ButtonPrimary
                title="Continue Shopping"
                url="/"
                style="primary"
                styleData={{
                  marginTop: "3rem",
                  padding: "15px 36px",
                  alignSelf: "center",
                  fontSize: "1.6rem",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
