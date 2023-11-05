import React from "react";

import style from "./sortItem.module.css";

export default function SortItem() {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <span style={{ marginLeft: "2.9rem" }}>
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
        <option value="low-high">Price-Low to High</option>
        <option value="high-low">Price-High to Low</option>
      </select>
    </span>
  );
}
