import React from "react";
import Image from "next/image";
import Logo from "./icon/Frame 168.svg";
import Link from "next/link";
import style from "./navbar.module.css";
import SearchBar from "./searchBar";
import user from "./icon/userNotLogin.svg";
import Wishlist from "./wishlist";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <div>
          <Image src={Logo} width="185" height="41" alt="Logo" priority />
        </div>
        <div className={style.linkContainer}>
          <Link href="/" className={style.navLink}>
            Home
          </Link>
          <Link href="/shop" className={style.navLink}>
            Shop
          </Link>
          <Link href="/about" className={style.navLink}>
            About
          </Link>

          <Link href="/contact" className={style.navLink}>
            Contact
          </Link>
        </div>
        <div className={style.uiContainer}>
          <Link href="/account" style={{ height: "25px" }}>
            <Image src={user} height="25" width="25" alt="User" />
          </Link>
          <SearchBar />
          <Wishlist />
          <Link href="/cart" style={{ height: "25px" }}>
            <cart />
          </Link>
        </div>
      </div>
    </nav>
  );
}
