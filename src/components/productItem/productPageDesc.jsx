"use client";
import React, { useState } from "react";

import style from "./productPageDesc.module.css";
import Image from "next/image";

export default function ProductPageDesc({ productDesc }) {
  const [desc, setDesc] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [review, setReview] = useState(false);

  const asinIndex = Object.entries(productDesc.product_information).findIndex(
    ([key, val], i) => key === "ASIN"
  );

  return (
    <div className={style.descCont}>
      <div className={style.descNav}>
        <div
          onClick={(e) => {
            e.preventDefault();
            setDesc(true);
            setAddInfo(false);
            setReview(false);
          }}
          style={{ color: `${desc ? "#000" : "#9f9f9f"}`, cursor: "pointer" }}
        >
          About Item
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            setDesc(false);
            setAddInfo(true);
            setReview(false);
          }}
          style={{
            color: `${addInfo ? "#000" : "#9f9f9f"}`,
            cursor: "pointer",
          }}
        >
          Additional Information
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            setDesc(false);
            setAddInfo(false);
            setReview(true);
          }}
          style={{ color: `${review ? "#000" : "#9f9f9f"}`, cursor: "pointer" }}
        >
          Review[{productDesc.product_num_ratings}]
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        {desc && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ maxWidth: "1000px", width: "100%" }}>
              <ul
                style={{
                  fontSize: "1.6rem",
                  color: "var(--color-grey1)",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                {productDesc.about_product.map((el, i) => (
                  <li>{el.replaceAll("<br>", "")}</li>
                ))}
              </ul>
            </div>
            {productDesc.product_photos.length > 1 && (
              <div
                style={{ marginTop: "3.6rem", display: "flex", gap: "3rem" }}
              >
                {productDesc.product_photos.slice(-2).map((el, i) => (
                  <div
                    style={{
                      maxHeight: "348px",
                      maxWidth: "605px",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      backgroundColor: "#F9F1E7",
                      borderRadius: "1rem",
                    }}
                  >
                    <Image
                      key={i}
                      src={el}
                      width={605}
                      height={348}
                      unoptimized
                      style={{
                        objectFit: "contain",
                        mixBlendMode: "multiply",
                      }}
                      alt="product image"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {addInfo && (
          <div
            style={{
              width: "100%",
              display: "flex",
              columnGap: "5%",
              color: "var(--color-grey1)",
            }}
          >
            <div
              style={{
                width: "50%",
                fontSize: "1.6rem",
              }}
            >
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "2.4rem",
                  marginBottom: "3rem",
                }}
              >
                Technical Details
              </h2>
              <div className={style.details}>
                {Object.entries(productDesc.product_information)
                  .slice(0, asinIndex)
                  .map(([key, value], i) => (
                    <div
                      style={{
                        display: "flex",
                        borderTop: "1px solid var(--color-grey4)",
                      }}
                      key={i}
                    >
                      <div
                        style={{
                          width: "50%",
                          padding: "1rem 2rem",
                          backgroundColor: "#BACEEF",
                        }}
                      >
                        {key}
                      </div>
                      <div style={{ width: "50%", padding: "1rem 2rem" }}>
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              style={{
                width: "50%",
                fontSize: "1.6rem",
              }}
            >
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "2.4rem",
                  marginBottom: "3rem",
                }}
              >
                Additional Information
              </h2>
              <div className={style.details}>
                {Object.entries(productDesc.product_information)
                  .slice(asinIndex)
                  .map(([key, value], i) => (
                    <div
                      style={{
                        display: "flex",
                        borderTop: "1px solid var(--color-grey4)",
                      }}
                      key={i}
                    >
                      <div
                        style={{
                          width: "50%",
                          padding: "1rem 2rem",
                          backgroundColor: "#BACEEF",
                        }}
                      >
                        {key}
                      </div>
                      <div style={{ width: "50%", padding: "1rem 2rem" }}>
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        {review && (
          <div style={{ margin: "2rem 0rem", color: "var(--color-grey1)" }}>
            <p style={{ fontSize: "2rem" }}>Could not get reviews!</p>
          </div>
        )}
      </div>
    </div>
  );
}
{
  /* <div>
<h3
  style={{ color: "#000", fontWeight: "500", fontSize: "2rem" }}
>
  Additional Information
</h3>
<p style={{ marginTop: "2rem" }}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
  aliquam, id nisi quis animi officiis magni unde saepe fugiat
  suscipit! Accusamus aliquam ipsam id asperiores esse distinctio
  ut cupiditate aspernatur. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Cumque asperiores minima modi ipsam porro
  provident repudiandae illum veniam iure odit consectetur ipsa
  aperiam, saepe quis quibusdam error voluptatum ad sint!
</p>
</div>
<div style={{ marginTop: "4rem" }}>
<h3
  style={{ color: "#000", fontWeight: "500", fontSize: "2rem" }}
>
  Features
</h3>
<div className={style.featurePoints}>
  <p>
    <span style={{ color: "#000", marginRight: "1rem" }}>
      &rarr;
    </span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <p>
    <span style={{ color: "#000", marginRight: "1rem" }}>
      &rarr;
    </span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <p>
    <span style={{ color: "#000", marginRight: "1rem" }}>
      &rarr;
    </span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <p>
    <span style={{ color: "#000", marginRight: "1rem" }}>
      &rarr;
    </span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
</div>
</div> */
}
