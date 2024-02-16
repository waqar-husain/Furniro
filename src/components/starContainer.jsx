import Image from "next/image";
import React from "react";

import emptyStar from "./icon/emptyStar.svg";
import starFull from "./icon/starFull.svg";
import starHalf from "./icon/starHalf.svg";

export default function StarContainer(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          gap: "0.6rem",
          display: "flex",
          alignItems: "center",
          paddingBottom: "0.4rem",
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
          paddingLeft: "1rem",
          fontSize: "1.6rem",
          color: "var(--color-grey5)",
        }}
      >
        (2,454 Reviews)
      </p>
    </div>
  );
}
