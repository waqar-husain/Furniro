"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

import style from "./account.module.css";

import SelectCountry from "@/src/components/partials/selectInput/selectCountry";
import { signOutFunc } from "@/src/util/user/isAuth";

import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import ButtonPrimary from "@/src/components/buttons/buttonPrimary";
import InputComp from "@/src/components/partials/input/inputComp";

import userIco from "@/src/components/icon/user2.svg";
import CartIcon from "@/src/components/icon/Cart.jsx";
import Heart from "@/src/components/icon/Heart.jsx";
import signOutIco from "@/src/components/icon/logout.svg";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/src/config/firebase";

import { State } from "country-state-city";

export default function Account() {
  const isUser = useSelector((state) => state.user.user);
  if (!isUser) redirect("/account/login?mode=login");

  const [userDetail, setUserDetail] = useState({
    firstVal: { value: "", isValid: false },
    lastVal: { value: "", isValid: true },
    companyVal: {
      value: "",
      isValid: true,
    },
    streetVal: { value: "", isValid: false },
    townVal: { value: "", isValid: false },
    zipVal: { value: "", isValid: false },
    phoneVal: { value: "", isValid: false },
    emailVal: { value: "", isValid: false },
    countryVal: { value: "", provinceAvailable: true },
    province: null,
  });

  const [disable, setDisable] = useState(true);

  const disbaleInputHandler = () => {
    setDisable(false);
  };

  let formIsValid =
    userDetail.firstVal.isValid &&
    userDetail.lastVal.isValid &&
    userDetail.companyVal.isValid &&
    userDetail.streetVal.isValid &&
    userDetail.townVal.isValid &&
    userDetail.zipVal.isValid &&
    userDetail.phoneVal.isValid &&
    userDetail.emailVal.isValid;

  const getFirstNameVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        firstVal: val,
      };
    });
  };

  const getLastNameVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        lastVal: val,
      };
    });
  };
  const getCompanyNameVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        companyVal: val,
      };
    });
  };
  const getStreetVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        streetVal: val,
      };
    });
  };
  const getTownVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        townVal: val,
      };
    });
  };
  const getZipVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        zipVal: val,
      };
    });
  };
  const getPhoneVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        phoneVal: val,
      };
    });
  };
  const getEmailVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        emailVal: val,
      };
    });
  };

  const getCountryVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        countryVal: val,
      };
    });
  };
  const getProvinceVal = (val) => {
    setUserDetail((prev) => {
      return {
        ...prev,
        province: val,
      };
    });
  };

  useEffect(() => {
    const userDetails = async () => {
      if (isUser) {
        const userRef = doc(
          db,
          "users",
          isUser.localId,
          "userDetails",
          `user-${isUser.localId}`
        );
        const userRes = await getDoc(userRef);
        const userDetail = await userRes.data()?.userDetails;

        setUserDetail({
          firstVal: { value: userDetail.firstName, isValid: false },
          lastVal: { value: userDetail.lastName, isValid: true },
          companyVal: { value: userDetail.companyName, isValid: true },
          streetVal: { value: userDetail.streetAddress, isValid: false },
          townVal: { value: userDetail.city, isValid: false },
          zipVal: { value: userDetail.zipCode, isValid: false },
          phoneVal: { value: userDetail.phone, isValid: false },
          emailVal: { value: userDetail.emailAddress, isValid: false },
          countryVal: {
            value: userDetail.country,
            provinceAvailable:
              State.getStatesOfCountry(userDetail.country).length !== 0,
          },
          province: userDetail.province,
        });
      }
    };
    userDetails();
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    setDisable(true);

    const userRef = doc(
      db,
      "users",
      isUser.localId,
      "userDetails",
      `user-${isUser.localId}`
    );
    await updateDoc(userRef, {
      userDetails: {
        city: userDetail.townVal.value,
        companyName: userDetail.companyVal.value,
        country: userDetail.countryVal.value,
        emailAddress: userDetail.emailVal.value,
        firstName: userDetail.firstVal.value,
        lastName: userDetail.lastVal.value,
        phone: userDetail.phoneVal.value,
        province: userDetail.province,
        streetAddress: userDetail.streetVal.value,
        zipCode: userDetail.zipVal.value,
      },
    });
  };

  const cartButtonText = (
    <span style={{ display: "flex", alignItems: "center" }}>
      <div className={style.btnIcon}>
        <CartIcon />
      </div>
      <span style={{ marginLeft: "1rem" }}>My Cart</span>
    </span>
  );

  const wishlistButtonText = (
    <span style={{ display: "flex", alignItems: "center", color: "white" }}>
      <div className={style.btnIcon}>
        <Heart fill="none" type="big" />
      </div>
      <span style={{ marginLeft: "1rem" }}>My Wishlist</span>
    </span>
  );

  const signOutButtonText = (
    <span style={{ display: "flex", alignItems: "center" }}>
      <div className={style.btnIcon}>
        <Image
          src={signOutIco}
          alt="sign out icon"
          style={{ width: "2.4rem", height: "2.4rem" }}
        />
      </div>
      <span style={{ marginLeft: "1rem" }}>Sign Out</span>
    </span>
  );

  return (
    <>
      <PageHeader heading="Account" />
      <main>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "12rem 0rem 12rem 0rem",
              maxWidth: "800px",
              padding: "0px 2rem  ",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div
                style={{
                  marginLeft: "1.4rem",
                  fontSize: "2.4rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={userIco}
                  alt="user icon 2"
                  style={{ width: "3.2rem", height: "3.2rem" }}
                />
                <p style={{ marginLeft: "1rem" }}>Account</p>
              </div>
              <form
                onSubmit={formSubmitHandler}
                style={{
                  marginTop: "1.4rem",
                  border: "1px solid #dfdfdf",
                  borderRadius: "2rem",
                }}
              >
                <div className={style.formLayout}>
                  <div
                    style={{
                      display: "flex",
                      gridColumn: "span 2",
                      columnGap: "3rem",
                    }}
                  >
                    <InputComp
                      defaultVal={userDetail.firstVal.value}
                      id="yourName"
                      label="First Name"
                      isRequired={true}
                      checkValidity={(val) => {
                        return val !== "" && /([a-z])\w+/gi.test(val);
                      }}
                      getVal={getFirstNameVal}
                      disabled={disable}
                    />
                    <InputComp
                      defaultVal={userDetail.lastVal.value}
                      id="lastName"
                      label="Last Name"
                      getVal={getLastNameVal}
                      disabled={disable}
                    />
                  </div>
                  <InputComp
                    defaultVal={userDetail.emailVal.value}
                    id="EmailAddress"
                    label="Email address"
                    isRequired={true}
                    type="email"
                    checkValidity={(val) => {
                      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
                    }}
                    invalidText="Provide a valid email address!"
                    getVal={getEmailVal}
                    disabled={disable}
                  />
                  <InputComp
                    defaultVal={userDetail.phoneVal.value}
                    id="Phone"
                    label="Phone"
                    isRequired={true}
                    checkValidity={(val) => {
                      return val.trim() !== "" && /([0-9])\w+/g.test(val);
                    }}
                    getVal={getPhoneVal}
                    disabled={disable}
                  />
                  <InputComp
                    defaultVal={userDetail.companyVal.value}
                    id="companyName"
                    label="Company Name(Optional)"
                    getVal={getCompanyNameVal}
                    disabled={disable}
                  />

                  <div
                    style={{
                      gridRow: `${
                        userDetail.countryVal.provinceAvailable ||
                        userDetail.countryVal.value === ""
                          ? "span 2"
                          : ""
                      }`,
                    }}
                  >
                    <SelectCountry
                      defaultCountry={userDetail.countryVal.value}
                      defaultProvince={userDetail.province}
                      getCountry={getCountryVal}
                      getProvince={getProvinceVal}
                      disabled={disable}
                    />
                  </div>
                  <InputComp
                    defaultVal={userDetail.streetVal.value}
                    id="street"
                    label="Street address"
                    isRequired={true}
                    checkValidity={(val) => {
                      return val.trim() !== "";
                    }}
                    getVal={getStreetVal}
                    disabled={disable}
                  />
                  <InputComp
                    defaultVal={userDetail.townVal.value}
                    label="Town / City"
                    id="town"
                    isRequired={true}
                    checkValidity={(val) => {
                      return val.trim() !== "";
                    }}
                    getVal={getTownVal}
                    disabled={disable}
                  />
                  <InputComp
                    defaultVal={userDetail.zipVal.value}
                    id="zipCode"
                    label="ZIP Code"
                    isRequired={true}
                    checkValidity={(val) => {
                      return val.trim() !== "" && /([0-9])\w+/g.test(val);
                    }}
                    getVal={getZipVal}
                    disabled={disable}
                  />
                  <div
                    style={{
                      display: "inline-flex",
                      alignSelf: "end",
                      justifySelf: "end",
                      gridColumn: "2",
                      gap: "2rem",
                    }}
                  >
                    <ButtonPrimary
                      typeOf="button"
                      disabled={!disable}
                      title="Edit Account"
                      func={disbaleInputHandler}
                      styleData={{
                        padding: "1.5rem 2.5rem",
                        opacity: `${!disable ? "0.2" : "1"}`,
                        cursor: `${!disable ? "not-allowed" : ""}`,
                        transition: "opacity 0.1s",
                        fontSize: "1.4rem",
                        fontWeight: "500",
                      }}
                      style="primary"
                    />

                    <ButtonPrimary
                      typeOf={formIsValid ? "submit" : "button"}
                      disabled={disable}
                      title="Save Changes"
                      style="primary"
                      styleData={{
                        fontSize: "1.4rem",
                        padding: "1.5rem 2.5rem",
                        opacity: `${disable ? "0.2" : "1"}`,
                        cursor: `${disable ? "not-allowed" : ""}`,
                        transition: "opacity 0.1s",
                        fontWeight: "500",
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5rem",
              }}
            >
              <ButtonPrimary
                title={wishlistButtonText}
                style="primary"
                url="wishlist"
                styleData={{
                  padding: "1.5rem 4rem",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              />
              <ButtonPrimary
                title={cartButtonText}
                style="primary"
                url="cart"
                styleData={{
                  padding: "1.5rem 4rem",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              />
              <ButtonPrimary
                title={signOutButtonText}
                url="home"
                func={signOutFunc}
                styleData={{
                  padding: "1.5rem 4rem",
                  backgroundColor: "#fff",
                  border: "2px solid #F93D5C",
                  color: "#F93D5C",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
