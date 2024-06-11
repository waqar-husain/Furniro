"use client";
import React, { Suspense, useEffect, useState } from "react";
import style from "./paginationButton.module.css";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function PaginationButtons(props) {
  const query = useSearchParams().get("search");
  const page = useSearchParams().get("page");
  const sort = useSearchParams().get("sort_by");
  const path = useParams();
  const url = (page) =>
    `/shop${
      query !== null
        ? `?search=${query}&sort_by=${sort}&`
        : `/${path.categories}?`
    }page=${page}`;

  // 14 38691
  const button = Math.ceil(
    Number(props.totalProducts.toString().replaceAll(",", "")) /
      Number(props.dataLength.toString().replaceAll(",", ""))
  );

  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setPageNo(+page);
  }, []);

  let buttonArr;
  if (button < 5) {
    buttonArr = Array.from(Array(button).keys());
  }

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
      <Suspense>
        {button === 1 ? (
          ""
        ) : (
          /* ///////////////////////////////PREVIOUS BUTTON////////////////////////////////////// */
          <div className={style.paginationContainer}>
            {page > "1" && (
              <Link
                href={url(pageNo <= 1 ? "1" : pageNo - 1)}
                onClick={prevButtonHandler}
                className={style.prevButton}
                // style={{ visibility: pageNo <= 1 ? "hidden" : "visible" }}
              >
                Prev
              </Link>
            )}
            {/* ///////////////////////////////////BUTTON IS LESS THAN 4////////////////////////////////////// */}
            {button < 4 && (
              <>
                {buttonArr.map((el, i) => (
                  <Link
                    key={i}
                    href={url(i + 1)}
                    style={{
                      backgroundColor:
                        page === String(i + 1) ? "#B88E2F" : "#F9F1E7",
                      color: page === String(i + 1) ? "white" : "black",
                    }}
                    onClick={numberButtonHandler}
                    className={style.paginationButton}
                  >
                    {i + 1}
                  </Link>
                ))}
              </>
            )}

            {/* /////////////////FIRST FOUR BUTTONS IF THE  BUTTON IS MORE THAN 4 /////////////////////////// */}

            {+page < 4 && button > 4 && (
              <>
                {[1, 1, 1, 1].map((el, i) => (
                  <Link
                    key={i}
                    href={url(i + 1)}
                    style={{
                      backgroundColor:
                        page === String(i + 1) ? "#B88E2F" : "#F9F1E7",
                      color: page === String(i + 1) ? "white" : "black",
                    }}
                    onClick={numberButtonHandler}
                    className={style.paginationButton}
                  >
                    {i + 1}
                  </Link>
                ))}

                <div className={style.overflowButton}>
                  &#x2022;&#x2022;&#x2022;
                </div>

                <Link
                  href={url(button)}
                  style={{
                    backgroundColor:
                      page === String(button) ? "#B88E2F" : "#F9F1E7",
                    color: page === String(button) ? "white" : "black",
                  }}
                  onClick={numberButtonHandler}
                  className={style.paginationButton}
                >
                  {button}
                </Link>
              </>
            )}

            {/* /////////////////MIDDLE THREE BUTTON IF THE  BUTTON IS MORE THAN 4 ///////////////////////////// */}

            {+page > 3 && +page < button - 2 && (
              <>
                <Link
                  href={url(1)}
                  style={{
                    backgroundColor: page === String(1) ? "#B88E2F" : "#F9F1E7",
                    color: page === String(1) ? "white" : "black",
                  }}
                  onClick={numberButtonHandler}
                  className={style.paginationButton}
                >
                  {1}
                </Link>

                <div className={style.overflowButton}>
                  &#x2022;&#x2022;&#x2022;
                </div>

                {[+page - 1, +page, +page + 1].map((el, i) => (
                  <Link
                    key={i}
                    href={url(el)}
                    style={{
                      backgroundColor:
                        page === String(el) ? "#B88E2F" : "#F9F1E7",
                      color: page === String(el) ? "white" : "black",
                    }}
                    onClick={numberButtonHandler}
                    className={style.paginationButton}
                  >
                    {el}
                  </Link>
                ))}

                <div className={style.overflowButton}>
                  &#x2022;&#x2022;&#x2022;
                </div>

                <Link
                  href={url(button)}
                  style={{
                    backgroundColor:
                      page === String(button) ? "#B88E2F" : "#F9F1E7",
                    color: page === String(button) ? "white" : "black",
                  }}
                  onClick={numberButtonHandler}
                  className={style.paginationButton}
                >
                  {button}
                </Link>
              </>
            )}

            {/* ////////////////LAST THREE BUTTONS IF THE  BUTTON IS MORE THAN 4 ///////////////////////*/}

            {+page >= button - 2 && button > 4 && (
              <>
                <Link
                  href={url(1)}
                  style={{
                    backgroundColor: page === String(1) ? "#B88E2F" : "#F9F1E7",
                    color: page === String(1) ? "white" : "black",
                  }}
                  onClick={numberButtonHandler}
                  className={style.paginationButton}
                >
                  {1}
                </Link>

                <div className={style.overflowButton}>
                  &#x2022;&#x2022;&#x2022;
                </div>

                {[button - 2, button - 1, button].map((el, i) => (
                  <Link
                    key={i}
                    href={url(el)}
                    style={{
                      backgroundColor:
                        page === String(el) ? "#B88E2F" : "#F9F1E7",
                      color: page === String(el) ? "white" : "black",
                    }}
                    onClick={numberButtonHandler}
                    className={style.paginationButton}
                  >
                    {el}
                  </Link>
                ))}
              </>
            )}

            {/* ////////////////////////////////NEXT BUTTON///////////////////////////////////////// */}

            {+page < button && (
              <Link
                href={url(+page < button ? pageNo + 1 : button)}
                onClick={nextButtonHandler}
                className={style.nextButton}
              >
                Next
              </Link>
            )}
          </div>
        )}
      </Suspense>
    </>
  );
}
