"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import style from "@/src/app/cart/cart.module.css";

import DeleteIco from "../icon/Delete.jsx";
import InputNumberProduct from "../productItem/inputNumberProduct";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";
import { formatNum } from "@/src/util/numerFormat";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  //Data will be passed through props

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        textDecoration: "none",
        color: "inherit",
        cursor: "default",
        borderBottom: "1px solid rgb(230,230,230)",
      }}
    >
      <abbr title={item.productName} style={{ textDecoration: "none" }}>
        <Link
          href={`shop/product/pid=${item.id}`}
          style={{
            maxWidth: "399px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <div
            className={style.productImageCont}
            style={{
              width: "38%",
              cursor: "pointer",
            }}
          >
            <Image
              alt="product image"
              width={50}
              height={50}
              src={item.productImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              unoptimized
            />
            {/*DATA THROUGH REDUX */}
          </div>
          <span
            style={{
              width: "62%",
              marginLeft: "3.4rem",
              whiteSpace: "nowrap",
              cursor: "pointer",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              color: "var(--color-grey1)",
              fontSize: "1.7rem",
              fontWeight: "500",
            }}
          >
            {item.productName.slice(0, 28)}
          </span>{" "}
          {/*DATA THROUGH REDUX */}
        </Link>
      </abbr>
      <div
        style={{
          maxWidth: "140px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-grey3)",
          fontWeight: "500",
        }}
      >
        {formatNum(item.price)} {/*DATA THROUGH REDUX */}
      </div>
      <div
        style={{
          maxWidth: "120px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputNumberProduct item={item} />
      </div>
      <div //Subtotal
        style={{
          maxWidth: "110px",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: "#000",
        }}
      >
        {formatNum(item.productTotal)} {/*DATA THROUGH REDUX */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "1rem",
          flex: "1",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            dispatch(cartAction.removeItem(item));
          }}
        >
          {" "}
          <abbr title="Remove item">
            <DeleteIco />
          </abbr>
        </button>
      </div>
    </div>
  );
}
