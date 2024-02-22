import React from "react";

import style from "./listListItem.module.css";
import Link from "next/link";
import Image from "next/image";
import LikeNewButton from "../buttons/likeNewButton";
import CartButton from "../buttons/cartButton";
import StarContainer from "../starContainer";

import notFound from "@/src/public/notFound.png";
import { CartModel, WishlistModel } from "@/src/util/model";

export default function ListItem({
  product,
  styleData,
  utilButton,
  inCart,
  inWishlist,
}) {
  console.log(product);
  return (
    <Link
      href="/shop/product/pid=09889"
      className={style.listItemMain}
      style={{
        ...styleData,
      }}
    >
      <div className={style.listItemImage}>
        <Image
          unoptimized
          src={product.product_photo || notFound}
          width={3840}
          height={2160}
          alt="Product Image"
          className={style.listItemImg}
          loading="lazy"
          style={{
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <div className={style.listItemData}>
        <h2 className={style.itemHeading} style={{ marginBottom: "1rem" }}>
          {product?.product_title || "Not available!"}
        </h2>
        {product.product_num_ratings && (
          <StarContainer
            starsRating={product?.product_star_rating}
            numReviews={product?.product_num_ratings}
          />
        )}

        <p className={style.itemPrice}>
          {product?.product_price || "Currnetly not available!"}
          {product.product_original_price && (
            <span
              style={{
                fontSize: "1.6rem",
                color: "var(--color-grey3)",
                fontWeight: "500",
                marginLeft: "1rem",
                textDecoration: "line-through",
              }}
            >
              {product.product_original_price}
            </span>
          )}
        </p>

        {product.delivery && !utilButton && (
          <p className={style.itemDesc}>
            {product?.delivery ||
              "FREE delivery Sun, Feb 4 on $35 of items shipped by AmazonOr fastest delivery Wed, Jan 31"}
          </p>
        )}
      </div>
    </Link>
  );
}
