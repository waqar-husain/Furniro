"use client";
import React, { useState } from "react";
import style from "./compareButton.module.css";
import compare from "./icon/compare.svg";
import Image from "next/image";

export default function CompareButton(props) {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <button
      className={style.buttonCompare}
      style={props?.styleData}
      onClick={clickHandler}
    >
      <Image src={compare} alt="compare" />
      <span className={style.buttonName}>{props?.title}</span>
    </button>
  );
}
