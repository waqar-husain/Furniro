import Image from "next/image";
import React from "react";
import heart from "./heart.svg";

export default function Wishlist() {
  return (
    <div style={{ height: "25px", cursor: "pointer" }}>
      <Image src={heart} height="25" width="25" alt="Wishlist" />
    </div>
  );
}
