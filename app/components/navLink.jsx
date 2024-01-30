"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ link }) {
  const activeRoute = usePathname();
  return (
    <Link
      style={{
        textDecoration: `${activeRoute === link.href ? "underline" : "none"}`,
        color: `${
          activeRoute === link.href ? "var(--color-primary)" : "black"
        }`,
        fontWeight: "500",
      }}
      href={link.href}
    >
      {link.name}
    </Link>
  );
}
