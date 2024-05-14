"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import style from "./sideNav.module.css";

import Menu from "../icon/Menu";
import Modalbg from "../partials/modal/ModalBg";
import Link from "next/link";
import Logo from "../icon/Logo";
import { useSelector } from "react-redux";
import Image from "next/image";
import user from "../icon/user2.svg";

import homeIco from "../icon/home.svg";
import shopIco from "../icon/store.svg";
import aboutIco from "../icon/about.svg";
import contactIco from "../icon/phone1.svg";

import userSvg from "../icon/userSvg.svg";
import cartSvg from "../icon/cartSvg.svg";
import heartSvg from "../icon/heartSvg.svg";

const SideNavbar = (props) => {
  const { user: isUser } = useSelector((state) => state.user);
  const navLinks = [
    { name: "Home", href: "/", icon: homeIco, id: "a1" },
    { name: "Shop", href: "/shop", icon: shopIco, id: "b2" },
    { name: "About", href: "/about-us", icon: aboutIco, id: "c3" },
    { name: "Contact", href: "/contact", icon: contactIco, id: "d4" },
  ];

  const userNavLinks = [
    { name: "My Account", href: "/account", icon: userSvg },
    { name: "My Wishlist", href: "/wishlist", icon: heartSvg },
    { name: "My Cart", href: "/cart", icon: cartSvg },
  ];

  return (
    <>
      <Modalbg closeModal={props.closeSidenav} />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={style.sideNav}
      >
        <div
          style={{
            backgroundColor: "#FFF3E3",
            minHeight: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 3.6rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Image
                src={user}
                style={{ width: "3.4rem", height: "auto" }}
                alt="logo"
                width="auto"
                height="auto"
              />
              {isUser ? (
                <Link
                  onClick={() => props.closeSidenav()}
                  href="/account"
                  s
                  style={{
                    fontSize: "2.5rem",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Welcome,{" "}
                  {isUser.displayName.slice(0, 1).toUpperCase() +
                    isUser.displayName.slice(1)}
                </Link>
              ) : (
                <Link
                  onClick={() => props.closeSidenav()}
                  href="/account/login?mode=login"
                  style={{
                    fontSize: "2.5rem",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Login / Signin
                </Link>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.linkCont}>
            {navLinks.map((el) => {
              return (
                <Link
                  key={el.id}
                  onClick={() => props.closeSidenav()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "2.2rem",
                    textDecoration: "none",
                    color: "var(--color-grey1)",
                    padding: "1.6rem",
                  }}
                  href={el.href}
                >
                  <Image
                    src={el.icon}
                    style={{ width: "3.2rem", height: "auto" }}
                    alt={el.icon}
                  />
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className={style.linkCont}>
            {userNavLinks.map((el) => {
              return (
                <Link
                  key={el.name}
                  onClick={() => props.closeSidenav()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "2.2rem",
                    textDecoration: "none",
                    color: "var(--color-grey1)",
                    padding: "1.6rem",
                  }}
                  href={el.href}
                >
                  <Image
                    src={el.icon}
                    style={{ width: "3.2rem", height: "auto" }}
                    alt={el.icon}
                  />
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className={style.linkCont} style={{ border: "none" }}>
            <Link
              onClick={() => props.closeSidenav()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "2.2rem",
                textDecoration: "none",
                color: "var(--color-grey1)",
                padding: "1.6rem",
              }}
              href="/"
            >
              Help Center
            </Link>
            <Link
              onClick={() => props.closeSidenav()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "2.2rem",
                textDecoration: "none",
                color: "var(--color-grey1)",
                padding: "1.6rem",
              }}
              href="/"
            >
              Legal
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default function SideNav() {
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenuHandler = (e) => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.querySelector("body").classList.add("bodyScrollNone");
    } else {
      document.querySelector("body").classList.remove("bodyScrollNone");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 540) {
        setOpenMenu(false);
      }
    });
  }, [openMenu]);

  return (
    <>
      <div onClick={() => setOpenMenu(true)}>
        <Menu />
      </div>

      {openMenu &&
        createPortal(
          <SideNavbar closeSidenav={closeMenuHandler} />,
          document.getElementById("sidenav")
        )}
    </>
  );
}
