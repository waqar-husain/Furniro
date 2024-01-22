"use client";
import React, { useState } from "react";
import style from "./inputComp.module.css";

export default function InputComp(props) {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = props?.checkValidity ? props.checkValidity(input) : true;
  const hasError = !valueIsValid && isTouched;

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value.trim());
    props.getVal({ value: e.target.value.trim(), isValid: valueIsValid });
  };
  const inputBlurHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        ...props.styleData,
      }}
    >
      <label
        htmlFor={props.id}
        style={{
          marginBottom: "2rem",
          fontWeight: "500",
          color: `${hasError ? "red" : "black"}`,
        }}
      >
        {props.label}
      </label>
      <input
        className={style.input}
        style={{
          border: `1px solid ${hasError ? "red" : "var(--color-grey5)"}`,
        }}
        autoComplete="off"
        type={props.type}
        id={props.id}
        value={input}
        onChange={inputHandler}
        onBlur={inputBlurHandler}
        required={props.isRequired}
      />
      {hasError && (
        <p
          style={{ color: "red", marginTop: "0.5rem" }}
        >{`Invalid ${props.label.toLowerCase()}`}</p>
      )}
    </div>
  );
}
