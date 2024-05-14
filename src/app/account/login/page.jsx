"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect, useSearchParams } from "next/navigation";

import style from "./login.module.css";

import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import InputComp from "@/src/components/partials/input/inputComp";
import ButtonPrimary from "@/src/components/buttons/buttonPrimary";
import { signIn, signUp } from "@/src/util/user/isAuth";

import loader from "@/src/components/icon/loader.svg";
import { useSelector } from "react-redux";
import { useRouter } from "nextjs-progressloader";

export default function UserLogin({ searchParams }) {
  const { user: isUser } = useSelector((state) => state.user);
  const isUserLoggedIn = Boolean(isUser);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [userNameVal, setUserName] = useState({ value: "", isValid: false });
  const [emailVal, setEmail] = useState({ value: "", isValid: false });
  const [passwordVal, setPassword] = useState({ value: "", isValid: false });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const params = useSearchParams();
  const router = useRouter();

  const val1 = params.get("mode") === "login";
  const val2 = params.get("mode") === "signup";
  if (val1 || val2) {
  } else {
    notFound();
  }

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

  useEffect(() => {
    setHasError(null);
    setIsLoading(false);
  }, [isLogin]);

  useEffect(() => {
    if (isUserLoggedIn) redirect("/account");
  }, []);

  useEffect(() => {
    if (isUser) {
      router.push("home");
    }
  }, [isUser]);

  const formIsValid = isLogin
    ? emailVal.isValid && passwordVal.isValid
    : userNameVal.isValid && emailVal.isValid && passwordVal.isValid;

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    try {
      setIsLoading(true);
      if (isLogin) {
        await signIn({
          email: emailVal.value,
          password: passwordVal.value,
        });
        router.push("home");
      } else {
        await signUp({
          email: emailVal.value,
          password: passwordVal.value,
          username: userNameVal.value,
        });
        router.push("home");
      }
    } catch (error) {
      const errorMessage =
        error.code?.slice(5).charAt(0).toUpperCase() +
        error.code?.slice(6).replaceAll("-", " ");
      setHasError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader heading={`${isLogin ? "Log In" : "Sign Up"}`} />
      <main className={style.loginMain}>
        <section className={style.mainSection}>
          <div
            style={{
              maxWidth: "400px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "2rem",
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
            {hasError && (
              <div>
                <p
                  style={{
                    color: "red",
                    fontSize: "1.8rem",
                    fontWeight: "500",
                  }}
                >
                  {hasError}!
                </p>
              </div>
            )}
            <form
              onSubmit={submitFormHandler}
              style={{
                width: "100%",
                rowGap: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {!isLogin && (
                <InputComp
                  inputStyle={{ paddingLeft: "2rem", fontSize: "1.8rem" }}
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
                inputStyle={{ paddingLeft: "2rem", fontSize: "1.8rem" }}
                id="emailAddress"
                placeholderText="abc@def.com"
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
                inputStyle={{
                  paddingRight: "5rem",
                  paddingLeft: "2rem",
                  fontSize: "1.8rem",
                }}
                checkValidity={(val) => {
                  return val.trim() !== "" && /^[a-zA-Z]{6,12}$/g.test(val);
                }}
                getVal={getPasswordVal}
                isLogin={isLogin}
                invalidText="Password should be atleast 12 character!"
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

              {isLoading && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    position: "absolute",
                  }}
                >
                  <Image
                    src={loader}
                    style={{ width: "12rem", height: "12rem" }}
                    alt="image"
                  />
                </div>
              )}
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
