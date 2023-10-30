import React from "react";

export default function Heart(prop) {
  return (
    <div style={{ width: "17px", height: "17px" }}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 16 15"
        fill={prop.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z"
          stroke={prop.fill === "none" ? "white" : "red"}
          strokeWidth="1.7"
        />
      </svg>
    </div>
  );
}
