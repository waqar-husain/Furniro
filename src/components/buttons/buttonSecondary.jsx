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
      id={props.id ? props.id : ""}
      className={style.button}
      style={props?.styleObj}
      onClick={(props.url || props.func) && clickHandler}
      type={props?.typeOf}
      disabled={props?.isDisabled}
    >
      {props?.title}
    </button>
  );
}
