"use client";
import React, { useState } from "react";
import style from "./paginationButton.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaginationButtons(props) {
  const [pageNo, setPageNo] = useState(1);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const buttonArr = Array.from(Array(props?.button).keys());
  // console.log(buttonArr);

  const numberButtonHandler = (e) => {
    setPageNo(Number(e.target.text));
  };

  const prevButtonHandler = () => {
    if (pageNo < 1) return;
    setPageNo((prev) => prev - 1);
  };
  const nextButtonHandler = () => {
    if (pageNo > +props.button) return;

    setPageNo((prev) => prev + 1);
  };

  return (
    <div className={style.paginationContainer}>
      {page > "1" && (
        <Link
          href={`/shop?page=${pageNo < 1 ? "1" : pageNo - 1}`}
          onClick={prevButtonHandler}
          className={style.prevButton}
        >
          Prev
        </Link>
      )}
      {buttonArr.map((el, i) => (
        <Link
          key={i}
          href={`/shop?page=${i + 1}`}
          style={{
            backgroundColor: page === String(i + 1) ? "#B88E2F" : "#F9F1E7",
            color: page === String(i + 1) ? "white" : "black",
          }}
          onClick={numberButtonHandler}
          className={style.paginationButton}
        >
          {i + 1}
        </Link>
      ))}
      {page < String(props.button) && (
        <Link
          href={`/shop?page=${pageNo + 1}`}
          onClick={nextButtonHandler}
          className={style.nextButton}
        >
          Next
        </Link>
      )}
    </div>
  );
}
