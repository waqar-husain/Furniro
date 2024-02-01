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
import NavContainer from "./navContainer";

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
      <NavContainer>
        <Link href="/">
          <Image src={Logo} width="185" height="41" alt="Logo" priority />
        </Link>
        <div className={style.linkContainer}>
          {navLinks.map((el) => (
            <NavLink key={el.href} link={el} />
          ))}
        </div>
        <div className={style.uiContainer}>
          <abbr title="Account" style={{ height: "25px" }}>
            <Link //isUserLoggedIn
              href={tempUserLoggedIn ? "/account" : "/account/login?mode=login"}
            >
              <Image src={user} height="25" width="25" alt="User" />
            </Link>
          </abbr>
          <abbr title="Search">
            <SearchBar />
          </abbr>
          <abbr title="Wishlist">
            <Link href="/wishlist">
              <Wishlist />
            </Link>
          </abbr>
          <abbr title="Cart" style={{ height: "25px", marginTop: "-0.3rem" }}>
            <Link href="/cart">
              <CartIcon fill="none" nav="true" />
            </Link>
          </abbr>
        </div>
      </NavContainer>
    </nav>
  );
}
