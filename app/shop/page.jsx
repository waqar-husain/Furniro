import React from "react";
//STYLES
import style from "./shop.module.css";

//COMPONENTS
import PageHeader from "../components/pageHeader";
import ProductList from "../components/productList";
import PaginationButtons from "../components/paginationButtons";
import BottomBanner from "../components/bottomBanner";
import FilterTopBar from "../components/filterTopBar";
import PageAuth from "../util/pageAuth";

export default function Shop() {
  return (
    <PageAuth>
      <PageHeader heading="Shop" to="shop" logo="true" />
      <main className={style.shopMain}>
        <FilterTopBar />
        <div className={style.shopMainInner}>
          <ProductList />
          <ProductList />
          <PaginationButtons />
        </div>
        <BottomBanner />
      </main>
    </PageAuth>
  );
}
