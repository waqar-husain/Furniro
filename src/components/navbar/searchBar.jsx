"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import style from "./searchBar.module.css";

import Logo from "../icon/Frame 168.svg";
import NavContainer from "./NavContainer";

import CrossIco from "../icon/Cross.jsx";
import SearchIco from "../icon/Search.jsx";

import ResultCont from "./ResultCont";
import fetchReq from "@/src/util/fetchFunction";
import { useRouter, ContainerLink } from "nextjs-progressloader";
import Modalbg from "../partials/modal/ModalBg";

export const links = [
  {
    href: "/",
    nickname: "home",
  },
  {
    href: "/shop",
    nickname: "search",
  },
  {
    href: "/shop/best-sellers",
    nickname: "categories",
  },
  {
    href: "/cart",
    nickname: "cart",
  },
  {
    href: "/wishlist",
    nickname: "wishlist",
  },
  {
    href: "/account/login",
    nickname: "login",
  },
];

const SearchBarOpened = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ products: [], totalProducts: null });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (query === "") {
      setData({ products: [], totalProducts: null });
      return;
    }
    try {
      setIsLoading(true);
      timer = setTimeout(async () => {
        const { data } = await fetchReq(
          `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}search?query=${query}&page=1&country=IN&category_id=furniture'`
        );

        setData({
          products: data.products.slice(0, 4),
          totalProducts: data.total_products,
        });
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setIsLoading(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <Modalbg
      closeModal={(e) => e.target === e.currentTarget && props.closeSearchBar()}
    >
      <motion.div
        className={style.searchbarTop}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "backOut" }}
      >
        <NavContainer>
          <Link
            className={style.logo}
            href="/"
            style={{ alignSelf: "baseline" }}
            onClick={(e) => props.closeSearchBar()}
          >
            <Image
              src={Logo}
              width="auto"
              height="auto"
              style={{ width: "18.5rem", height: "4rem" }}
              alt="Logo"
              priority
            />
          </Link>
          <div
            className={style.searchPanel}
            style={{
              flex: "75% 0 1",
              display: "flex",
              justifyContent: "space-between",
              alignSelf: "flex-start",
              alignItems: "center",
            }}
          >
            <div className={style.searchCont}>
              <form
                style={{ width: "100%" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (query === "") return;
                  props.closeSearchBar();
                  router.push("search", {
                    queryStrings: [
                      { key: "search", value: query },
                      { key: "sort_by", value: "RELEVANCE" },
                      { key: "page", value: "1" },
                    ],
                  });
                }}
              >
                <div style={{ position: "relative" }}>
                  <input
                    autoComplete="off"
                    name="search"
                    type="text"
                    className={style.searchInput}
                    placeholder="What are you looking for?"
                    onChange={(e) => setQuery(e.target.value.trim())}
                    value={query}
                  />
                  <button
                    type="button"
                    className={style.searchClearBtn}
                    onClick={() => setQuery("")}
                  >
                    Clear
                  </button>
                  <button type="submit" className={style.searchButton}>
                    <SearchIco color="white" />
                  </button>
                </div>
                {/* only visible when data is there below*/}
                {/* {data.products.length !== 0 && ( */}

                {query && (
                  <ResultCont
                    dataResult={{ data, query, isLoading }}
                    closeSearchBar={() => props.closeSearchBar()}
                  />
                )}
              </form>
            </div>
            <button
              className={style.searchbarCloseBtn}
              onClick={props.closeSearchBar}
              onKeyDown={props.keyDown}
            >
              <CrossIco />
            </button>
          </div>
        </NavContainer>
      </motion.div>
    </Modalbg>
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
      window.addEventListener("wheel", closeOnScroll, true);

      window.addEventListener("keydown", closeOnKey);
    }
    return () => {
      window.removeEventListener("wheel", closeOnScroll, true);
      window.removeEventListener("keydown", closeOnKey);
    };
  }, [openSearchBar]);

  return (
    <>
      <ContainerLink links={links} />
      <div
        style={{ height: "2.5rem", cursor: "pointer" }}
        onClick={searchBarHandler}
      >
        <SearchIco />
      </div>
      {openSearchBar &&
        createPortal(
          <SearchBarOpened
            closeSearchBar={searchBarHandler}
            keyDown={(e) => {
              if (e.key === "esc") setOpenSearchBar(false);
            }}
          />,
          document.getElementById("searchbar")
        )}
    </>
  );
}
