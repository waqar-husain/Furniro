import React from "react";

import style from "./shop.module.css";

import BottomBanner from "@/src/components/bottomBanner";
import PageHeader from "@/src/components/pageHeader";
import ProductList from "@/src/components/products/productList";
import FilterTopBar from "@/src/components/shop/filterTopBar";
import PaginationButtons from "@/src/components/shop/paginationButtons";

export default function SearchPage(props) {
  return (
    <>
      <PageHeader heading="Shop" to="shop" logo="true" />
      <main className={style.shopMain}>
        {props.filterBar && <FilterTopBar />}
        <div className={style.shopMainInner}>
          <ProductList data={props.data ? props.data : Array(32).fill(null)} />
          <PaginationButtons />
        </div>
      </main>
      <BottomBanner />;
    </>
  );
}
