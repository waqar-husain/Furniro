import React from "react";

//Css
import style from "./section2.module.css";

//Components
import ButtonPrimary from "../buttons/buttonPrimary";
import ProductList from "../products/productList";
import fetchReq from "@/src/util/fetchFunction";

export default async function Section2(props) {
  const data = [1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const data = await fetchReq(
  //   `${NEXT_PUBLIC_RAPIDAPI_URL}${props.category}?category=furniture&page=1&country=US`
  // );
  return (
    <section className={style.section}>
      <div className={style.sectionInnerContainer}>
        <div className={style.sectionTop}>
          <h1 className={style.sectionHeading}>{props.heading}</h1>
        </div>
        <div className={style.sectionMain}>
          <ProductList data={data.slice(0, 8)} type="grid" />
          <div className={style.sectionShowMore}>
            <ButtonPrimary
              title="Show more"
              url={`/shop/${props.category}?page=1`}
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
