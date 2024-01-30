"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import style from "../../cart/cart.module.css";

import deleteIco from "../icon/delete.svg";
import sofaImg from "@/app/public/Asgaard.png";
import InputNumberProduct from "../productItem/inputNumberProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/app/store/slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  //Data will be passed through props

  return (
    <Link
      href="shop/e"
      style={{
        display: "flex",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        textDecoration: "none",
        color: "inherit",
        cursor: "default",
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
          <Image alt="product image" src={sofaImg} />
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
