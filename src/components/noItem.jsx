import React from "react";
import Image from "next/image";
import Link from "next/link";

import noItem from "@/src/public/noItem.jpg";

export default function NoItem(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "4rem",
        maxWidth: "1280px",
        width: "100%",
      }}
    >
      <Image
        src={noItem}
        style={{
          maxHeight: "300px",
          height: "100%",
          maxWidth: "400px",
          width: "100%",
        }}
        alt="Empty cart"
      />
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            fontWeight: "600",
            fontSize: "3rem",
            color: "var(--color-grey1)",
          }}
        >
          {props.text}
        </h2>
        <p
          style={{
            color: "var(--color-grey3)",
            marginTop: "1.6rem",
            fontSize: "2rem",
          }}
        >
          Add items now!
        </p>
      </div>
      {props.button && (
        <Link
          className="buttonPrimary"
          style={{
            padding: "1.4rem 3rem 1.4rem 3rem",
            fontSize: "1.8rem",
            fontWeight: "400",
            lineHeight: "1.6",
            display: "inline-block",
          }}
          href="/shop"
        >
          Shop Now!
        </Link>
      )}
    </div>
  );
}
