import Image from "next/image";
import Link from "next/link";
import React from "react";
import productImage from "@/app/public/asgaard.png";

export default function SearchedItem(props) {
  return (
    <Link
      href="/shop/78"
      style={{
        color: "var(--color-grey2)",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "9rem",
          backgroundColor: "#f4f5f7",
          borderRadius: "0.5rem",
          padding: "1rem",
          boxShadow: "1px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ maxWidth: "7.5rem", width: "100%" }}>
          <Image
            alt="ProductImage"
            src={productImage}
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
            Asgaard sofa
          </h5>
          <p
            style={{
              color: "black",
              fontWeight: "600",
              color: "var(--color-grey1)",
            }}
          >
            Rs. 250,000.00
          </p>
        </div>
      </div>
    </Link>
  );
}
