import React from "react";

//STYLES
import style from "./shop.module.css";

//COMPONENTS
import PageHeader from "../components/pageHeader";
import ProductList from "../components/productList";
import PaginationButtons from "../components/paginationButtons";
import BottomBanner from "../components/bottomBanner";

export default function Shop() {
  return (
    <>
      <PageHeader heading="Shop" to="shop" logo="true" />
      <main className={style.shopMain}>
        <div className={style.shopMainTop}></div>
        <div className={style.shopMainInner}>
          <ProductList />
          <ProductList />
          <PaginationButtons button={3} />
        </div>
        <BottomBanner />
      </main>
    </>
  );
}
