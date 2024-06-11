import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import aboutUsImg from "@/public/about 2.png";

import PageHeader from "../../components/partials/pageHeader/pageHeader";
import BottomBanner from "../../components/partials/bottomBanner/bottomBanner";

export default function About() {
  return (
    <>
      <Suspense>
        <PageHeader heading="About Us" />
        <main>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "12rem",
                maxWidth: "1058px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0px 2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    maxWidth: "57rem",
                    width: "100%",
                    maxHeight: "40.9rem",
                  }}
                >
                  <Image
                    src={aboutUsImg}
                    alt="aboutUs image"
                    style={{
                      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.3))",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "5rem",
                    rowGap: "3rem",
                  }}
                >
                  <h2
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "3.6rem",
                      fontWeight: "600",
                      lineHeight: "1.6",
                    }}
                  >
                    Know About Our Ecommerce Buisness
                  </h2>
                  <p style={{ color: "var(--color-grey3)" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores corporis eligendi tenetur nam voluptas, perferendis
                    repudiandae! Fugit reiciendis, ad aliquid officiis modi,
                    doloribus dolore optio adipisci laboriosam suscipit omnis
                    eligendi.
                  </p>
                  <Link
                    className="buttonPrimary"
                    style={{
                      padding: "1.4rem 3rem 1.4rem 3rem",
                      fontSize: "1.8rem",
                      fontWeight: "400",
                      lineHeight: "1.6",
                      display: "inline-block",
                    }}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <BottomBanner />
        </main>
      </Suspense>
    </>
  );
}
