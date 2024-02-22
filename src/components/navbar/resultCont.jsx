import React from "react";
import SearchedItem from "./searchedItem";
import { redirect } from "next/navigation";
import Image from "next/image";
import loader from "@/src/components/icon/loader.svg";

export default function ResultCont({ dataResult, closeSearchBar }) {
  console.log(dataResult.isLoading);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        rowGap: "2rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "rgb(50,50,50)",
          fontWeight: "500",
        }}
      >
        <span>PRODUCTS</span>
        {Boolean(dataResult.data.totalProducts) && (
          <button
            onClick={() =>
              redirect(`search=${dataResult.query}&sort_by=RELEVANCE&page=1`)
            }
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-primary)",
              fontSize: "inherit",
              fontWeight: "500",
            }}
          >
            View all {dataResult.data.totalProducts} Results &#62;
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        {dataResult.isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={loader} alt="loading" />
          </div>
        )}

        {!dataResult.isLoading && dataResult.data.products.length === 0 && (
          <div style={{ textAlign: "center", fontSize: "1.8rem" }}>
            <p>No results for "{dataResult.query}".</p>
          </div>
        )}

        {/* ////////////////////////search Result product ///////////////////////////////////*/}

        {!dataResult.isLoading &&
          dataResult.data.products.map((el, i) => (
            <SearchedItem
              key={i}
              data={el}
              closeSearchBar={() => closeSearchBar()}
            />
          ))}
      </div>
    </div>
  );
}
