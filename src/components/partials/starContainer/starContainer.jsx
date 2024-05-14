import Image from "next/image";
import React from "react";

import EmptyStar from "@/src/components/icon/EmptyStar.jsx";
import StarFull from "@/src/components/icon/StarFull.jsx";
import StarHalf from "@/src/components/icon/StarHalf.jsx";

export default function StarContainer(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          gap: "0.6rem",
          display: "flex",
          alignItems: "center",
          paddingBottom: "0.4rem",
          paddingRight: "1rem",
          borderRight: "1px solid var(--color-grey5)",
        }}
      >
        {Array(5)
          .fill("null")
          .map((el, i) => {
            if (i < Math.floor(+props.starsRating)) {
              return <StarFull key={i} />;
            }
            if (
              props.starsRating?.endsWith(".5") &&
              i === Math.ceil(+props.starsRating) - 1
            ) {
              return <StarHalf key={i} />;
            }
            return <EmptyStar key={i} />;
          })}
        {"3.0"[2] !== "0" && <StarHalf key={i} />}
      </div>
      <p
        style={{
          paddingLeft: "1rem",
          fontSize: "1.6rem",
          color: "var(--color-grey5)",
        }}
      >
        {props.numReviews} Curstomer Review
      </p>
    </div>
  );
}
