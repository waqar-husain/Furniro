"use client";
import React from "react";
import Image from "next/image";
import search from "./icon/search.svg";

export default function SearchBar() {
  return (
    <div style={{ height: "25px", cursor: "pointer" }}>
      <Image src={search} width="25" height="25" alt="Search" />
    </div>
  );
}
