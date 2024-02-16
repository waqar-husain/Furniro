"use client";
import React from "react";

import style from "./productList.module.css";

import ListGridItem from "./listGridItem";
import ListItem from "./listListItem";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const productStyleType = useSelector((state) => state.shop.itemToShow);
  return (
    <div className={style.productContainer}>
      <div
        className={
          productStyleType ? style.listGridContainer : style.listContainer
        }
      >
        {props.data.map((el, i) => {
          return productStyleType ? (
            <ListGridItem key={i} product={el} />
          ) : (
            <ListItem key={i} product={el} />
          );
        })}
      </div>
    </div>
  );
}
