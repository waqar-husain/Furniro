"use client";

import React, { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

import style from "./searchBar.module.css";

import Logo from "../icon/Frame 168.svg";
import NavContainer from "./navContainer";

import crossIco from "../icon/cross.svg";
import SearchIco from "../icon/search.jsx";

import ResultCont from "./resultCont";
import fetchReq from "@/src/util/fetchFunction";
import { useRouter } from "next/navigation";

const SearchBarOpened = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ products: [], totalProducts: 0 });
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (query === "") {
      setData({ products: [], totalProducts: 0 });
      return;
    }
    try {
      timer = setTimeout(async () => {
        // const data = await fetchReq(
        //   `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}search?query=${query}&page=1&country=US&category_id=furniture'`
        // );
        // setData({products:data.data.products.slice(0, 4),totalProducts:data.data.total_products});
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDlhYzNjZjE2MTgyMWUwZDcwZmI0MmEwNGFjOTA2MSIsInN1YiI6IjY0ODBkMDI5ZTM3NWMwMDBmZjQ2YTg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrwZiUwscCFf_t4PxsPHBpJrrl4x5C4FUKFj_agZnQU`,
          },
        };
        const data = await fetchReq(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options
        );
        console.log(data);
        setData({
          products: data.results.slice(0, 4),
          totalProducts: data.total_results,
        });
      }, 500);
    } catch (err) {
      console.log(err);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div
      className={style.searchBackdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) props.closeSearchBar();
      }}
    >
      <div className={style.searchbarTop}>
        <NavContainer>
          <Link
            href="/"
            style={{ alignSelf: "baseline" }}
            onClick={(e) => props.closeSearchBar()}
          >
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
              <form
                style={{ width: "100%" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  props.closeSearchBar();
                  router.push(`/shop?search=${query}&page=1`);
                }}
              >
                <div style={{ position: "relative" }}>
                  <input
                    autoComplete="off"
                    name="search"
                    type="text"
                    className={style.searchInput}
                    placeholder="What are you looking for?"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                  <button
                    type="button"
                    className={style.searchClearBtn}
                    onClick={() => setQuery("")}
                  >
                    Clear
                  </button>
                  <button className={style.searchButton}>
                    <SearchIco color="white" />
                  </button>
                </div>
                {/* only visible when data is there below*/}
                {data.products.length !== 0 && (
                  <ResultCont
                    dataResult={{ data, query }}
                    closeSearchBar={() => props.closeSearchBar()}
                  />
                )}

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
