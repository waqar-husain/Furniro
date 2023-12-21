import React from "react";

import style from "./buttonSecondary.module.css";

export default function ButtonSecondary(props) {
  return (
    <button
      className={style.button}
      onClick={props.func}
      style={props.styleObj}
    >
      {props.title}
    </button>
  );
}
