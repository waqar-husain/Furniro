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
    if (selectedValue === "default") dispatch(shopAction.setDefault());
    if (selectedValue === "ascend") dispatch(shopAction.ascendData());
    if (selectedValue === "descend") dispatch(shopAction.descendData());
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
        <option value="default">Default</option>
        <option value="ascend">Price-Low to High</option>
        <option value="descend">Price-High to Low</option>
      </select>
    </span>
  );
}
