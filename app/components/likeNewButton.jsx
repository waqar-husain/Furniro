"use client";
import React, { useState } from "react";
import style from "./likeButton.module.css";
import Heart from "./icon/heart";

export default function LikeNewButton(props) {
  const [clicked, setClicked] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked((oldState) => !oldState);
    props.func && props.func();
  };
  return (
    <abbr
      title="Like"
      style={{ display: "flex", textDecoration: "none", marginLeft: "2rem" }}
    >
      <button
        className={style.likeButton}
        style={props?.styleData}
        onClick={clickHandler}
      >
        <Heart fill={clicked ? "red" : "none"} type={props?.type} />
        {props?.title && (
          <span className={style.buttonName}>{props?.title}</span>
        )}
      </button>
    </abbr>
  );
}
