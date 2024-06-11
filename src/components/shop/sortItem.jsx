"use client";
import React, { Suspense } from "react";

import style from "./sortItem.module.css";
import { useSearchParams } from "next/navigation";
import { useRouter, ContainerLink } from "nextjs-progressloader";

export default function SortItem() {
  const params = useSearchParams();
  const router = useRouter();
  const changeHandler = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    const page = params.get("page");
    const search = params.get("search");
    router.push("search", {
      queryStrings: [
        { key: "search", value: search },
        { key: "sort_by", value: selectedValue },
        { key: "page", value: page },
      ],
    });

    // router.push(`shop?search=${search}&sort_by=${selectedValue}&page=${page}`);
  };
  return (
    <>
      <Suspense>
        <span
          style={{
            marginLeft: "2.9rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="sort"
            style={{ fontSize: "2rem", marginRight: "3rem" }}
          >
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
      </Suspense>
    </>
  );
}
