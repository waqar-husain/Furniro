import React from "react";
import Image from "next/image";
import style from "./listGridItem.module.css";
import image from "../icon/image 8.jpg";
import starWhite from "../icon/starWhite.svg";
import Link from "next/link";
import ShareButton from "./shareButton";
import ButtonPrimary from "../buttons/buttonPrimary";
import LikeNewButton from "../buttons/likeNewButton";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

import furniture from "@/src/public/furniture.jpg";

export default function ListGridItem(props) {
  {
    /*To liked already on load we use wishlist array
  and use i of to check weather that id is present
in array or not and pass that through props*/
  }
  const dispatch = useDispatch();
  return (
    <Link
      href={`/shop/product/pid=${
        props?.product?.asin ? props?.product?.asin : "54645"
      }`}
      className={style.listItemMain}
    >
      <div className={style.listItem}>
        <div className={style.listItemImage}>
          <Image
            src={props.image ? props.image : furniture}
            alt="Product Image"
            className={style.listItemImg}
            loading="lazy"
          />
        </div>
        <div className={style.aboutListItem}>
          <h3 className={style.listItemName} style={{ lineHeight: "1.5" }}>
            {props?.product?.product_title
              ? props?.product?.product_title
              : "Tire Valve Stem Caps - Tire Air Caps Cover 8 Pack N2 Nitrogen Logo Corrosion Resistant Premium Alloy Universal for Car Truck Motorcycle Bike-Black"}
          </h3>
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
                4.5
              </p>
              <Image
                src={starWhite}
                style={{ width: "1.4rem", height: "auto" }}
                alt="star"
              />
            </div>
            <span style={{ marginLeft: "1rem", lineHeight: "1" }}>
              (40,789)
            </span>
          </div>

          <p className={style.listItemPrice}>
            {props?.product?.product_price
              ? props?.product?.product_price
              : "$500.00"}
          </p>
        </div>
      </div>
      <div className={style.onHover}>
        <ButtonPrimary
          style="primary"
          title="Add to cart"
          func={() => {
            dispatch(
              cartAction.incrementCart({
                id: 2,
                quantity: 1,
                productTotal: 250000,
                price: 250000,
                productName: "Asgaard sofa",
                productImage: "text",
              })
            );
          }}
          styleData={{
            fontSize: "1.6rem",
            lineHeight: "1.6",
            padding: "12px  55px",
            backgroundColor: "white",
            color: "var(--color-primary)",
          }}
        />
        <div className={style.onHoverBottom}>
          <ShareButton />
          <LikeNewButton
            title="Like"
            item={{
              id: 1,
              price: 1200,
              productName: "Asgaard sofa",
              productImage: "text",
              productDesc: "abcd",
            }}
          />
        </div>
      </div>
    </Link>
  );
}
