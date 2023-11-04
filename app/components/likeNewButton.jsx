"use client";
import React, { useState } from "react";
import style from "./likeButton.module.css";
import Image from "next/image";
import whiteHeart from "./icon/white heart.svg";
import Heart from "./icon/heart";

export default function LikeNewButton(props) {
  const [clicked, setClicked] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked((oldState) => !oldState);
    props.func && props.func();
  };
  return (
    <button
      className={style.likeButton}
      style={props?.styleData}
      onClick={clickHandler}
    >
      <Heart fill={clicked ? "red" : "none"} />
      <span className={style.buttonName}>{props?.title}</span>
    </button>
  );
}
