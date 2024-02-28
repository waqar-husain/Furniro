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
  query,
}) {
  console.log(data);
  return (
    <>
      <PageHeader heading="Shop" to="shop" />
      <main className={style.shopMain}>
        {/* {dataLength === 0 && (
          <div style={{ marginTop: "8.5rem" }}>
            <h5 style={{ fontSize: "3rem", fontWeight: "600" }}>
              No results for "{query}".
            </h5>
            <p style={{ fontSize: "1.8rem", marginTop: "1.4rem" }}>
              Try checking your spelling or use more general terms
            </p>
          </div>
        )} */}
        {/* {dataLength !== 0 && ( */}
        <>
          {filterBar && <FilterTopBar totalProducts={totalProducts} />}
          <div className={style.shopMainInner}>
            <ProductList data={data} />
            <PaginationButtons
              dataLength={dataLength}
              totalProducts={totalProducts}
            />
          </div>
        </>
        {/* )} */}
      </main>
      <BottomBanner />;
    </>
  );
}
