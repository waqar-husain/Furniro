"use client";
import React, { useEffect, useState } from "react";

import style from "./login.module.css";

import PageHeader from "@/src/components/pageHeader";
import InputComp from "@/src/components/inputComp";
import ButtonPrimary from "@/src/components/buttons/buttonPrimary";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function UserLogin() {
  const [userNameVal, setUserName] = useState({ value: "", isValid: false });
  const [emailVal, setEmail] = useState({ value: "", isValid: false });
  const [passwordVal, setPassword] = useState({ value: "", isValid: false });

  const params = useSearchParams();
  const isLogin = params.get("mode") === "login";

  const getEmailVal = (value) => {
    setEmail(value);
  };
  const getUsernameVal = (value) => {
    setUserName(value);
  };
  const getPasswordVal = (value) => {
    setPassword(value);
  };

  const formIsValid = isLogin
    ? emailVal.isValid && passwordVal.isValid
    : userNameVal.isValid && emailVal.isValid && passwordVal.isValid;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    if (isLogin) {
      console.log(emailVal.value, passwordVal.value);
    } else {
      console.log(userNameVal.value, emailVal.value, passwordVal.value);
    }
  };

  return (
    <>
      <PageHeader heading={`${isLogin ? "Log In" : "Sign Up"}`} logo="true" />
      <main className={style.loginMain}>
        <section className={style.mainSection}>
          <div
            style={{
              maxWidth: "453px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "3.6rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "3.6rem",
                  fontWeight: "600",
                  lineHeight: "1.6",
                }}
              >
                {isLogin ? "Log In" : "Sign Up"}
              </h1>
              <p style={{ color: "var(--color-grey3)" }}>
                {`Please ${
                  isLogin ? "login" : "signup"
                } using account details below.`}
              </p>
            </div>
            <form
              onSubmit={submitFormHandler}
              style={{
                width: "100%",
                rowGap: "2.4rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {!isLogin && (
                <InputComp
                  id="username"
                  label="Username"
                  isRequired={true}
                  checkValidity={(val) => {
                    return val.trim() !== "" && /([a-z])\w+/gi.test(val);
                  }}
                  getVal={getUsernameVal}
                  isLogin={isLogin}
                />
              )}
              <InputComp
                id="emailAddress"
                label="Email"
                isRequired={true}
                type="email"
                checkValidity={(val) => {
                  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
                }}
                getVal={getEmailVal}
                isLogin={isLogin}
                invalidText="Provide a valid email address!"
              />
              <InputComp
                id="password"
                label="Password"
                type="password"
                isRequired={true}
                checkValidity={(val) => {
                  return val.trim() !== "" && /^.{15,}/gm.test(val);
                }}
                getVal={getPasswordVal}
                isLogin={isLogin}
                invalidText="Password must have 8 character!"
              />
              {isLogin && (
                <Link
                  style={{
                    color: "var(--color-grey3)",
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  Forget your password?
                </Link>
              )}

              <ButtonPrimary
                styleData={{
                  padding: "1.4rem 3rem 1.4rem 3rem",
                  fontSize: "1.8rem",
                  fontWeight: "600",
                  borderRadius: "0.5rem",
                  marginTop: `${!isLogin ? "1.5rem" : "0rem"}`,
                  cursor: `${formIsValid ? "pointer" : "not-allowed"}`,
                }}
                title={`${isLogin ? "Sign In" : "Sign Up"}`}
                typeOf="submit"
                style="primary"
              />
            </form>
            <Link
              href={`/account/login?mode=${isLogin ? "signup" : "login"}`}
              style={{ color: "var(--color-grey3)", textDecoration: "none" }}
            >
              {isLogin
                ? "Dont't have an Account? Create Account"
                : "Already a member? Login"}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
