import React from "react";
import style from "./section4.module.css";

export default function Section4() {
  return (
    <section className={style.section}>
      <div className={style.sectionInnerContainer}>
        <div className={style.sectionHeading}>
          <p className={style.headingSmall}>Share your setup with</p>
          <h2 className={style.headingMain}>#FuniroFurniture</h2>
        </div>
        <div className={style.sectionMain}>
          <div className={`${style.img1} ${style.img}`}></div>
          <div className={`${style.img2} ${style.img}`}></div>
          <div className={`${style.img3} ${style.img}`}></div>
          <div className={`${style.img4} ${style.img}`}></div>
          <div className={`${style.img5} ${style.img}`}></div>
          <div className={`${style.img6} ${style.img}`}></div>
          <div className={`${style.img7} ${style.img}`}></div>
          <div className={`${style.img8} ${style.img}`}></div>
          <div className={`${style.img9} ${style.img}`}></div>
        </div>
      </div>
    </section>
  );
}
