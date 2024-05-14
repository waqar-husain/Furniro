import React from "react";
import style from "./pageHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/src/components/icon/Logo1.jsx";
import ChevronRight from "../../icon/ChevronRight";

export default function PageHeader(props) {
  return (
    <header className={style.bgHeader}>
      <div className={style.innerContainer}>
        <div className={style.headerMain}>
          <Logo />
          <h1 className={style.heading}>{props.heading}</h1>
          <p className={style.pages}>
            <Link className={style.headerLink} href="/">
              Home
            </Link>
            <ChevronRight size={"2rem"} />
            <Link href={`./${props.to}`} className={style.headerLinkTo}>
              {props.heading}
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}
