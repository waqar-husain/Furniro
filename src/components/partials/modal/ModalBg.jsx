"use client";
import React from "react";

import style from "./modalbg.module.css";

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
