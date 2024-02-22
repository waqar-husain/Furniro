import React from "react";
import Link from "next/link";

//Css
import style from "./header.module.css";

export default function HeaderComp() {
  return (
    <header className={style.headerBg}>
      <div className={style.headerInnerContainer}>
        <div className={style.headerSidebox}>
          <p className={style.smallHeading}>New Arrival</p>
          <h1 className={style.mainHeading}>Discover Our New Collection</h1>
          <p className={style.headerDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eligendi. Non recusandae provident sunt minus dolorem iste
          </p>

          <Link
            className="buttonPrimary"
            style={{
              padding: "2.5rem 7.2rem",
              fontSize: "1.8rem ",
              marginTop: "3.7rem",
              display: "inline-block",
            }}
            href="/shop"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </header>
  );
}
