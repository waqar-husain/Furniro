import React from "react";
import PageHeader from "../components/pageHeader";
import BottomBanner from "../components/bottomBanner";

export default function Contact() {
  return (
    <>
      <PageHeader heading="Contact" to="contact" logo="true" />
      <BottomBanner />
    </>
  );
}
