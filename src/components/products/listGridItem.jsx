import React from "react";
import Image from "next/image";
import style from "./listGridItem.module.css";

import starWhite from "../icon/starWhite.svg";
import Link from "next/link";
import ShareButton from "./shareButton";
import ButtonPrimary from "../buttons/buttonPrimary";
import LikeNewButton from "../buttons/likeNewButton";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

import notFound from "@/src/public/notFound.png";
import { CartModel, WishlistModel } from "@/src/util/model";

export default function ListGridItem({ product, inWishlist, inCart }) {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/shop/product/pid=${product.asin || "54645"}`}
      className={style.listItemMain}
    >
      <div className={style.listItem}>
        <div className={style.listItemImage}>
          <Image
            unoptimized
            src={product.product_photo || notFound}
            alt="Product Image"
            className={style.listItemImg}
            width={3840}
            height={2160}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={style.aboutListItem}>
          <h3 className={style.listItemName} style={{ lineHeight: "1.5" }}>
            {product?.product_title || "Not available!"}
          </h3>
          {product.product_num_ratings && (
            <div
              style={{
                display: "flex",
                marginTop: "0.8rem",
                alignItems: "center",
                color: "var(--color-grey3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#fff",
                  backgroundColor: "var(--color-primary)",
                  padding: "0.2rem",
                  borderRadius: "4px",
                  lineHeight: "1",
                  fontSize: "1.5rem",
                  paddingLeft: "0.4rem",
                  paddingRight: "0.4rem",
                }}
              >
                <p
                  className="rate"
                  style={{ marginRight: "0.6rem", marginTop: "0.2rem" }}
                >
                  {product.product_star_rating || "4.5"}
                </p>
                <Image
                  src={starWhite}
                  style={{ width: "1.4rem", height: "auto" }}
                  alt="star"
                />
              </div>
              <span style={{ marginLeft: "1rem", lineHeight: "1" }}>
                ({product.product_num_ratings})
              </span>
            </div>
          )}

          <p className={style.listItemPrice}>
            {product?.product_price || "Not available!"}
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
        </div>
      </div>
      <div className={style.onHover}>
        {product.product_price ? (
          <ButtonPrimary
            style="primary"
            title={inCart ? "Go To Cart" : `Add to cart`}
            func={() => {
              if (!inCart) {
                dispatch(
                  cartAction.incrementCart({
                    ...new CartModel(
                      product.asin,
                      product.product_title,
                      product.product_photo,
                      1,
                      +product.product_price.slice(1).replace(",", ""),
                      +product.product_price.slice(1).replace(",", "")
                    ),
                  })
                );
              }
            }}
            url={inCart ? "/cart" : ""}
            styleData={{
              fontSize: "1.6rem",
              lineHeight: "1.6",
              padding: "12px  55px",
              backgroundColor: "white",
              color: "var(--color-primary)",
            }}
          />
        ) : (
          <p style={{ color: "#fff", fontWeight: "600", fontSize: "2rem" }}>
            Currently not available
          </p>
        )}

        <div className={style.onHoverBottom}>
          <ShareButton />
          <LikeNewButton
            title="Like"
            liked={inWishlist}
            item={{
              ...new WishlistModel(
                product.asin,
                product.product_title,
                product.product_photo,
                product.product_price,
                product.product_star_rating,
                product.product_num_ratings
              ),
            }}
          />
        </div>
      </div>
    </Link>
  );
}
