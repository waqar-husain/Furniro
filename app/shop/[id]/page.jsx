import React from "react";
import style from "./shopItem.module.css";
import ProductList from "@/app/components/productList";
import ButtonPrimary from "@/app/components/buttonPrimary";
import Link from "next/link";
import rightArr from "../../components/icon/arrow-right.svg";
import Image from "next/image";

export default function Product() {
  return (
    <main>
      <div className={style.topBanner}>
        <div className={style.innerTop}>
          <Link className={style.headerLinkTo} href="/">
            Home
          </Link>
          <Image
            src={rightArr}
            alt="Right Arrow"
            style={{ marginRight: "2.4rem" }}
          />
          <Link className={style.headerLinkTo} href="/shop">
            Shop
          </Link>
          <Image
            src={rightArr}
            alt="Right Arrow"
            style={{ marginRight: "2.4rem" }}
          />

          <p className={style.topItemName}>Asgaard sofa</p>
        </div>
      </div>
      <section className={style.productMain}>
        <div className={style.innerMain}>
          <div className={style.innerMainImages}>Image</div>
          <div className={style.innerMainData} style={{ width: "50%" }}>
            <h1 style={{ fontSize: "4.2rem", fontWeight: "400" }}>
              Asgaard sofa
            </h1>
            <p>Rs. 250,000</p>
            <div>Rating</div>
            <p>PRODUCT DESC</p>
            <div>BUTTONS</div>
            <div className={style.productAbout}>
              <div style={{ marginRight: "1.6rem" }}>
                <p>SKU</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Share</p>
              </div>
              <div style={{ marginRight: "1.2rem" }}>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div>
                <p>SS001</p>
                <p>Sofas</p>
                <p>Sofa,Chair,Home,Shop</p>
                <span>facebook linkedin instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.productDesc}>
        <div className={style.descInner}>DESC</div>
      </section>
      <section className={style.relatedProducts}>
        <div className={style.relatedInner}>
          <div style={{ marginBottom: "2.6rem" }}>
            <h2 className={style.relatedHeading}>Related products</h2>
          </div>
          <ProductList data={[1, 1, 1, 1]} />
          <div className={style.showMore}>
            <ButtonPrimary
              title="Show more"
              url="/shop"
              styleData={{
                padding: "12px 78px",
                fontSize: "1.6rem ",
                fontWeight: "600",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
