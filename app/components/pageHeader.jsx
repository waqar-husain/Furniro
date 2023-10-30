import React from "react";
import style from "./pageHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./icon/logo1.svg";
import rightArr from "./icon/arrow-right.svg";

export default function PageHeader(props) {
  return (
    <header className={style.bgHeader}>
      <div className={style.innerContainer}>
        <div className={style.headerMain}>
          {props.logo && <Image src={logo} alt="Logo" />}
          <h1 className={style.heading}>{props.heading}</h1>
          <p className={style.pages}>
            <Link className={style.headerLink} href="./">
              Home
            </Link>
            <Image src={rightArr} alt="RightArr" />
            <Link href={`./${props.to}`} className={style.headerLinkTo}>
              {props.heading}
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}
