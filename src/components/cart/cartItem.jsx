"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import style from "@/src/app/cart/cart.module.css";

import deleteIco from "../icon/delete.svg";
import InputNumberProduct from "../productItem/inputNumberProduct";
import { useDispatch } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";

import furniture from "@/src/public/furniture.jpg";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  //Data will be passed through props

  return (
    <Link
      href="shop/product/pid=98788"
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
      <div
        style={{
          maxWidth: "280px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className={style.productImageCont}
          style={{
            cursor: "pointer",
          }}
        >
          <Image
            alt="product image"
            src={furniture}
            style={{ width: "100%", height: "100%" }}
          />
          {/*DATA THROUGH REDUX */}
        </div>
        <span
          style={{
            marginLeft: "3.4rem",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          Asgaard sofa
        </span>{" "}
        {/*DATA THROUGH REDUX */}
      </div>
      <div
        style={{
          maxWidth: "185px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Rs. 250,000.00 {/*DATA THROUGH REDUX */}
      </div>
      <div
        style={{
          maxWidth: "105px",
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
          maxWidth: "150px",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: "#000",
        }}
      >
        {item.subTotal} {/*DATA THROUGH REDUX */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          <Image alt="delete" src={deleteIco} />
        </button>
      </div>
    </Link>
  );
}
