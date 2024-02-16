"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { shopAction } from "../../store/slices/filterProductSlice";

export default function ChangeViewButton({ type, buttonHeight, children }) {
  const dispatch = useDispatch();
  const viewChangeHandler = () => {
    dispatch(shopAction.showItems({ type }));
  };

  return (
    <button
      style={{
        marginRight: "2.4rem",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        height: `${buttonHeight}`,
      }}
      onClick={viewChangeHandler}
    >
      {children}
    </button>
  );
}
