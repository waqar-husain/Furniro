import Image from "next/image";
import Link from "next/link";
import React from "react";

import style from "./searchBar.module.css";

import furniture from "@/src/public/furniture.jpg";
import productImage from "@/src/public/asgaard.png";

export default function SearchedItem({ data, closeSearchBar }) {
  return (
    <Link
      href={`/shop/product/pid=${data?.asin}`}
      style={{
        color: "var(--color-grey2)",
        textDecoration: "none",
      }}
      onClick={() => closeSearchBar()}
    >
      <div className={style.searchedItem}>
        <div
          style={{
            maxWidth: "7.5rem",
            width: "100%",
            borderRadius: "0.4rem",
            boxShadow: "1px 2px 4px rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}
        >
          <Image
            alt="ProductImage"
            src={furniture}
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div
          style={{
            flex: "80% 0 1",
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "0.5rem",
          }}
        >
          <h5 style={{ fontSize: "1.8rem", fontWeight: "400" }}>
            {data.product_title ? data.product_title : "Asgaard Sofa"}
          </h5>
          <p
            style={{
              color: "black",
              fontWeight: "600",
              color: "var(--color-grey1)",
            }}
          >
            {data.product_price ? data.product_price : "Rs.250,000.00"}
            {data.product_price && (
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  marginLeft: "1rem",
                  textDecoration: "line-through",
                }}
              >
                {data.product_orignal_price
                  ? data.product_orignal_price
                  : "Rs.300,000.00"}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
