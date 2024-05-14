import React, { useState } from "react";
import style from "./inputComp.module.css";

export default function InputMessage(props) {
  const [messageText, setMessageText] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = messageText.trim().length !== 0;
  const hasError = !isValid && isTouched;

  const textareaHandler = (e) => {
    e.preventDefault();
    setMessageText(e.target.value);
    props.getVal({ value: e.target.value, isValid: isValid });
  };

  const messageBlurHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);
  };

  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor="message">
        Message
      </label>
      <textarea
        onBlur={messageBlurHandler}
        value={messageText}
        style={{
          ...props?.styleData,
          border: `1px solid ${hasError ? "red" : "var(--color-grey5)"}`,
          fontFamily: "inherit",
          fontSize: "1.8rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        className={
          hasError ? ` ${style.input} ${style.messageHasError} ` : style.input
        }
        name="message"
        placeholder={props.placeholderText && props.placeholderText}
        required={props?.isRequired ? true : false}
        id="message"
        cols={props.cols}
        rows={props.rows}
        onChange={textareaHandler}
      ></textarea>
    </div>
  );
}
