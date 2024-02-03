import React from "react";
import Image from "next/image";

//Style
import style from "./bottomBanner.module.css";

//Images
import trophy from "./icon/trophy 1.svg";
import guarantee from "./icon/guarantee.svg";
import shipping from "./icon/shipping.svg";
import support from "./icon/customer-support.svg";

export default function BottomBanner() {
  return (
    <div className={style.bottomBanner}>
      <div className={style.innerContainer}>
        <div className={style.bannerItem}>
          <Image src={trophy} alt="Trophy" />
          <div className={style.bannerText}>
            <h3 className={style.bannerTextHeading}>Hight Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>

        <div className={style.bannerItem}>
          <Image src={guarantee} alt="Gurantee" />
          <div className={style.bannerText}>
            <h3 className={style.bannerTextHeading}>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className={style.bannerItem}>
          <Image src={shipping} alt="Shipping" />
          <div className={style.bannerText}>
            <h3 className={style.bannerTextHeading}>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>

        <div className={style.bannerItem}>
          <Image src={support} alt="Support" />
          <div className={style.bannerText}>
            <h3 className={style.bannerTextHeading}>24 / 7 Support</h3>
            <p>Delicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
