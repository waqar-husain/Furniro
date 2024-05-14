import React from "react";

export default function User(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : "2.4rem"}
      height={props.size ? props.size : "2.4rem"}
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <circle cx="24" cy="12" r="8" />
        <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
      </g>
    </svg>
  );
}
