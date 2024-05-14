"use  client";
import React, { useEffect, useState } from "react";
import { Country, State } from "country-state-city";

export default function SelectCountry(props) {
  const [countryId, setCountryId] = useState("AF");
  const [province, setProvince] = useState(
    State.getStatesOfCountry(countryId)[0]
  );

  useEffect(() => {
    //Default Country Available////////////////////////////////
    if (props.defaultCountry) {
      setCountryId(props.defaultCountry);
      props.getCountry({
        value: props.defaultCountry,
        provinceAvailable:
          State.getStatesOfCountry(props.defaultCountry).length !== 0,
      });
    }
  }, [props.defaultCountry]);

  useEffect(() => {
    //Default Province Available////////////////////////////////
    if (props.defaultProvince) {
      setProvince(props.defaultProvince);
      props.getProvince(props.defaultProvince);
    }
  }, [props.defaultProvince]);

  useEffect(() => {
    //Country
    props.getCountry({
      value: countryId,
      provinceAvailable: State.getStatesOfCountry(countryId).length !== 0,
    });

    if (
      !State.getStatesOfCountry(countryId)
        .map((el) => el.name)
        .includes(props.defaultProvince)
    ) {
      setProvince(State.getStatesOfCountry(countryId)[0]);
      props.getProvince(State.getStatesOfCountry(countryId)[0]);
    }
  }, [countryId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "3rem",
      }}
    >
      <div>
        <label
          htmlFor="region"
          style={{
            fontWeight: "500",
            color: `${props.disabled ? "var(--color-grey2)" : ""}`,
          }}
        >
          Country / Region
        </label>
        <select // SELECT
          disabled={props.disabled}
          autoComplete="on"
          name="country"
          id="region"
          style={{
            marginTop: "1.5rem",
            borderRadius: " 1rem",
            paddingLeft: "1rem",
            fontSize: " 1.6rem",
            height: "6rem",
            width: "100%",
            cursor: "pointer",
          }}
          value={countryId}
          onChange={(e) => {
            props.getCountry({
              value: e.target.value,
              provinceAvailable:
                State.getStatesOfCountry(e.target.value).length !== 0,
            });
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
      {State.getStatesOfCountry(countryId).length !== 0 && (
        <div>
          <label
            htmlFor="province"
            style={{
              fontWeight: "500",
              color: `${props.disabled ? "var(--color-grey2)" : ""}`,
            }}
          >
            Province
          </label>
          <select // SELECT
            disabled={props.disabled}
            name="province"
            id="province"
            value={province}
            style={{
              marginTop: "1.5rem",
              borderRadius: " 1rem",
              paddingLeft: "1rem",
              fontSize: " 1.6rem",
              height: "6rem",
              width: "100%",
              cursor: "pointer",
            }}
            required
            onChange={(e) => {
              props.getProvince(e.target.value);
              setProvince(e.target.value);
            }}
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
    </div>
  );
}
