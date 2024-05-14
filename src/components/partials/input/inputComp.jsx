"use client";
import React, { useEffect, useState } from "react";
import style from "./inputComp.module.css";
import eyeOpen from "@/src/components/icon/eyeOpen.svg";
import eyeClose from "@/src/components/icon/eyeClose.svg";
import Image from "next/image";

export default function InputComp(props) {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [toggleEye, setToggleEye] = useState(true);

  useEffect(() => {
    if (props.defaultVal) {
      setInput(props.defaultVal);
      props.getVal({
        value: props.defaultVal,
        isValid: true,
      });
    }
  }, [props.defaultVal]);

  const valueIsValid = props?.checkValidity ? props.checkValidity(input) : true;
  const hasError = !valueIsValid && isTouched;

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value.trim());
    props.getVal({
      value: e.target.value.trim(),
      isValid: props?.checkValidity
        ? props.checkValidity(e.target.value)
        : true,
    });
  };

  const inputBlurHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  return (
    <div className={style.inputContainer} style={{ ...props?.styleData }}>
      <label
        htmlFor={props.id}
        style={{
          color: `${
            props.disabled ? "var(--color-grey2)" : hasError ? "red" : "black"
          }`,
        }}
        className={style.label}
      >
        {props.label}
      </label>
      <div style={{ flex: "1", position: "relative" }}>
        <input
          minLength={2}
          className={style.input}
          style={
            props.disabled
              ? {
                  color: "rgb(170, 170, 170)",
                  opacity: "0.7",
                  height: props.message ? "14rem" : "6rem",
                  border: `1px solid rgba(118, 118, 118, 0.3)`,
                  backgroundColor: "#fff",
                }
              : {
                  border: `1px solid ${
                    hasError ? "red" : "var(--color-grey5)"
                  }`,
                  height: props.message ? "14rem" : "6rem",
                  ...props.inputStyle,
                }
          }
          autoComplete="off"
          type={
            props.type === "password"
              ? toggleEye
                ? "password"
                : "text"
              : props.type
          }
          id={props.id}
          value={input}
          placeholder={props.placeholderText && props.placeholderText}
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          required={props.isRequired}
          disabled={props.disabled ? props.disabled : false}
        />
        {props.type === "password" && (
          <button
            type="button"
            style={{
              height: "2.4rem",
              width: "2.4rem",
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              right: "1rem",
              top: "31%",
              cursor: "pointer",
            }}
            onClick={() => setToggleEye((prev) => !prev)}
          >
            <Image
              alt="eye"
              src={toggleEye ? eyeClose : eyeOpen}
              style={{ width: "2.4rem", height: "2.4rem" }}
            />
          </button>
        )}
      </div>
      {hasError && (
        <p style={{ color: "red", marginTop: "0.5rem" }}>
          {props.invalidText
            ? props.invalidText
            : `Provide a valid ${props.label.toLowerCase()}!`}
        </p>
      )}
    </div>
  );
}
