import React from "react";
import style from "./shopItem.module.css";
import Link from "next/link";
import Image from "next/image";

import ProductList from "@/src/components/products/productList";
import ButtonPrimary from "@/src/components/buttons/buttonPrimary";
import rightArr from "@/src/components/icon/arrow-right.svg";
import ProductPageButtons from "@/src/components/productItem/productPageButton";

import furniture from "@/src/public/furniture.jpg";
import ProductPageDesc from "@/src/components/productItem/productPageDesc";
import StarContainer from "@/src/components/starContainer";
import { notFound } from "next/navigation";

export default function Product({ params }) {
  if (!params.id.startsWith("pid%3D")) notFound();
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
          <div className={style.innerMainImages}>
            <div
              style={{
                maxWidth: "500px",
                maxHeight: "490px",
                height: "100%",
                width: "100%",
                backgroundColor: "#F9F1E7",
                display: "flex",
                justifyContent: "center",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={furniture}
                alt="sofa"
                loading="lazy"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className={style.innerMainData} style={{ width: "50%" }}>
            <div style={{ paddingBottom: "6rem" }}>
              <h1 className={style.productName}>Asgaard sofa</h1>
              <p className={style.productPrice}>Rs. 250,000</p>
              <div className={style.productReview}>
                {/* //Handling Product Rating */}
                <StarContainer starsRating="4.5" />
              </div>
              <p className={style.productText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                consequuntur, odit dolores sit neque ullam delectus? Officia
                molestias delectus libero dicta soluta quaerat vero assumenda
                culpa nostrum! Perferendis, velit ipsam.
              </p>
              <div className={style.productDetail}>
                <ProductPageButtons />
              </div>
            </div>
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
        <ProductPageDesc />
      </section>
      <section className={style.relatedProducts}>
        <div className={style.relatedInner}>
          <div style={{ marginBottom: "2.6rem" }}>
            <h2 className={style.relatedHeading}>Related products</h2>
          </div>
          <ProductList data={[1, 1, 1, 1]} type="grid" />
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
