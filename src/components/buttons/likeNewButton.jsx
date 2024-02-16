"use client";
import React, { useState } from "react";
import style from "./likeButton.module.css";
import Heart from "../icon/heart";
import { useDispatch } from "react-redux";
import { wishlistAction } from "@/src/store/slices/wishlistSlice";

export default function LikeNewButton(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked((oldState) => !oldState);
    if (!clicked) {
      dispatch(wishlistAction.addItem(props.item));
    } else {
      dispatch(wishlistAction.removeItem(props.item));
    }
  };
  return (
    <abbr title="Like" style={{ display: "flex", textDecoration: "none" }}>
      <button
        className={style.likeButton}
        style={props?.styleData}
        onClick={clickHandler}
      >
        <Heart
          fill={clicked ? "red" : props.type === "list" ? "none" : "white"}
          type={props?.type}
        />
        {props?.title && (
          <span className={style.buttonName}>{props?.title}</span>
        )}
      </button>
    </abbr>
  );
}
