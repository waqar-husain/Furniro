"use client";
import React, { useState } from "react";
import style from "./compareButton.module.css";
import CompareIcon from "../icon/compare";

export default function CompareButton(props) {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <abbr
      title="Compare"
      style={{ display: "flex", textDecoration: "none", marginLeft: "2rem" }}
    >
      <button
        className={style.buttonCompare}
        style={props?.styleData}
        onClick={clickHandler}
      >
        <CompareIcon type={props.type} />
        {props?.title && (
          <span className={style.buttonName}>{props?.title}</span>
        )}
      </button>
    </abbr>
  );
}
