"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../icon/Frame 168.svg";
import Link from "next/link";
import style from "./navbar.module.css";
import SearchBar from "./SearchBar";
import UserNot from "../icon/UserNotLogin.jsx";
import Wishlist from "../icon/Wishlist";
import CartIcon from "../icon/Cart";
import NavLink from "./NavLink";
import NavContainer from "./NavContainer";
import { useSelector } from "react-redux";
import User from "../icon/User.jsx";
import Loader2 from "../icon/Loader2.jsx";
import SideNav from "./SideNav";

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
        <div className={style.menuContainer}>
          <div className={style.menu}>
            <SideNav />
          </div>
          <Link href="/">
            <Image
              src={Logo}
              width="auto"
              height="auto"
              style={{
                width: "18.5rem",
                height: "4.1rem",
              }}
              alt="Logo"
              priority
            />
          </Link>
        </div>
        <div className={style.linkContainer}>
          {navLinks.map((el) => (
            <NavLink key={el.href} link={el} />
          ))}
        </div>
        <div className={style.uiContainer}>
          <abbr title="Account" style={{ height: "2.5rem" }}>
            {!isLoading ? (
              // ! this should be above
              <Link //isUserLoggedIn
                href={isUser ? "/account" : "/account/login?mode=login"}
                style={{ color: "black" }}
              >
                {isUser ? <User /> : <UserNot />}
              </Link>
            ) : (
              <Loader2 />
            )}
          </abbr>
          <abbr title="Search">
            <SearchBar />
          </abbr>
          <abbr title="Wishlist" className={style.wishlistBtn}>
            <Link href="/wishlist" style={{ color: "black" }}>
              <Wishlist />
            </Link>
          </abbr>
          <abbr
            title="Cart"
            style={{ height: "2.5rem", marginTop: "-0.3rem" }}
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
