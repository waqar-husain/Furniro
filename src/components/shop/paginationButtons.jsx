"use client";
import React, { useState } from "react";
import style from "./paginationButton.module.css";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function PaginationButtons(props) {
  const query = useSearchParams().get("search");
  const path = useParams();

  const button = Math.ceil(
    useSelector((state) => state.shop.data).length /
      useSelector((state) => state.shop.noOfItems)
  );
  const [pageNo, setPageNo] = useState(1);
  const page = useSearchParams().get("page");

  const buttonArr = Array.from(Array(button).keys());

  const numberButtonHandler = (e) => {
    setPageNo(Number(e.target.text));
  };

  const prevButtonHandler = () => {
    if (pageNo <= 1) return;
    setPageNo((prev) => prev - 1);
  };
  const nextButtonHandler = () => {
    if (pageNo >= button) return;
    setPageNo((prev) => prev + 1);
  };

  return (
    <>
      {buttonArr.length === 1 && ""}
      {buttonArr.length > 1 && (
        <div className={style.paginationContainer}>
          {page > "1" && (
            <Link
              href={`/shop${
                query !== null ? `?search=${query}&` : `/${path.categories}?`
              }page=${pageNo <= 1 ? "1" : pageNo - 1}`}
              onClick={prevButtonHandler}
              className={style.prevButton}
              // style={{ visibility: pageNo <= 1 ? "hidden" : "visible" }}
            >
              Prev
            </Link>
          )}
          {buttonArr.map((el, i) => (
            <Link
              key={i}
              href={`/shop${
                query !== null ? `?search=${query}&` : `/${path.categories}?`
              }page=${i + 1}`}
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
          {page < String(button) && (
            <Link
              href={`/shop${
                query !== null ? `?search=${query}&` : `/${path.categories}?`
              }page=${page < String(button) ? pageNo + 1 : button}`}
              onClick={nextButtonHandler}
              className={style.nextButton}
              style={
                {
                  // visibility: pageNo < String(button) ? "visible" : "hidden",
                }
              }
            >
              Next
            </Link>
          )}
        </div>
      )}
    </>
  );
}
