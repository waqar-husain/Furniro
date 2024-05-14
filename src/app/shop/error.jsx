"use client";
import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import Image from "next/image";
import React from "react";
import errorImg from "@/public/error.jpg";

export default function Error({ error }) {
  return (
    <div>
      <PageHeader heading="Shop" to="shop" logo="true" />
      <main
        style={{ display: "flex", justifyContent: "center", padding: "5rem" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "var(--color-grey1)",
          }}
        >
          <h1> {error.message}</h1>
          <div style={{ width: "40rem", height: "40rem", marginTop: "1rem" }}>
            <Image
              src={errorImg}
              alt="error"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
