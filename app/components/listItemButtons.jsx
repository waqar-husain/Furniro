"use client";

import React from "react";

export default function ListItemButtons(props) {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("HI");
  };
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "transparent",
      }}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
}
