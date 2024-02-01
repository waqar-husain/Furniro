"use client";
import React, { useState } from "react";
import ButtonSecondary from "../buttons/buttonSecondary";
import style from "./productPagebutton.module.css";
import InputNumberProduct from "./inputNumberProduct";
import { useDispatch } from "react-redux";
import { cartAction } from "@/app/store/slices/cartSlice";
import LikeNewButton from "../buttons/likeNewButton";

export default function ProductPageButtons(data) {
  const dispatch = useDispatch();
  const [noOfItem, setNoOfItem] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
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
    >
      <div>
        {/* {data && //SHOW SIZE BOX} */}

        <p>Size</p>
        <div
          style={{
            marginTop: "1.2rem",
            position: "relative",
            display: "flex",
            gap: "1.6rem",
            fontSize: "1.3rem",
            color: "#000",
          }}
        >
          {/* radio button created on the basis of data recive with Value */}
          {["S", "M", "L"].map((e, i) => {
            return (
              <label key={i} style={{ display: "flex" }}>
                <input
                  className={style.input}
                  defaultChecked={
                    size === ""
                      ? i === 0
                        ? true
                        : false
                      : size === e
                      ? true
                      : false
                  }
                  type="radio"
                  value={e}
                  name="size"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
                <div className={style.checkmark}>
                  <p>{e}</p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div
        className={style.productColor}
        style={{ marginTop: "1.8rem", height: "6.3rem" }}
      >
        {/* {data && //SHOW COLOR BOX} */}
        <p>Color</p>
        <div
          style={{
            marginTop: "1.2rem",
            position: "relative",
            display: "flex",
            gap: "1.6rem",
            fontSize: "1.3rem",
            color: "#000",
          }}
        >
          {/* radio color button created on the basis of data recive with Value */}
          {/* <input type="radio" defaultChecked value="black" name="color" />
          <input type="radio" value="red" name="color" />
          <input type="radio" value="yellow" name="color" /> */}
          {["#816DFA", "#000", "#B88E2F"].map((e, i) => {
            return (
              <label key={i} style={{ display: "flex" }}>
                <input
                  className={style.inputColor}
                  defaultChecked={
                    color === ""
                      ? i === 0
                        ? true
                        : false
                      : color === e
                      ? true
                      : false
                  }
                  type="radio"
                  value={e}
                  name="color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
                <div className={style.outerCir}>
                  <div
                    style={{
                      backgroundColor: `${e}`,
                    }}
                    className={style.colorSelect}
                  ></div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "3.2rem",
          columnGap: "2rem",
          alignItems: "center",
        }}
      >
        <ButtonSecondary
          title="Add To Cart"
          func={() => {
            dispatch(
              cartAction.incrementCart({
                id: 65,
                quantity: 3,
                price: 2500,
                subTotal: 2500,
              })
            );
          }}
        />
        <div
          style={{
            height: "5rem",
            width: "5rem",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "#d7d7d7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LikeNewButton
            styleData={{ marginTop: "0.4rem", marginLeft: "0.1111rem" }}
            type="shop"
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
    </form>
  );
}
