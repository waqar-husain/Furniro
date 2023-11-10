"use client";
import React from "react";

export default function ProductPageButtons() {
  return (
    <form style={{ marginTop: "2.4rem" }}>
      <input type="number" min="1" max="5" />
      <button>Add to cart</button>
      <button>Compare</button>
    </form>
  );
}
