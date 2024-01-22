"use client";
import React, { useState } from "react";
import InputComp from "../components/inputComp";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import ButtonSecondary from "./buttons/buttonSecondary";

export default function ContactForm() {
  const [firstVal, setfirstVal] = useState({ value: "", isValid: false });
  const [emailval, setEmailVal] = useState({ value: "", isValid: false });
  const [subjectVal, setSubjectVal] = useState({ value: "", isValid: false });
  const [messageVal, setMessageVal] = useState({ value: "", isValid: false });

  const getfirstNameVal = (val) => {
    setfirstVal(val);
  };
  const getEmailVal = (val) => {
    setEmailVal(val);
  };
  const getSubjectVal = (val) => {
    setSubjectVal(val);
  };
  const getMessageVal = (val) => {
    setMessageVal(val);
  };

  let formIsValid =
    firstVal.isValid &&
    emailval.isValid &&
    subjectVal.isValid &&
    messageVal.isValid;

  return (
    <form
      style={{ fontSize: "1.6rem", width: "56%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!formIsValid) return;

        console.log({
          firstName: firstVal.value,
          email: emailval.value,
          message: messageVal.value,
          subject: subjectVal.value,
        });
      }}
    >
      <InputComp
        id="firstName"
        label="First Name"
        isRequired={true}
        checkValidity={(val) => {
          return val.trim() !== "" && /([a-z])\w+/gi.test(val);
        }}
        getVal={getfirstNameVal}
      />
      <InputComp //
        id="EmailAddress"
        label="Email address"
        isRequired={true}
        type="email"
        checkValidity={(val) => {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
        }}
        getVal={getEmailVal}
        styleData={{ marginTop: "3.6rem" }}
      />
      <InputComp
        id="subject"
        label="Subject"
        getVal={getSubjectVal}
        styleData={{ marginTop: "3.6rem" }}
      />
      <InputComp
        id="message"
        label="Message"
        getVal={getMessageVal}
        isRequired={true}
        styleData={{ marginTop: "3.6rem" }}
      />

      <ButtonPrimary
        style="primary"
        title="Submit"
        typeOf="submit"
        styleData={{
          padding: "1.37rem 8.9rem 1.37rem 8.9rem",
          fontSize: "1.6rem",
          fontWeight: "400",
          marginTop: "4.9rem",
          borderRadius: "0.5rem",
          cursor: `${!formIsValid ? "not-allowed" : "pointer"}`,
        }}
      />
    </form>
  );
}
