"use client";
import React from "react";
import style from "./button.module.css";
import { useRouter } from "next/navigation";

export default function ButtonPrimary(props) {
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();
    props.url && router.push(props.url);
    props.func && props.func();
  };
  return (
    <button
      className={
        props.style === "primary" ? style.buttonPrimary : style.buttonSecondary
      }
      style={props?.styleData}
      onClick={(props.url || props.func) && clickHandler}
      type={props?.typeOf}
      disabled={props?.isDisabled}
    >
      {props?.title}
    </button>
  );
}
