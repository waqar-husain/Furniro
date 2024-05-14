import Image from "next/image";
import React from "react";
import Heart from "./Heart2.jsx";

export default function Wishlist() {
  return (
    <div style={{ height: "2.5rem", cursor: "pointer" }}>
      <Heart />
    </div>
  );
}
