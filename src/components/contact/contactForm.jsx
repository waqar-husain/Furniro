"use client";
import React, { useState } from "react";

import style from "@/src/app/contact/contact.module.css";

import InputComp from "../partials/input/inputComp";
import ButtonPrimary from "../buttons/buttonPrimary";
import InputMessage from "../partials/input/inputMessage";

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
      className={style.contactForm}
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
      }}
    >
      <InputComp
        inputStyle={{ fontSize: "1.8rem", paddingLeft: "2rem" }}
        id="yourName"
        placeholderText="Abc"
        label="Name"
        isRequired={true}
        checkValidity={(val) => {
          return val.trim() !== "" && /([a-z])\w+/gi.test(val);
        }}
        getVal={getNameVal}
      />
      <InputComp //
        inputStyle={{ fontSize: "1.8rem", paddingLeft: "2rem" }}
        id="EmailAddress"
        placeholderText="Abc@def.com"
        label="Email address"
        isRequired={true}
        type="email"
        checkValidity={(val) => {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
        }}
        invalidText="Provide a valid email address!"
        getVal={getEmailVal}
      />
      <InputComp
        inputStyle={{ fontSize: "1.8rem", paddingLeft: "2rem" }}
        id="subject"
        placeholderText="This is optional"
        label="Subject"
        getVal={getSubjectVal}
      />

      <InputMessage
        cols="10"
        rows="5"
        styleData={{
          height: "14rem",
          resize: "none",
          paddingTop: "1rem",
          fontFaily: "inherit",
        }}
        placeholderText="Hi! i'd like to ask about"
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
