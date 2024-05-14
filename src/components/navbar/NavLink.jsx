"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./navLink.module.css";

export default function NavLink({ link, styleData }) {
  const activeRoute = usePathname();
  return (
    <Link
      style={{
        textDecoration: `${activeRoute === link.href ? "underline" : "none"}`,
        color: `${
          activeRoute === link.href ? "var(--color-primary)" : "black"
        }`,
        ...styleData,
      }}
      href={link.href}
      className={style.link}
    >
      {link.name}
    </Link>
  );
}
