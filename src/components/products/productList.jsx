"use client";
import React from "react";

import style from "./productList.module.css";

import ListGridItem from "./listGridItem";
import ListItem from "./listListItem";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const productStyleType = useSelector((state) => state.shop.itemToShow);
  const cartItemsId = useSelector((state) => state.cart.cartList).map(
    (el) => el.id
  );
  const wishlistItemsId = useSelector((state) => state.wishlist.wishlist).map(
    (el) => el.id
  );
  return (
    <div className={style.productContainer}>
      <div
        className={
          productStyleType ? style.listGridContainer : style.listContainer
        }
      >
        {props.data.map((el, i) => {
          const cart = cartItemsId.includes(el.asin);
          const wishlist = wishlistItemsId.includes(el.asin);
          return productStyleType ? (
            <ListGridItem
              key={i}
              product={el}
              inCart={cart}
              inWishlist={wishlist}
            />
          ) : (
            <ListItem
              key={i}
              product={el}
              inCart={cart}
              inWishlist={wishlist}
            />
          );
        })}
      </div>
    </div>
  );
}
