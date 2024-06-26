"use client";
import React, { useEffect } from "react";

import style from "./productList.module.css";

import ListGridItem from "./listGridItem";
import ListItem from "./listListItem";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "@/src/store/slices/filterProductSlice";
import { usePathname } from "next/navigation";

export default function ProductList(props) {
  const path = usePathname();
  const productStyleType = useSelector((state) => state.shop.itemToShow);
  const cartItemsId = useSelector((state) => state.cart.cartList).map(
    (el) => el.id
  );
  const wishlistItemsId = useSelector((state) => state.wishlist.wishlist).map(
    (el) => el.id
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth <= 778 && path !== "/" && props.type !== "grid") {
      dispatch(shopAction.showItems({ type: false }));
    } else {
      dispatch(shopAction.showItems({ type: true }));
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 778 && path !== "/" && props.type !== "grid") {
        dispatch(shopAction.showItems({ type: false }));
      } else {
        dispatch(shopAction.showItems({ type: true }));
      }
    });
  }, []);

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
