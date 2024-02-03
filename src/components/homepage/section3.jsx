import React from "react";
import style from "./section3.module.css";
import ButtonPrimary from "../buttons/buttonPrimary";
import Slider from "../slider";
import SliderSec from "../slider";

export default function Section3() {
  return (
    <section className={style.section}>
      <div className={style.sectionInnerContainer}>
        <div className={style.textArea}>
          <div className={style.headingBox}>
            <h2 className={style.headingMain}>
              50+ Beautiful rooms inpiration
            </h2>
            <p className={style.subHeading}>
              Our designer already made a lot beautiful prototype of rooms that
              inspire you
            </p>
          </div>
          <ButtonPrimary
            title="Explore More"
            style="primary"
            styleData={{
              alignSelf: "start",
              padding: "12px 36px",
              fontSize: "1.6rem ",
              fontWeight: "600",
              border: "1px solid var(--color-primary)",
            }}
          />
        </div>
        <SliderSec />
      </div>
    </section>
  );
}
