import Image from "next/image";
import Link from "next/link";
import React from "react";

import style from "./searchBar.module.css";

import notFound from "@/public/notFound.png";
import { motion } from "framer-motion";
import { formatNum } from "@/src/util/numerFormat";

export default function SearchedItem({ data, closeSearchBar }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link
        href={`/shop/product/pid=${data?.asin}`}
        style={{
          color: "var(--color-grey2)",
          textDecoration: "none",
        }}
        onClick={() => closeSearchBar()}
      >
        <div className={style.searchedItem}>
          <div
            style={{
              maxWidth: "7.5rem",
              width: "100%",
              borderRadius: "0.4rem",
              boxShadow: "1px 2px 4px rgba(0,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            <Image
              alt="ProductImage"
              src={data.product_photo || notFound}
              width={50}
              height={50}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
          <div
            style={{
              flex: "80% 0 1",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              rowGap: "0.5rem",
            }}
          >
            <h5
              style={{
                fontSize: "1.8rem",
                fontWeight: "400",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {data.product_title || "Not available!"}
            </h5>
            <p
              style={{
                color: "black",
                fontWeight: "600",
                color: "var(--color-grey1)",
              }}
            >
              {data.product_price
                ? formatNum(data.product_price)
                : "Not available!"}
              {data.product_original_price && (
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "500",
                    marginLeft: "1rem",
                    textDecoration: "line-through",
                  }}
                >
                  {formatNum(data.product_original_price)}
                </span>
              )}
            </p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
