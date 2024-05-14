import React from "react";

export default function Heart(prop) {
  return (
    <svg
      width={prop.type ? "2.6rem" : "1.7rem"}
      height={prop.type ? "2.6rem" : "1.7rem"}
      viewBox="0 0 16 15"
      fill={prop.fill ? prop.fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z"
        stroke={
          prop.fill === "white" || prop.fill === "none" ? "currentColor" : "red"
        }
        strokeWidth="1.7"
      />
    </svg>
  );
}
