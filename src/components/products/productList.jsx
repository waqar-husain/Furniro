"use client";
import React from "react";

import style from "./productList.module.css";

import ListGridItem from "./listGridItem";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import ListItem from "./listListItem";

export default function ProductList(props) {
  const page = +useSearchParams().get("page");
  const sortBy = useSelector((state) => state.shop.sortBy);
  const data =
    sortBy === "default"
      ? useSelector((state) => state.shop.data)
      : useSelector((state) => state.shop.sortedData);

  const listGrid = useSelector((state) => state.shop.itemToShow);
  return (
    <div className={style.productContainer}>
      {!props.data && (
        <div
          className={listGrid ? style.listGridContainer : style.listContainer}
        >
          {/* //Array of response */}
          {data.slice(page * 14 - 14, page * 14).map((el, i) => {
            return listGrid ? (
              <ListGridItem key={i} grid="true" />
            ) : (
              <ListItem key={i} />
            );
          })}
        </div>
      )}
      {props.data && (
        <div className={style.listGridContainer}>
          {props.data.map((el, i) => (
            <ListGridItem key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
