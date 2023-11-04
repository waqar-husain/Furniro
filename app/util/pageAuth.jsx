"use client";
import React from "react";
import { notFound, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function PageAuth({ children }) {
  const noOfPage = Number(useSearchParams().get("page"));
  const totalNumberOfPage = Math.ceil(
    useSelector((state) => state.shop.data).length /
      useSelector((state) => state.shop.noOfItems)
  );
  if (noOfPage > totalNumberOfPage || noOfPage === 0) {
    notFound();
  }
  return <>{children}</>;
}
