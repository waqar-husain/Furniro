import React from "react";
import Link from "next/link";

//Css
import style from "./section2.module.css";

//Components
import ProductList from "../products/productList";
import fetchReq from "@/src/util/fetchFunction";

export default async function Section2(props) {
  const category = String(props.category).toUpperCase().replaceAll("-", "_");

  const { data } = await fetchReq(
    `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}best-sellers?category=kitchen%2F1380441031&type=${category}&page=1&country=IN`
  );

  return (
    <>
      {data.best_sellers && (
        <section className={style.section}>
          <div className={style.sectionInnerContainer}>
            <div className={style.sectionTop}>
              <h1 className={style.sectionHeading}>{props.heading}</h1>
            </div>
            <div className={style.sectionMain}>
              <ProductList data={data.best_sellers.slice(0, 12)} type="grid" />
              <div className={style.sectionShowMore}>
                <Link
                  className="buttonPrimary"
                  style={{
                    padding: "1.2rem 7.8rem",
                    fontSize: "1.6rem ",
                    fontWeight: "600",
                  }}
                  href={`/shop/${props.category}?page=1`}
                >
                  Show more
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
