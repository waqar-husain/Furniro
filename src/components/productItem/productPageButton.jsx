"use client";
import React, { useEffect, useState } from "react";
import ButtonSecondary from "../buttons/buttonSecondary";
import style from "./productPagebutton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";
import LikeNewButton from "../buttons/likeNewButton";
import { useRouter } from "next/navigation";
import { CartModel, WishlistModel } from "@/src/util/model";

export default function ProductPageButtons({ data }) {
  const [changeBtn, setChangeBtn] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItemsId = useSelector((state) => state.cart.cartList).map(
    (el) => el.id
  );

  const wishlistItem = useSelector((state) => state.wishlist.wishlist)
    .map((el) => el.asin)
    .includes(data.asin); //id will get from props

  useEffect(() => {
    const itemExist = cartItemsId.includes(data.asin); //id will get from props
    if (itemExist) {
      setChangeBtn(true);
    }
  }, []);

  const productAddToCartHandler = (e) => {
    e.preventDefault();
    if (changeBtn) {
      router.push("/cart");
      return;
    }
    setChangeBtn(true);
    dispatch(
      cartAction.incrementCart({
        ...new CartModel(
          data.asin,
          data.product_title,
          data.product_photo,
          1,
          +data.product_price.replace("₹", "").replace(",", ""),
          +data.product_price.replace("₹", "").replace(",", "")
        ),
      })
    );
  };

  return (
    <form
      style={{
        display: "flex",
        marginRight: "1rem",
        fontSize: "1.4rem",
        color: "var(--color-grey5)",
        flexDirection: "column",
        // height: "100%",
      }}
      onSubmit={productAddToCartHandler}
    >
      <div
        style={{
          display: "flex",
          marginTop: "3.2rem",
          columnGap: "2rem",
          alignItems: "center",
        }}
      >
        <ButtonSecondary
          title={changeBtn ? "Go To Cart" : "Add To Cart"}
          type="submit"
        />
        <div>
          <LikeNewButton
            styleData={{
              marginLeft: "0.1111rem",
              height: "5rem",
              width: "5rem",
              paddingTop: "0.3rem",
              borderRadius: "50%",
              backgroundColor: "#d7d7d7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            liked={wishlistItem}
            type="shop"
            item={{
              ...new WishlistModel(
                data.asin,
                data.product_title,
                data.product_photo,
                data.product_price,
                data.product_star_rating,
                data.product_num_ratings
              ),
            }}
          />
        </div>
      </div>
    </form>
  );
}
