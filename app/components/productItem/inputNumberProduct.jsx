"use client";
import React, { useState } from "react";
import style from "./inputNumberProudct.module.css";

export default function InputNumberProduct(props) {
  const [noOfItem, setNoOfItem] = useState(1);
  return (
    <div className={style.inputItem}>
      <button
        className={style.inputButtons}
        style={
          props.styleData
            ? props.styleData.left
            : { marginRight: "3.5rem", paddingLeft: "1.5rem" }
        }
        onClick={(e) => {
          e.preventDefault();
          if (noOfItem === 1) return;
          setNoOfItem((prev) => prev - 1);
        }}
      >
        &minus;
      </button>
      <input
        type="number"
        min="1"
        max="5"
        value={noOfItem}
        onChange={(e) => {
          if (e.target.value !== "") {
            if (
              e.target.value < 1 ||
              e.target.value > 5 ||
              isNaN(e.target.value)
            )
              return;
          }
          e.target.value === ""
            ? setNoOfItem(e.target.value)
            : setNoOfItem(Number(e.target.value));
        }}
        onBlur={(e) => {
          e.preventDefault();
          if (e.target.value === "" || e.target.value < 1) setNoOfItem(1);
        }}
        className={style.inputBar}
        style={props.styleData?.input && props.styleData.input}
      />
      <button
        className={style.inputButtons}
        style={
          props.styleData
            ? props.styleData.right
            : { marginRight: "1.5rem", paddingLeft: "3.5rem" }
        }
        onClick={(e) => {
          e.preventDefault();
          if (noOfItem === 5) return;
          setNoOfItem((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
