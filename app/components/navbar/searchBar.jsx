"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

import style from "./searchBar.module.css";

import Logo from "../icon/Frame 168.svg";
import NavContainer from "./navContainer";

import crossIco from "../icon/cross.svg";
import SearchIco from "../icon/search.jsx";
import ListItem from "../products/listListItem";

import ResultCont from "./resultCont";

const SearchBarOpened = (props) => {
  const [searchedVal, setSearchedVal] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchedVal);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchedVal]);

  return (
    <div className={style.searchBackdrop}>
      <div className={style.searchbarTop}>
        <NavContainer>
          <Link href="/" style={{ alignSelf: "baseline" }}>
            <Image src={Logo} width="185" height="41" alt="Logo" priority />
          </Link>
          <div
            style={{
              flex: "75% 0 1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={style.searchCont}>
              <form style={{ width: "100%" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    className={style.searchInput}
                    placeholder="What are you looking for?"
                    onChange={(e) => setSearchedVal(e.target.value)}
                    value={searchedVal}
                  />
                  <button
                    type="button"
                    className={style.searchClearBtn}
                    onClick={() => setSearchedVal("")}
                  >
                    Clear
                  </button>
                  <button className={style.searchButton}>
                    <SearchIco color="white" />
                  </button>
                </div>
                {/* only visible when data is there below*/}

                <ResultCont results={[]} />
                {/* ///////////////////////////////////////////// */}
              </form>
            </div>
            <button
              className={style.searchbarCloseBtn}
              onClick={props.closeSearchBar}
              onKeyDown={props.keyDown}
            >
              <Image src={crossIco} alt="cross" />
            </button>
          </div>
        </NavContainer>
      </div>
    </div>
  );
};

export default function SearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const searchBarHandler = (e) => {
    setOpenSearchBar((prev) => !prev);
  };

  useEffect(() => {
    const closeOnScroll = (e) => {
      setOpenSearchBar(false);
    };
    const closeOnKey = (e) => {
      if (e.key === "Escape") setOpenSearchBar(false);
    };
    if (openSearchBar) {
      window.addEventListener("scroll", closeOnScroll, true);

      window.addEventListener("keydown", closeOnKey);
    }
    return () => {
      window.removeEventListener("scroll", closeOnScroll, true);
      window.removeEventListener("keydown", closeOnKey);
    };
  }, [openSearchBar]);

  return (
    <>
      <div
        style={{ height: "25px", cursor: "pointer" }}
        onClick={searchBarHandler}
      >
        <SearchIco />
      </div>
      {openSearchBar &&
        createPortal(
          <SearchBarOpened
            closeSearchBar={searchBarHandler}
            keyDown={(e) => {
              console.log(e.key);
              if (e.key === "esc") setOpenSearchBar(false);
            }}
          />,
          document.getElementById("searchbar")
        )}
    </>
  );
}
