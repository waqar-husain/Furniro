import Image from "next/image";
import React from "react";

import emptyStar from "./icon/emptyStar.svg";
import starFull from "./icon/starFull.svg";
import starHalf from "./icon/starHalf.svg";

export default function StarContainer(props) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          gap: "0.6rem",
          display: "flex",
          marginRight: "1.8rem",
          alignItems: "center",
        }}
      >
        {Array(5)
          .fill("null")
          .map((el, i) => {
            if (i < Math.floor(+props.starsRating)) {
              return (
                <Image src={starFull} key={i} alt={`star${i}`} loading="lazy" />
              );
            }
            if (
              props.starsRating.endsWith(".5") &&
              i === Math.ceil(+props.starsRating) - 1
            ) {
              return (
                <Image src={starHalf} key={i} alt={`star${i}`} loading="lazy" />
              );
            }
            return (
              <Image src={emptyStar} key={i} alt={`star${i}`} loading="lazy" />
            );
          })}
        {"3.0"[2] !== "0" && <Image src={starHalf} alt="starthalf" />}
      </div>
      <p
        style={{
          borderLeft: "1px solid var(--color-grey5)",
          paddingLeft: "2.2rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          fontSize: "1.3rem",
          color: "var(--color-grey5)",
        }}
      >
        {props.starsRating} Customer Review
      </p>
    </div>
  );
}
