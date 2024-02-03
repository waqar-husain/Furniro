"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import InputComp from "./inputComp";
import dot from "../components/icon/dot.svg";
import ButtonSecondary from "../components/buttons/buttonSecondary";

import style from "@/src/app/checkout/checkout.module.css";

import { Country, State } from "country-state-city";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function CheckOutForm() {
  const cart = useSelector((state) => state.cart.cartList);
  if (cart.length === 0) redirect("/shop");
  const [countryId, setCountryId] = useState("AF");
  const [province, setProvince] = useState(
    State.getStatesOfCountry(countryId)[0]
  );

  const [firstVal, setFirstVal] = useState({ value: "", isValid: false });
  const [lastVal, setLastVal] = useState({ value: "", isValid: false });
  const [companyVal, setCompanyVal] = useState({
    value: "",
    isValid: false,
  });
  const [streetVal, setStreetVal] = useState({ value: "", isValid: false });
  const [townVal, setTownVal] = useState({ value: "", isValid: false });
  const [zipVal, setZipVal] = useState({ value: "", isValid: false });
  const [phoneVal, setPhoneVal] = useState({ value: "", isValid: false });
  const [emailVal, setEmailVal] = useState({ value: "", isValid: false });

  const [paymentMethod, setPaymentMethod] = useState("");

  const onPaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  useEffect(() => {
    setProvince(State.getStatesOfCountry(countryId)[0]);
  }, [countryId]);

  const getfirstNameVal = (val) => {
    setFirstVal(val);
  };
  const getLastNameVal = (val) => {
    setLastVal(val);
  };
  const getCompanyNameVal = (val) => {
    setCompanyVal(val);
  };
  const getStreetVal = (val) => {
    setStreetVal(val);
  };
  const getTownVal = (val) => {
    setTownVal(val);
  };
  const getZipVal = (val) => {
    setZipVal(val);
  };
  const getPhoneVal = (val) => {
    setPhoneVal(val);
  };
  const getEmailVal = (val) => {
    setEmailVal(val);
  };

  let formIsValid =
    firstVal.isValid &&
    lastVal.isValid &&
    companyVal.isValid &&
    streetVal.isValid &&
    townVal.isValid &&
    zipVal.isValid &&
    phoneVal.isValid &&
    emailVal.isValid &&
    paymentMethod !== "";

  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!formIsValid) return;

        console.log({
          firstName: firstVal.value,
          lastName: lastVal.value,
          companyName: companyVal.value,
          countryCode: countryId,
          province,
          street: streetVal.value,
          town: townVal.value,
          zipCode: zipVal.value,
          phoneNo: phoneVal.value,
          email: emailVal.value,
        });
      }}
    >
      <div className={style.billingDetailsSec}>
        <div
          style={{
            maxWidth: "453px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "3.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "3.6rem",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            Billing Details
          </h2>
          {/* ////////////////// */}
          {/* <FormInput /> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 211px)",
              columnGap: "3rem",
              rowGap: "3rem",
            }}
          >
            <InputComp //
              id="firstName"
              label="First Name"
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "" && /([a-z])\w+/gi.test(val);
              }}
              getVal={getfirstNameVal}
            />
            <InputComp
              id="lastName"
              label="Last Name"
              getVal={getLastNameVal}
            />
            {/*      // */}
            <InputComp //
              id="companyName"
              label="Company Name(Optional)"
              styleData={{ gridColumn: "span 2" }}
              getVal={getCompanyNameVal}
            />
            <div
              style={{
                gridColumn: "span 2",
              }}
            >
              <label
                htmlFor="region"
                style={{
                  fontWeight: "500",
                }}
              >
                Country / Region
              </label>
              <select // SELECT
                autoComplete="on"
                name="country"
                id="region"
                style={{
                  marginTop: "2rem",
                  borderRadius: " 1rem",
                  paddingLeft: "1rem",
                  fontSize: " 2rem",
                  height: "7rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onChange={(e) => {
                  setCountryId(e.target.value);
                }}
                required
              >
                {Country.getAllCountries().map((e) => {
                  return (
                    <option key={e.isoCode} value={e.isoCode}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <InputComp //
              id="street"
              label="Street address"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "";
              }}
              getVal={getStreetVal}
            />
            <InputComp //
              label="Town / City"
              id="town"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "";
              }}
              getVal={getTownVal}
            />
            {State.getStatesOfCountry(countryId).length !== 0 && (
              <div
                style={{
                  gridColumn: "span 2",
                }}
              >
                <label
                  htmlFor="province"
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Province
                </label>
                <select // SELECT
                  name="province"
                  id="province"
                  style={{
                    marginTop: "2rem",
                    borderRadius: " 1rem",
                    paddingLeft: "1rem",
                    fontSize: " 2rem",
                    height: "7rem",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  required
                  onChange={(e) => setProvince(e.target.value)}
                >
                  {State.getStatesOfCountry(countryId).map((e) => {
                    return (
                      <option
                        key={e.isoCode}
                        value={e.name}
                        style={{ cursor: "pointer" }}
                      >
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
            <InputComp //
              id="zipCode"
              label="ZIP Code"
              isRequired={true}
              styleData={{ gridColumn: "span 2" }}
              checkValidity={(val) => {
                return val.trim() !== "" && /([0-9])\w+/g.test(val);
              }}
              getVal={getZipVal}
            />
            <InputComp //
              id="Phone"
              label="Phone"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "" && /([0-9])\w+/g.test(val);
              }}
              getVal={getPhoneVal}
            />
            <InputComp //
              id="EmailAddress"
              label="Email address"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              type="email"
              checkValidity={(val) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
              }}
              getVal={getEmailVal}
            />
          </div>
          {/* ////////////////// */}
        </div>
      </div>
      <div className={style.placeOrderSec}>
        {/*Plae order top */}
        <div
          style={{
            display: "flex",
            paddingBottom: "3.3rem",
            flexDirection: "column",
            rowGap: "1.3rem",
          }}
        >
          <div
            className={style.top}
            style={{
              fontSize: "2.4rem",
              color: "#000",
              fontWeight: "500",
            }}
          >
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div className={style.top}>
            <p style={{ color: "var(--color-grey5)" }}>
              Asgaard sofa{" "}
              <span
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                X 1
              </span>
            </p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className={style.top}>
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className={style.top}>
            <p>Total</p>
            <p
              style={{
                fontSize: "2.4rem",
                color: "var(--color-primary)",
                fontWeight: "700",
              }}
            >
              Rs. 250,000.00
            </p>
          </div>
        </div>
        {/*Place order bottom */}
        <div
          style={{
            paddingTop: "2.2rem",
            borderTop: "1px solid #D9D9D9",
          }}
        >
          <div style={{ color: "var(--color-grey5)" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Image alt="dot" src={dot} />
              <span style={{ marginLeft: "1rem" }}>Direct Bank transfer</span>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2.4rem",
              }}
            >
              <label htmlFor="bankTransfer" style={{ cursor: "pointer" }}>
                <input
                  required
                  type="radio"
                  name="payment"
                  id="bankTransfer"
                  style={{ marginRight: "1.5rem" }}
                  onChange={onPaymentMethodChange}
                />
                Direct Bank Transfer
              </label>
              <label
                htmlFor="cashOnDelivery"
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name="payment"
                  id="cashOnDelivery"
                  style={{ marginRight: "1.5rem" }}
                  onChange={onPaymentMethodChange}
                  required
                />
                Cash On Delivery(COD)
              </label>
            </div>
          </div>
          <div
            style={{
              marginTop: "2.4rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "300", marginBottom: "3.5rem" }}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy</b>.
            </p>
            <ButtonSecondary
              title="Place order"
              typeOf="submit"
              styleObj={{
                cursor: `${!formIsValid ? "not-allowed" : "pointer"}`,
                color: "inherit",
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
