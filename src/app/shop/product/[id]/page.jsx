import React from "react";
import style from "./shopItem.module.css";
import Link from "next/link";
import Image from "next/image";

import rightArr from "@/src/components/icon/arrow-right.svg";
import ProductPageButtons from "@/src/components/productItem/productPageButton";

import ProductPageDesc from "@/src/components/productItem/productPageDesc";
import StarContainer from "@/src/components/starContainer";
import { notFound } from "next/navigation";
import fetchReq from "@/src/util/fetchFunction";
import notFoundImg from "@/src/public/notFound.png";

export default async function Product({ params }) {
  const id = params.id.replace("pid%3D", "");
  // const { data: product } = await fetchReq(
  //   `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}product-details?asin=${id}&country=IN`
  // );
  // if (!params.id.startsWith("pid%3D")) notFound();

  const product = {
    asin: "B0927T6DS6",
    product_title:
      "UHUD CRAFTS Beautiful Antique Wooden Fold-able Side Table/End Table/Plant Stand/Stool Living Room Kids Play Furniture Table Round Shape",
    product_price: "₹399",
    product_original_price: "₹1,599",
    currency: "INR",
    country: "IN",
    product_star_rating: "4",
    product_num_ratings: 10797,
    product_url: "https://www.amazon.in/dp/B0927T6DS6",
    product_photo: "https://m.media-amazon.com/images/I/317O8IJ5VGL.jpg",
    product_num_offers: 2,
    is_best_seller: true,
    is_amazon_choice: false,
    climate_pledge_friendly: false,
    sales_volume: "9K+ bought in past month",
    about_product: [
      "Antique Foldable table, easy to carry anywhere. A perfect gift item for you.<br>",
      "This multipurpose table can be used for any showpiece on it , plant stand and more.<br>",
      "Product Dimension L x B X H - (12 x 12 x 12) inch.<br>",
      "Mango wood Folding Table / Side Table / Coffee Table/Kids Study Table/Stool/ Plant Stand.<br>",
      "Furniture Finish: Deco Paint; Assembly Instructions: Diy; Special Features: Collapsible; Size Name: Medium",
    ],
    product_description: null,
    product_information: {
      "Product Dimensions": "30D x 30W x 33H Centimeters",
      Colour: "White",
      Brand: "UHUD CRAFTS",
      "Table design": "End Table",
      Style: "Modern",
      "Seating Capacity": "1.00",
      "Finish Type": "Glossy",
      "Base Type": "Leg",
      "Frame Material": "Wood",
      "Model Name":
        "Wood Glossy Triangle End, Coffee Modern Minimalist Side Table for Living Room, Balcony and for Tea and Coffee Serve (White)",
      "Item Weight": "1 kg",
      "Product Care Instructions": "Wipe with Dry Cloth",
      "Included Components": "1 Fold-able Stool",
      "Furniture Finish": "Deco paint",
      Size: "Medium",
      "Base Material": "Wood",
      Material: "Mango Wood",
      "Number of Items": "1",
      Manufacturer: "UHUD CRAFTS, UHUD CRAFTS",
      "Item model number": "UC-12",
      ASIN: "B0927T6DS6",
      "Net Quantity": "1.00 count",
      "Generic Name": "Side Table",
      "Best Sellers Rank":
        "#75 in Home & Kitchen (See Top 100 in Home & Kitchen)   #1 in End Tables",
    },
    rating_distribution: { 1: "9%", 2: "6%", 3: "13%", 4: "23%", 5: "49%" },
    product_photos: [
      "https://m.media-amazon.com/images/I/317O8IJ5VGL.jpg",
      "https://m.media-amazon.com/images/I/718MB9FgKML.jpg",
      "https://m.media-amazon.com/images/I/515kZEHLiLL.jpg",
      "https://m.media-amazon.com/images/I/318jyfIb92L.jpg",
      "https://m.media-amazon.com/images/I/21hZzqaMZtL.jpg",
      "https://m.media-amazon.com/images/I/41u548iAlJL.jpg",
      "https://m.media-amazon.com/images/I/31I5ws-6+mL.jpg",
    ],
    product_details: {
      "Product Dimensions": "30D x 30W x 33H Centimeters",
      Colour: "White",
      Brand: "UHUD CRAFTS",
      "Table design": "End Table",
      Style: "Modern",
      "Seating Capacity": "1.00",
      "Finish Type": "Glossy",
      "Base Type": "Leg",
      "Frame Material": "Wood",
      "Model Name":
        '(function(f) {var _np=(window.P._namespace("DetailPageProductOverviewTemplatesJava"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {\n' +
        "    P.when('A').execute(function(A){\n" +
        "    A.on('a:truncate:po-attribute-truncate-9:updated', function(data) {\n" +
        "    var isTruncated = !data.truncateInstance.getIfTextFits();\n" +
        "    var seeMoreElement = document.getElementById('po-attribute-see-more-id-9');\n" +
        "    if(seeMoreElement) {\n" +
        "    seeMoreElement.style.display = isTruncated ?  ''  :  'none';\n" +
        "    }\n" +
        "    })\n" +
        "    });\n" +
        "}));  Wood Glossy Triangle End, Coffee Modern Minimalist Side Table for Living Room, Balcony and for Tea and Coffee Serve (White)    See more",
    },
  };

  return (
    <main>
      <div className={style.topBanner}>
        <div className={style.innerTop}>
          <Link className={style.headerLinkTo} href="/">
            Home
          </Link>
          <Image
            src={rightArr}
            alt="Right Arrow"
            style={{ marginRight: "2.4rem" }}
          />
          <Link className={style.headerLinkTo} href="/shop">
            Shop
          </Link>
          <Image
            src={rightArr}
            alt="Right Arrow"
            style={{ marginRight: "2.4rem" }}
          />

          <p className={style.topItemName}>
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
                width="500"
                height="490"
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
              {product.product_price && (
                <p
                  className={style.productPrice}
                  style={{ marginTop: "1.6rem" }}
                >
                  {product.product_price}

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
                      {product.product_original_price}
                    </span>
                  )}
                </p>
              )}
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
              <div style={{ marginRight: "1.6rem" }}>
                <p>ASIN</p>
                {Object.keys(product.product_information)
                  .slice(0, 3)
                  .map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
              </div>
              <div style={{ marginRight: "1.2rem" }}>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div>
                <p>{product.asin}</p>
                {Object.values(product.product_information)
                  .slice(0, 3)
                  .map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.productDesc}>
        <ProductPageDesc />
      </section>
    </main>
  );
}
