"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../icon/Frame 168.svg";
import Link from "next/link";
import style from "./navbar.module.css";
import SearchBar from "./searchBar";
import userNot from "../icon/userNotLogin.svg";
import Wishlist from "../icon/wishlist";
import CartIcon from "../icon/cart";
import NavLink from "../navLink";
import NavContainer from "./navContainer";
import { useSelector } from "react-redux";
import user from "../icon/user.svg";
import loader2 from "../icon/loader2.svg";

export default function Navbar() {
  const { length: cartLength } = useSelector((state) => state.cart.cartList);

  const { user: isUser } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUser === null) return;

    setIsLoading(false);
  }, [isUser]);

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
            {!isLoading ? (
              <Link //isUserLoggedIn
                href={isUser ? "/account" : "/account/login?mode=login"}
              >
                {
                  <Image
                    src={isUser ? user : userNot}
                    height="25"
                    width="29"
                    alt="User"
                  />
                }
              </Link>
            ) : (
              <Image src={loader2} alt="loader" />
            )}
          </abbr>
          <abbr title="Search">
            <SearchBar />
          </abbr>
          <abbr title="Wishlist">
            <Link href="/wishlist">
              <Wishlist />
            </Link>
          </abbr>
          <abbr
            title="Cart"
            style={{ height: "25px", marginTop: "-0.3rem" }}
            className={`${cartLength === 0 ? "" : style.cartIco}`}
            data-item={cartLength}
          >
            <Link href="/cart">
              <CartIcon fill="none" nav="true" />
            </Link>
          </abbr>
        </div>
      </NavContainer>
    </nav>
  );
}
