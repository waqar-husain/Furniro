"use client";
import React from "react";

import style from "./modalBg.module.css";

export default function Modalbg(props) {
  return (
    <div
      className={style.searchBackdrop}
      onClick={(e) => {
        props.closeModal(e);
      }}
    >
      {props.children}
    </div>
  );
}
