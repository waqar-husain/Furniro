import React from "react";
import Link from "next/link";
import Image from "next/image";

//Css
import style from "./section1.module.css";

//Image
import image1 from "../../public/image 106.jpg";
import image2 from "../../public/image 100.jpg";
import image3 from "../../public/image 101.jpg";

export default function Section1() {
  return (
    <section className={style.section}>
      <div className={style.sectionInnerContainer}>
        <div className={style.sectionTop}>
          <h1 className={style.sectionHeading}>Browse The Range</h1>
          <p className={style.sectionDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className={style.sectionMain}>
          <Link href="/shop?search=dining&page=1" className={style.linkMain}>
            <div className={style.linkBox}>
              <div className={style.linkBoxImage}>
                <Image
                  src={image1}
                  alt="Dining Image"
                  className={style.linkImage}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <h4 className={style.linkBoxHeading}>Dining</h4>
            </div>
          </Link>
          <Link href="/shop?search=living&page=1" className={style.linkMain}>
            <div className={style.linkBox}>
              <div className={style.linkBoxImage}>
                <Image
                  src={image2}
                  alt="Living Image"
                  className={style.linkImage}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <h4 className={style.linkBoxHeading}>Living</h4>
            </div>
          </Link>
          <Link href="/shop?search=bedroom&page=1" className={style.linkMain}>
            <div className={style.linkBox}>
              <div className={style.linkBoxImage}>
                <Image
                  src={image3}
                  alt="Bedroom Image"
                  className={style.linkImage}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <h4 className={style.linkBoxHeading}>Bedroom</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
