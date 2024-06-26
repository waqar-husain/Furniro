import Image from "next/image";
import React, { Suspense } from "react";
import notFoundImage from "@/public/404image.png";
import ButtonPrimary from "../components/buttons/buttonPrimary";

export default function NotFound() {
  return (
    <>
      <Suspense>
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
              paddingLeft: "3rem",
              paddingRight: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={notFoundImage}
              alt="not-found"
              style={{
                maxWidth: "79.2rem",
                width: "100%",
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
      </Suspense>
    </>
  );
}
