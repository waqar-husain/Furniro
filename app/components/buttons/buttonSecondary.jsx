"use client";
import React from "react";
import style from "./buttonSecondary.module.css";
import { useRouter } from "next/navigation";

export default function ButtonSecondary(props) {
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();
    props.url && router.push(props.url);
    props.func && props.func();
  };
  return (
    <button
      className={style.button}
      onClick={(props.url || props.func) && clickHandler}
      style={props?.styleObj}
      type={props?.typeOf}
      disabled={props?.isDisabled}
    >
      {props.title}
    </button>
  );
}
