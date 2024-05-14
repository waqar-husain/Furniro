import React from "react";

import style from "./contact.module.css";

import loc from "@/src/components/icon/loc.svg";
import phone from "@/src/components/icon/phone.svg";
import clock from "@/src/components/icon/clock.svg";

import PageHeader from "../../components/partials/pageHeader/pageHeader";
import BottomBanner from "../../components/partials/bottomBanner/bottomBanner";
import Image from "next/image";
import ContactForm from "../../components/contact/contactForm";

export default function Contact() {
  return (
    <>
      <PageHeader heading="Contact" to="contact" />
      <main>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "9.8rem",
              maxWidth: "1058px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "3.6rem",
                  fontWeight: "600",
                  lineHeight: "1.6",
                }}
              >
                Get In Touch With Us
              </h1>
              <p
                style={{
                  fontSize: "1.6rem",
                  color: "var(--color-grey5)",
                  marginTop: "1.2rem",
                }}
              >
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us An Email. Our Staff Always Be There To Help You
                Out. Do Not Hesitate!
              </p>
            </div>
            <div
              className={style.contactMain}
              style={{
                padding: "12rem 5.2rem 6rem 5.2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className={style.contactTop}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.6rem",
                  width: "25%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "2rem" }}>
                    <Image
                      src={loc}
                      alt="location"
                      style={{ width: "2.2rem", height: "2.8rem" }}
                    />
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "2.4rem",
                        fontWeight: "600",
                        lineHeight: "1.6",
                      }}
                    >
                      Address
                    </h3>
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "4.2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "2rem" }}>
                    <Image
                      src={phone}
                      alt="phone"
                      style={{ width: "3rem", height: "3rem" }}
                    />
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "2.4rem",
                        fontWeight: "600",
                        lineHeight: "1.6",
                      }}
                    >
                      Phone
                    </h3>
                    <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "4.2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "2rem" }}>
                    <Image
                      src={clock}
                      alt="clock"
                      style={{ width: "2.3rem", height: "2.3rem" }}
                    />
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "2.4rem",
                        fontWeight: "600",
                        lineHeight: "1.6",
                      }}
                    >
                      Working Time
                    </h3>
                    <p>
                      Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <BottomBanner />
    </>
  );
}
