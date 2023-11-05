"use client";
import React from "react";

import style from "./itemToShow.module.css";
import { useSelector } from "react-redux";

export default function ItemToShow() {
  const totalNoOfResults = useSelector((state) => state.shop.data).length;
  return <span></span>;
}
