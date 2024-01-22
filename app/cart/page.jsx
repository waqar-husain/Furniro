import React from "react";
import style from "./cart.module.css";
import BottomBanner from "../components/bottomBanner";
import PageHeader from "../components/pageHeader";
import ButtonSecondary from "../components/buttons/buttonSecondary";
import deleteIco from "../components/icon/delete.svg";
import sofaImg from "../public/Asgaard.png";
import Image from "next/image";
import Link from "next/link";
import InputNumberProduct from "../components/productItem/inputNumberProduct";

export default function Cart() {
  return (
    <>
      <PageHeader heading="Cart" logo={true} />
      <main className={style.cartMain}>
        <div className={style.cartInner}>
          <div className={style.cartItems}>
            <div className={style.cartItemsTop}>
              <div
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Product
              </div>
              <div
                style={{
                  maxWidth: "185px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Price
              </div>
              <div
                style={{
                  maxWidth: "105px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Quantity
              </div>
              <div
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Subtotal
              </div>
            </div>
            <div className={style.cartItem}>
              <Link
                href="shop/e"
                style={{
                  display: "flex",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    maxWidth: "280px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className={style.productImageCont}>
                    <Image alt="product image" src={sofaImg} />
                    {/*DATA THROUGH REDUX */}
                  </div>
                  <span style={{ marginLeft: "3.4rem", whiteSpace: "nowrap" }}>
                    Asgaard sofa
                  </span>{" "}
                  {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "185px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Rs. 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "105px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InputNumberProduct
                    styleData={{
                      left: {
                        paddingRight: "1rem",
                        paddingLeft: "0.8rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      right: {
                        paddingRight: "0.8rem",
                        paddingLeft: "1rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      input: {
                        fontSize: "1.6rem",
                      },
                    }}
                  />
                </div>
                <div
                  style={{
                    maxWidth: "150px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                >
                  Rs 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "1",
                    cursor: "pointer",
                  }}
                >
                  <Image alt="delete" src={deleteIco} />
                </div>
              </Link>
              <Link
                href="shop/e"
                style={{
                  display: "flex",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    maxWidth: "280px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className={style.productImageCont}>
                    <Image alt="product image" src={sofaImg} />
                    {/*DATA THROUGH REDUX */}
                  </div>
                  <span style={{ marginLeft: "3.4rem", whiteSpace: "nowrap" }}>
                    Asgaard sofa
                  </span>{" "}
                  {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "185px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Rs. 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "105px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InputNumberProduct
                    styleData={{
                      left: {
                        paddingRight: "1rem",
                        paddingLeft: "0.8rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      right: {
                        paddingRight: "0.8rem",
                        paddingLeft: "1rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      input: {
                        fontSize: "1.6rem",
                      },
                    }}
                  />
                </div>
                <div
                  style={{
                    maxWidth: "150px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                >
                  Rs 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "1",
                    cursor: "pointer",
                  }}
                >
                  <Image alt="delete" src={deleteIco} />
                </div>
              </Link>
              <Link
                href="shop/e"
                style={{
                  display: "flex",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    maxWidth: "280px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className={style.productImageCont}>
                    <Image alt="product image" src={sofaImg} />
                    {/*DATA THROUGH REDUX */}
                  </div>
                  <span style={{ marginLeft: "3.4rem", whiteSpace: "nowrap" }}>
                    Asgaard sofa
                  </span>{" "}
                  {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "185px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Rs. 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    maxWidth: "105px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InputNumberProduct
                    styleData={{
                      left: {
                        paddingRight: "1rem",
                        paddingLeft: "0.8rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      right: {
                        paddingRight: "0.8rem",
                        paddingLeft: "1rem",
                        paddingTop: "0.8rem",
                        paddingBottom: "0.8rem",
                      },
                      input: {
                        fontSize: "1.6rem",
                      },
                    }}
                  />
                </div>
                <div
                  style={{
                    maxWidth: "150px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                >
                  Rs 250,000.00 {/*DATA THROUGH REDUX */}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "1",
                    cursor: "pointer",
                  }}
                >
                  <Image alt="delete" src={deleteIco} />
                </div>
              </Link>
            </div>
          </div>
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
        </div>
      </main>
      <BottomBanner />
    </>
  );
}
