"use client";
import React, { useState } from "react";
import InputComp from "../components/inputComp";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import InputMessage from "./inputMessage";

export default function ContactForm() {
  const [nameVal, setNameVal] = useState({ value: "", isValid: false });
  const [emailval, setEmailVal] = useState({ value: "", isValid: false });
  const [subjectVal, setSubjectVal] = useState({ value: "", isValid: false });
  const [messageVal, setMessageVal] = useState({ value: "", isValid: false });

  const getNameVal = (val) => {
    setNameVal(val);
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
    nameVal.isValid &&
    emailval.isValid &&
    subjectVal.isValid &&
    messageVal.isValid;

  return (
    <form
      style={{
        fontSize: "1.6rem",
        width: "56%",
        display: "flex",
        flexDirection: "column",
        rowGap: "3.6rem",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!formIsValid) return;

        console.log({
          firstName: nameVal.value,
          email: emailval.value,
          message: messageVal.value,
          subject: subjectVal.value,
        });
      }}
    >
      <InputComp
        id="yourName"
        label="Name"
        isRequired={true}
        checkValidity={(val) => {
          return val.trim() !== "" && /([a-z])\w+/gi.test(val);
        }}
        getVal={getNameVal}
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
      />
      <InputComp id="subject" label="Subject" getVal={getSubjectVal} />

      <InputMessage
        cols="10"
        rows="5"
        styleData={{ height: "14rem", resize: "none", paddingTop: "1rem" }}
        placeholderText="Write your message here!"
        isRequired={true}
        getVal={getMessageVal}
      />

      <ButtonPrimary
        style="primary"
        title="Submit"
        typeOf="submit"
        styleData={{
          padding: "1.37rem 8.9rem 1.37rem 8.9rem",
          fontSize: "1.6rem",
          fontWeight: "400",
          marginTop: "1.2rem",
          borderRadius: "0.5rem",
          cursor: `${!formIsValid ? "not-allowed" : "pointer"}`,
          alignSelf: "start",
        }}
      />
    </form>
  );
}
