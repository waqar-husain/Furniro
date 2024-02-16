"use client";
import React from "react";

import style from "./sortItem.module.css";
import { useDispatch } from "react-redux";
import { shopAction } from "../../store/slices/filterProductSlice";

export default function SortItem() {
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    dispatch(shopAction.setFilter({ filter: selectedValue }));
  };
  return (
    <span
      style={{ marginLeft: "2.9rem", display: "flex", alignItems: "center" }}
    >
      <label htmlFor="sort" style={{ fontSize: "2rem", marginRight: "3rem" }}>
        Sort by
      </label>
      <select
        name="Default"
        id="sort"
        className={style.selectList}
        onChange={changeHandler}
      >
        <option value="RELEVANCE">Relevance</option>
        <option value="LOWEST_PRICE">Price: Low to High</option>
        <option value="HIGHEST_PRICE">Price: High to Low</option>
        <option value="BEST_SELLERS">Best Sellers</option>
      </select>
    </span>
  );
}
