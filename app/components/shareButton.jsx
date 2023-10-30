"use client";
import Image from "next/image";
import React from "react";
import style from "./listItem.module.css";
import share from "./icon/share.svg";
import { RWebShare } from "react-web-share";

export default function ShareButton(props) {
  return (
    <RWebShare
      data={{
        text: "Web Share - GfG",
        url: props.url ? props.url : "http://localhost:3000/",
        title: "GfG",
      }}
      onClick={() => console.log("shared successfully!")}
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
  );
}
