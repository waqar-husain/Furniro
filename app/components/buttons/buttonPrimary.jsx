"use client";
import React from "react";
import style from "./button.module.css";
import { useRouter } from "next/navigation";
export default function ButtonPrimary(prop) {
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();
    prop.url && router.push(prop.url);
    prop.func && prop.func();
  };
  return (
    <button
      className={
        prop.style === "primary" ? style.buttonPrimary : style.buttonSecondary
      }
      style={prop?.styleData}
      onClick={clickHandler}
    >
      {prop?.title}
    </button>
  );
}
