import React from "react";

//Css
import style from "./header.module.css";

//Component
import ButtonPrimary from "../buttonPrimary";

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
          <ButtonPrimary
            style="primary"
            title="Buy Now"
            styleData={{
              padding: "25px 72px",
              fontSize: "1.6rem ",
              marginTop: "3.7rem",
            }}
          />
        </div>
      </div>
    </header>
  );
}
