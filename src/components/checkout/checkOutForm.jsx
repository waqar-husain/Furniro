"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import InputComp from "../partials/input/inputComp";
import dot from "@/src/components/icon/dot.svg";
import ButtonSecondary from "../buttons/buttonSecondary";

import style from "@/src/app/checkout/checkout.module.css";

import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import SelectCountry from "../partials/selectInput/selectCountry";
import ButtonPrimary from "../buttons/buttonPrimary";
import { formatNum } from "../../util/numerFormat";
import NavLink from "../navbar/NavLink";
import { cartAction } from "@/src/store/slices/cartSlice";
import { useRouter } from "next/navigation";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/src/config/firebase";

import { State } from "country-state-city";

export default function CheckOutForm() {
  const isUser = useSelector((state) => state.user.user);
  if (!isUser) redirect("/account/login?mode=login");

  const {
    cartList: cart,
    subTotal: cartSubtotal,
    totalPrice: cartTotal,
  } = useSelector((state) => state.cart);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length === 0) redirect("/shop");
  }, []);

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

  const [disable, setDisable] = useState(false);

  const disableInputHandler = () => {
    setDisable(true);
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  const onPaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
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

  const saveUserDetails = async () => {
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

  const placeOrderHandler = (e) => {
    e.preventDefault();
    const orderButtonClicked = e.nativeEvent.submitter.id === "orderButton";

    if (!formIsValid || paymentMethod === "" || !orderButtonClicked) return;
    console.log({ user: userDetail, order: cart });

    dispatch(cartAction.emptyCart());
    router.push("/order-confirmed");
  };

  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={placeOrderHandler}
    >
      <div className={style.billingDetailsSec}>
        <div
          style={{
            maxWidth: "463px",
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
              columnGap: "2rem",
              rowGap: "2rem",
              overflowY: "scroll",

              maxHeight: "490px",
            }}
          >
            <InputComp //
              defaultVal={userDetail.firstVal.value}
              id="firstName"
              label="First Name"
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "" && /([a-z])\w+/gi.test(val);
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
            {/*      // */}
            <InputComp //
              defaultVal={userDetail.companyVal.value}
              id="companyName"
              label="Company Name(Optional)"
              styleData={{ gridColumn: "span 2" }}
              getVal={getCompanyNameVal}
              disabled={disable}
            />
            <div
              style={{
                gridColumn: "span 2",
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
            <InputComp //
              defaultVal={userDetail.streetVal.value}
              id="street"
              label="Street address"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "";
              }}
              getVal={getStreetVal}
              disabled={disable}
            />
            <InputComp //
              defaultVal={userDetail.townVal.value}
              label="Town / City"
              id="town"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "";
              }}
              getVal={getTownVal}
              disabled={disable}
            />

            <InputComp //
              defaultVal={userDetail.zipVal.value}
              id="zipCode"
              label="ZIP Code"
              isRequired={true}
              styleData={{ gridColumn: "span 2" }}
              checkValidity={(val) => {
                return val.trim() !== "" && /([0-9])\w+/g.test(val);
              }}
              getVal={getZipVal}
              disabled={disable}
            />
            <InputComp //
              defaultVal={userDetail.phoneVal.value}
              id="Phone"
              label="Phone"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              checkValidity={(val) => {
                return val.trim() !== "" && /([0-9])\w+/g.test(val);
              }}
              getVal={getPhoneVal}
              disabled={disable}
            />
            <InputComp //
              defaultVal={userDetail.emailVal.value}
              id="EmailAddress"
              label="Email address"
              styleData={{ gridColumn: "span 2" }}
              isRequired={true}
              type="email"
              checkValidity={(val) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val);
              }}
              getVal={getEmailVal}
              disabled={disable}
            />
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <ButtonPrimary
              typeOf="button"
              disabled={!disable}
              title="Edit Details"
              func={() => setDisable(false)}
              styleData={{
                padding: "1rem 2rem",
                opacity: `${!disable ? "0.2" : "1"}`,
                cursor: `${!disable ? "not-allowed" : ""}`,
                transition: "opacity 0.1s",
              }}
              style="primary"
            />

            <ButtonPrimary
              typeOf={formIsValid ? "button" : "submit"}
              disabled={disable}
              title="Save Changes"
              style="primary"
              styleData={{
                padding: "1rem 2rem",
                opacity: `${disable ? "0.2" : "1"}`,
                cursor: `${disable ? "not-allowed" : ""}`,
                transition: "opacity 0.1s",
              }}
              func={saveUserDetails}
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
          {/* //////////////////////////////////////////// */}
          {cart.map((el, i) => (
            <abbr
              title={el.productName}
              style={{ textDecoration: "none" }}
              key={i}
            >
              <div className={style.top} key={el.id}>
                <div style={{ color: "var(--color-grey5)", display: "flex" }}>
                  <p
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      maxWidth: "60%",
                    }}
                  >
                    {el.productName}
                  </p>
                  <span
                    style={{
                      marginLeft: "1rem",
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    X {el.quantity}
                  </span>
                </div>
                <p>{formatNum(el.productTotal)}</p>
              </div>
            </abbr>
          ))}

          {/* ////////////////////////////////////////////////////////////// */}
          <div className={style.top}>
            <p>Subtotal</p>
            <p>{formatNum(cartSubtotal)}</p>
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
              {formatNum(cartTotal)}
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
              other purposes described in our{" "}
              <NavLink
                link={{ name: "Privacy policy", href: "/" }}
                styleData={{ fontWeight: "600" }}
              />
              .
            </p>
            <ButtonSecondary
              id="orderButton"
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
