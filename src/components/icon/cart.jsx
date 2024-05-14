import React from "react";

export default function CartIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : "3rem"}
      height={props.size ? props.size : "3rem"}
      viewBox="0 0 512 512"
    >
      <circle
        cx="176"
        cy="416"
        r="16"
        fill="none"
        stroke={props.nav ? "black" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.nav ? "30" : "42"}
      />
      <circle
        cx="400"
        cy="416"
        r="16"
        fill="none"
        stroke={props.nav ? "black" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.nav ? "30" : "42"}
      />
      <path
        fill="none"
        stroke={props.nav ? "black" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.nav ? "30" : "42"}
        d="M48 80h64l48 272h256"
      />
      <path
        fill="none"
        stroke={props.nav ? "black" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.nav ? "30" : "42"}
        d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
      />
    </svg>
  );
}
