import React from "react";
import Image from "next/image";
import Logo from "../icon/Frame 168.svg";
import Link from "next/link";
import style from "./navbar.module.css";
import SearchBar from "./searchBar";
import user from "../icon/userNotLogin.svg";
import Wishlist from "../icon/wishlist";
import CartIcon from "../icon/cart";
import NavLink from "../navLink";

export default function Navbar() {
  const tempUserLoggedIn = false;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <Link href="/">
          <Image src={Logo} width="185" height="41" alt="Logo" priority />
        </Link>
        <div className={style.linkContainer}>
          {navLinks.map((el) => (
            <NavLink key={el.href} link={el} />
          ))}
        </div>
        <div className={style.uiContainer}>
          <Link //isUserLoggedIn
            href={tempUserLoggedIn ? "/account" : "/account/login?mode=login"}
            style={{ height: "25px" }}
          >
            <Image src={user} height="25" width="25" alt="User" />
          </Link>
          <SearchBar />
          <Link href="/wishlist">
            <Wishlist />
          </Link>
          <Link href="/cart" style={{ height: "25px", marginTop: "-0.3rem" }}>
            <CartIcon fill="none" nav="true" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
