import React from "react";

//Css
import style from "./section2.module.css";

//Components
import ButtonPrimary from "../buttons/buttonPrimary";
import ProductList from "../products/productList";

export default function Section2() {
  return (
    <section className={style.section}>
      <div className={style.sectionInnerContainer}>
        <div className={style.sectionTop}>
          <h1 className={style.sectionHeading}>Products</h1>
        </div>
        <div className={style.sectionMain}>
          <ProductList data={[1, 1, 1, 1, 1, 1, 1, 1]} />
          <div className={style.sectionShowMore}>
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
      </div>
    </section>
  );
}
