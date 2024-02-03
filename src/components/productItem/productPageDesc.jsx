"use client";
import React, { useState } from "react";

import style from "./productPageDesc.module.css";
import Image from "next/image";
import sofa from "@/src/public/Group 107.jpg";

export default function ProductPageDesc() {
  const [desc, setDesc] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [review, setReview] = useState(false);

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
          Description
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
          Review[5]
        </div>
      </div>
      <div>
        {desc && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ maxWidth: "1000px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vero impedit architecto, inventore non quos corrupti fuga!
                Dolore quisquam aut officiis. Iure tenetur deserunt debitis non
                nulla autem omnis nesciunt!
              </p>
              <p style={{ marginTop: "3rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                sint explicabo veritatis porro quibusdam aliquid in expedita
                consectetur blanditiis aperiam, hic non alias dolor, quod
                aliquam asperiores esse eum ullam Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores animi iure commodi beatae
                atque ex praesentium quos maiores harum eligendi, aspernatur
                magni perferendis corrupti architecto at distinctio earum
                necessitatibus inventore.
              </p>
            </div>
            <div style={{ marginTop: "3.6rem", display: "flex", gap: "3rem" }}>
              <Image src={sofa} alt="product image" />
              <Image src={sofa} alt="product image" />
            </div>
          </div>
        )}
        {addInfo && (
          <div style={{ maxWidth: "1000px" }}>
            <div>
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
            </div>
          </div>
        )}
        {review && <div>REVIEW</div>}
      </div>
    </div>
  );
}
