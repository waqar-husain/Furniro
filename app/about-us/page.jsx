import React from "react";
import Image from "next/image";

import aboutUsImg from "@/app/public/about.jpg";

import PageHeader from "../components/pageHeader";
import BottomBanner from "../components/bottomBanner";
import ButtonPrimary from "../components/buttons/buttonPrimary";

export default function About() {
  return (
    <>
      <PageHeader logo="true" heading="About Us" />
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
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image src={aboutUsImg} alt="aboutUs image" />
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
                  Know About Our Ecommerce Buisness, History
                </h2>
                <p style={{ color: "var(--color-grey3)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores corporis eligendi tenetur nam voluptas, perferendis
                  repudiandae! Fugit reiciendis, ad aliquid officiis modi,
                  doloribus dolore optio adipisci laboriosam suscipit omnis
                  eligendi.
                </p>
                <ButtonPrimary
                  style="primary"
                  title="Contact Us"
                  styleData={{
                    padding: "1.4rem 3rem 1.4rem 3rem",
                    fontSize: "1.8rem",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                  url="/contact"
                />
              </div>
            </div>
          </div>
        </section>
        <BottomBanner />
      </main>
    </>
  );
}