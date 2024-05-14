"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import style from "./slider.module.css";
import ButtonPrimary from "../../buttons/buttonPrimary";

import arrowRightSvg from "@/src/components/icon/arrowRight.svg";
import ChevronRight from "../../icon/ChevronRight";
import Link from "next/link";

export default function SliderSec() {
  const carouselArray = [
    {
      bgImg: "/Rectangle 24.jpg",
      desc: {
        title: "Bed Room",
        tag: "Inner Peace",
        link: "/shop?search=bedroom&&sort_by=RELEVANCE&&page=1",
      },
    },
    {
      bgImg: "/Rectangle 25.png",
      desc: {
        title: "Kitchen",
        tag: "Kitchen Area",
        link: "/shop?search=kitchen&&sort_by=RELEVANCE&&page=1",
      },
    },
    {
      bgImg: "/Rectangle 26.png",
      desc: {
        title: "Living Room",
        tag: "Livin'it",
        link: "/shop?search=livingroom&&sort_by=RELEVANCE&&page=1",
      },
    },
    {
      bgImg: "/Rectangle 24.jpg",
      desc: {
        title: "Bed Room",
        tag: "Inner Peace",
        link: "/shop?search=bedroom&&sort_by=RELEVANCE&&page=1",
      },
    },
    {
      bgImg: "/Rectangle 25.png",
      desc: {
        title: "Kitchen",
        tag: "Kitchen Area",
        link: "/shop?search=kitchen&&sort_by=RELEVANCE&&page=1",
      },
    },
  ];

  const [curImg, setCurImg] = useState(0);

  useEffect(() => {
    if (curImg === 3) {
      setCurImg(0);
    }
  }, [curImg]);

  return (
    <div className={style["slider-container"]}>
      <div className={style.slider}>
        <ul style={{ width: "100%" }}>
          {carouselArray.map((el, i) => (
            <li
              key={i}
              className={style["slider-item"]}
              style={{
                width: `${396 * (i - curImg) === 0 ? "40.4rem" : "37.2rem"}`,
                height: `${396 * (i - curImg) === 0 ? "58.2rem" : "48.6rem"}`,
                backgroundImage: `url("${el.bgImg.slice(1)}")`,
                transform: `translateX(${
                  396 * (i - curImg) === 396 ? 42.8 : 41.3 * (i - curImg)
                }rem)`,
              }}
            >
              {396 * (i - curImg) === 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.75)",
                      padding: "3.2rem 1.7rem  3.2rem 3.2rem",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "center",
                        color: "#616161",
                      }}
                    >
                      <p>0{i + 1}</p>
                      <div>
                        <span
                          style={{
                            height: "1px",
                            backgroundColor: "#616161",
                            width: "2.7rem",
                            display: "block",
                          }}
                        ></span>
                      </div>
                      <p>{el.desc.title}</p>
                    </span>
                    <h1
                      style={{
                        marginTop: "0.8rem",
                        fontSize: "2.8rem",
                        fontWeight: "600",
                        color: "#3a3a3a",
                      }}
                    >
                      {el.desc.tag}
                    </h1>
                  </div>
                  <Link
                    href={el.desc.link}
                    style={{
                      backgroundColor: "var(--color-primary)",
                      padding: "1.2rem",
                      display: "flex",
                    }}
                  >
                    <Image
                      src={arrowRightSvg}
                      alt="arrowRight"
                      height="2.4rem"
                      width="2.4rem"
                    />
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <ButtonPrimary
          styleData={{
            position: "absolute",
            top: "calc(50% - 2.4rem)",
            right: "7rem",
            height: "4.8rem",
            width: "4.8rem",
            borderRadius: "50%",
            border: "none",
            color: "var(--color-primary)",
            backgroundColor: "white",
          }}
          func={() => {
            setCurImg((prev) => prev + 1);
          }}
          title={<ChevronRight size="24" />}
        />

        <div className={style.slideToBtn}>
          {Array(3)
            .fill("button")
            .map((el, i) => (
              <div
                key={i}
                onClick={() => setCurImg(i)}
                style={{
                  cursor: "pointer",
                  width: "2.7rem",
                  height: "2.7rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${
                    curImg === i ? "#B88E2F" : "transparent"
                  }`,
                }}
              >
                <div
                  style={{
                    height: "1.1rem",
                    width: "1.1rem",
                    backgroundColor: `${curImg === i ? "#B88E2F" : "#d1d1d1"}`,
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
