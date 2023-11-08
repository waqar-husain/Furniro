"use client";
import React from "react";
import { RWebShare } from "react-web-share";
import Image from "next/image";
import style from "./listGridItem.module.css";
import share from "./icon/share.svg";
export default function ShareButton(props) {
  return (
    <div onClick={(e) => e.preventDefault()}>
      <RWebShare
        data={{
          text: "Web Share - GfG",
          url: props.url ? props.url : "http://localhost:3000/",
          title: "GfG",
        }}
        onClick={() => {}}
      >
        <button className={style.onHoverShare}>
          <Image
            src={share}
            alt="Share"
            width="16"
            height="16"
            style={{ paddingRight: "0.3rem", width: "auto", height: "auto" }}
          />
          Share
        </button>
      </RWebShare>
    </div>
  );
}
