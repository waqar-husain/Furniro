"use client";
import React, { useEffect, useState } from "react";
import ButtonSecondary from "../buttons/buttonSecondary";
import style from "./productPagebutton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/src/store/slices/cartSlice";
import LikeNewButton from "../buttons/likeNewButton";
import { useRouter } from "next/navigation";

export default function ProductPageButtons(data) {
  const [changeBtn, setChangeBtn] = useState(false);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cartList);

  useEffect(() => {
    const itemExist = cart.find((el) => el.id === 65); //id will get from props
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
        id: 65,
        quantity: 1,
        price: 150000,
        productTotal: 150000,
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
