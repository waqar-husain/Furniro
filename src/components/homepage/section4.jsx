import React from "react";
import style from "./section4.module.css";
import Image from "next/image";

import img1 from "../../public/Rectangle 36.jpg";
import img2 from "../../public/Rectangle 38.jpg";
import img3 from "../../public/Rectangle 40.jpg";
import img4 from "../../public/Rectangle 43.jpg";
import img5 from "../../public/Rectangle 45.jpg";
import img6 from "../../public/Rectangle 37.jpg";
import img7 from "../../public/Rectangle 39.jpg";
import img8 from "../../public/Rectangle 41.jpg";
import img9 from "../../public/Rectangle 44.jpg";

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
