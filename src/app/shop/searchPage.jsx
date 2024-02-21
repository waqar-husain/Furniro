import React from "react";

import style from "./shop.module.css";

import BottomBanner from "@/src/components/bottomBanner";
import PageHeader from "@/src/components/pageHeader";
import ProductList from "@/src/components/products/productList";
import FilterTopBar from "@/src/components/shop/filterTopBar";
import PaginationButtons from "@/src/components/shop/paginationButtons";

export default async function SearchPage({
  filterBar,
  data,
  totalProducts,
  dataLength,
}) {
  console.log(data);
  return (
    <>
      <PageHeader heading="Shop" to="shop" logo="true" />
      <main className={style.shopMain}>
        {filterBar && <FilterTopBar totalProducts={totalProducts} />}
        <div className={style.shopMainInner}>
          <ProductList data={data} />
          <PaginationButtons
            dataLength={dataLength}
            totalProducts={totalProducts}
          />
        </div>
      </main>
      <BottomBanner />;
    </>
  );
}
