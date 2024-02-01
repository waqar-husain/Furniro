import React from "react";
import SearchedItem from "./searchedItem";

export default function ResultCont(props) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        rowGap: "2rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "rgb(50,50,50)",
          fontWeight: "500",
        }}
      >
        <span>PRODUCTS</span>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--color-primary)",
            fontSize: "inherit",
            fontWeight: "500",
          }}
        >
          View all 756 Results &#62;
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        {/* ////////////////////////search Result product */}
        <SearchedItem />
      </div>
    </div>
  );
}
