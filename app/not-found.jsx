import Image from "next/image";
import React from "react";
import notFoundImage from "@/app/public/404Image.png";
import ButtonPrimary from "./components/buttons/buttonPrimary";

export default function NotFound() {
  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingBottom: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={notFoundImage}
            alt="not-found"
            style={{
              width: "79.2rem",
              height: "52rem",
            }}
          />
          <h3
            style={{
              fontSize: "2.6rem",
              color: "var(--color-grey1)",
              marginBottom: "3rem",
            }}
          >
            Oops! The page you requested was not found!
          </h3>
          <ButtonPrimary
            style="primary"
            title="Back to Home"
            styleData={{
              padding: "1.4rem 3rem 1.4rem 3rem",
              fontSize: "1.8rem",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
            url="/"
          />
        </div>
      </main>
    </>
  );
}
