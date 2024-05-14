import React from "react";
import style from "./shopItem.module.css";
import Link from "next/link";
import Image from "next/image";

import ProductPageButtons from "@/src/components/productItem/productPageButton";

import ProductPageDesc from "@/src/components/productItem/productPageDesc";
import StarContainer from "@/src/components/partials/starContainer/starContainer";
import { notFound } from "next/navigation";
import fetchReq from "@/src/util/fetchFunction";
import notFoundImg from "@/public/notFound.png";
import { formatNum } from "@/src/util/numerFormat";
import ChevronRight from "@/src/components/icon/ChevronRight";
import { data } from "autoprefixer";

export default async function Product({ params }) {
  const id = params.id.replace("pid%3D", "");
  const { data: product } = await fetchReq(
    `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}product-details?asin=${id}&country=IN`
  );

  if (!params.id.startsWith("pid%3D")) notFound();

  return (
    <main>
      <div className={style.topBanner}>
        <div className={style.innerTop}>
          <Link className={style.headerLinkTo} href="/">
            Home
          </Link>
          <ChevronRight size={20} />
          <Link
            className={style.headerLinkTo}
            href="/shop"
            style={{ marginLeft: "2.4rem" }}
          >
            Shop
          </Link>
          <ChevronRight size={20} />

          <p className={style.topItemName} style={{ marginLeft: "2.4rem" }}>
            {product.product_title || "Not available"}
          </p>
        </div>
      </div>
      <section className={style.productMain}>
        <div className={style.innerMain}>
          <div className={style.innerMainImages}>
            <div
              style={{
                maxWidth: "500px",
                maxHeight: "490px",
                height: "100%",
                width: "100%",
                backgroundColor: "#F9F1E7",
                display: "flex",
                justifyContent: "center",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                width="1"
                height="1"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={product.product_photo || notFoundImg}
                unoptimized
                alt="sofa"
              />
            </div>
          </div>
          <div className={style.innerMainData} style={{ width: "50%" }}>
            <div style={{ paddingBottom: "6rem" }}>
              <h1
                className={style.productName}
                style={{ marginBottom: "0rem" }}
              >
                {product.product_title || "Not available"}
              </h1>
              <div className={style.productReview}>
                {/* //Handling Product Rating */}
                <StarContainer
                  numReviews={product.product_num_ratings}
                  starsRating={product.product_star_rating}
                />
              </div>
              <div style={{ display: "flex", alignItems: "end" }}>
                {product.product_price && (
                  <p
                    className={style.productPrice}
                    style={{ marginTop: "1.6rem" }}
                  >
                    {formatNum(product.product_price)}

                    {product.product_original_price && (
                      <span
                        style={{
                          fontSize: "2rem",
                          color: "var(--color-grey4)",
                          fontWeight: "400",
                          marginLeft: "1rem",
                          textDecoration: "line-through",
                        }}
                      >
                        {formatNum(product.product_original_price)}
                      </span>
                    )}
                  </p>
                )}
                {product.sales_volume && (
                  <p
                    className={style.productText}
                    style={{ marginLeft: "2rem", color: "var(--color-grey1)" }}
                  >
                    {product.sales_volume}
                  </p>
                )}
              </div>

              {product.product_description && (
                <p className={style.productText}>
                  {product.product_description}
                </p>
              )}
              <div className={style.productDetail}>
                {product.product_price ? (
                  <ProductPageButtons data={product} />
                ) : (
                  <p
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: "600",
                      marginTop: "2rem",
                      color: "var(--color-grey3)",
                    }}
                  >
                    Currently not available!
                  </p>
                )}
              </div>
            </div>
            <div className={style.productAbout}>
              <div
                style={{
                  marginRight: "1.6rem",
                  color: "var(--color-grey1)",
                  fontWeight: "500",
                }}
              >
                <p>ASIN</p>
                {Object.keys(product.product_information)
                  .slice(0, 5)
                  .map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
              </div>
              <div style={{ marginRight: "1.2rem" }}>
                {Array(6)
                  .fill("1")
                  .map((el, i) => (
                    <p key={i}>:</p>
                  ))}
              </div>
              <div>
                <p>{product.asin}</p>
                {Object.values(product.product_information)
                  .slice(0, 5)
                  .map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.productDesc}>
        <ProductPageDesc
          productDesc={{
            product_information: product.product_information,
            about_product: product.about_product,
            product_photos: product.product_photos,
            product_num_ratings: product.product_num_ratings,
          }}
        />
      </section>
    </main>
  );
}
