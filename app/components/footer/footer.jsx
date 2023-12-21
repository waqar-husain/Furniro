import style from "./footer.module.css";
import React from "react";
import logo from "../icon/funiro.svg";
import Image from "next/image";
import Link from "next/link";

export default function FooterComp() {
  return (
    <footer className={style.footer}>
      <div className={style.footerInnerContainer}>
        <div className={style.innerMain}>
          <div className={style.innerMainAbout}>
            <Image src={logo} alt="Logo" />
            <div className={style.innerMainAddress}>
              400 University Drive Suite 200 Coral {"\n"}Gables,{"\n"}FL33134
            </div>
          </div>
          <div className={style.innerMainLink}>
            <h4 className={style.footerHead}>Links</h4>
            <ul className={style.innerMainUl}>
              <li>
                <Link className={style.footerLink} href="./">
                  Home
                </Link>
              </li>
              <li>
                <Link className={style.footerLink} href="./shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className={style.footerLink} href="./about">
                  About
                </Link>
              </li>
              <li>
                <Link className={style.footerLink} href="./contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.innerMainHelp}>
            <h4 className={style.footerHead}>Help</h4>
            <ul className={style.innerMainUl}>
              <li>
                <Link className={style.footerLink} href="./home">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link className={style.footerLink} href="./shop">
                  Returns
                </Link>
              </li>
              <li>
                <Link className={style.footerLink} href="./about">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.innerMainNews}>
            <h4 className={style.footerHead}>Newsletter</h4>
            <div className={style.footerNewsletter}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={style.emailInput}
              />
              <button className={style.subsButton}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className={style.innerLast}>2023 Furniro.All rights reserved</div>
      </div>
    </footer>
  );
}
