import React from "react";

import style from "./productList.module.css";

import ListItem from "./listItem";

export default function ProductList(props) {
  return (
    <div className={style.productContainer}>
      {/* {props.listData.map((el)=> <ListItem />)} */}
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
