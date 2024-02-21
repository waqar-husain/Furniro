"use client";
import React from "react";

import style from "./sortItem.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SortItem() {
  const params = useSearchParams();
  const router = useRouter();
  const changeHandler = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    const page = params.get("page");
    const search = params.get("search");

    router.push(`shop?search=${search}&sort_by=${selectedValue}&page=${page}`);
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
