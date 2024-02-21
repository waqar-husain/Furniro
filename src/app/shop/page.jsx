import React from "react";

import SearchPage from "./searchPage";
import PageHeader from "@/src/components/pageHeader";
import BottomBanner from "@/src/components/bottomBanner";
import { notFound } from "next/navigation";
import Section2 from "@/src/components/homepage/section2";
import fetchReq from "@/src/util/fetchFunction";

const MainShop = (props) => {
  return (
    <>
      <PageHeader heading="Shop" logo="true" />
      <main>
        <Section2 category="gift-ideas" heading="Gift Ideas" />
        <Section2 category="most-wished-for" heading="Most Wished" />
        <Section2 category="new-releases" heading="New Releases" />
        <Section2 category="best-sellers" heading="Best Sellers" />
      </main>
      <BottomBanner />
    </>
  );
};

export default async function Shop({ searchParams }) {
  const searchParamNotAvailable = Object.keys(searchParams).length === 0;
  const searched = searchParams.search;
  // let res;
  // if (searched) {
  //   res = await fetchReq(
  //     `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}search?query=${searched}&page=${searchParams.page}&country=IN&sort_by=${searchParams.sort_by}&category_id=furniture`
  //   );
  // }
  if (!searchParamNotAvailable && !searched) notFound();

  // const res = {
  //   data: {
  //     products: [
  //       {
  //         asin: "B0BQ3K354Y",
  //         product_title:
  //           "ASTRIDE Ace Mid Back Office Chair for Work from Home/Study Chair/Revolving Chair [Heavy Duty Nylon Base, Black]",
  //         product_price: "₹3,189",
  //         product_original_price: "₹9,999",
  //         currency: "INR",
  //         product_star_rating: "4.4",
  //         product_num_ratings: 1283,
  //         product_url: "https://www.amazon.in/dp/B0BQ3K354Y",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71Z3MtYE48L._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹3,189",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B0987V3K22",
  //         product_title:
  //           "Green Soul® | Jupiter Superb | Premium Office Chair | 3 Years Warranty | Smart Multi-Tilt Lock Mechanism | Ergonomic Chair for Home &amp; Office | High Back (Black)",
  //         product_price: "₹8,999",
  //         product_original_price: "₹18,890",
  //         currency: "INR",
  //         product_star_rating: "4.3",
  //         product_num_ratings: 15212,
  //         product_url: "https://www.amazon.in/dp/B0987V3K22",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81Iq2OmkgVL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹8,999",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: null,
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B092QS6FJS",
  //         product_title:
  //           "Green Soul Seoul Office Chair, Mid Back Mesh Ergonomic Home Office Desk Chair with Comfortable &amp; Spacious Seat, Rocking-tilt Mechanism &amp; Heavy Duty Metal Base (Smart Black)",
  //         product_price: "₹3,899",
  //         product_original_price: "₹5,980",
  //         currency: "INR",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 13387,
  //         product_url: "https://www.amazon.in/dp/B092QS6FJS",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71lNT6DN9YL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹3,899",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "400+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B08X1PGTSW",
  //         product_title:
  //           "Restomatt Mistique Unbreakable Arm Plastic Chair - 2 Chairs, Black",
  //         product_price: "₹1,436",
  //         product_original_price: "₹1,999",
  //         currency: "INR",
  //         product_star_rating: "3.3",
  //         product_num_ratings: 139,
  //         product_url: "https://www.amazon.in/dp/B08X1PGTSW",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/51L72u8zRfL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹1,436",
  //         is_best_seller: true,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "400+ bought in past month",
  //         delivery: "FREE delivery Wed, 28 Feb Or fastest delivery Mon, 26 Feb",
  //       },
  //       {
  //         asin: "B0B31NPQV3",
  //         product_title:
  //           "Wakefit Office Chair | 3 Years Warranty, Office Chairs for Work from Home, Ergonomic Chair, Computer Chair, High Back Office Chair, 2D Adjustable Lumbar Support, Single Lock Safari (Black) DIY, Nylon",
  //         product_price: "₹7,312",
  //         product_original_price: "₹13,299",
  //         currency: "INR",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 3487,
  //         product_url: "https://www.amazon.in/dp/B0B31NPQV3",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/719zelylHPL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹7,312",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "200+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 29 Feb, 8 am - 5 pm",
  //       },
  //       {
  //         asin: "B08XBGZ4R6",
  //         product_title:
  //           "CELLBELL Desire C104 Mesh Mid Back Ergonomic Office Chair/Study Chair/Revolving Chair/Computer Chair for Work from Home Metal Base Seat Height Adjustable Chair [Black]",
  //         product_price: "₹3,999",
  //         product_original_price: "₹9,999",
  //         currency: "INR",
  //         product_star_rating: "4.4",
  //         product_num_ratings: 18179,
  //         product_url: "https://www.amazon.in/dp/B08XBGZ4R6",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/61wlmkVQsgL._AA1000_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹3,999",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B0CNRT9WMP",
  //         product_title:
  //           "HOME PERFECT Executive Ergonomic Home Office Desk Chair with Height Adjustable Seat, Push Back Tilt Feature, Adjustable Armrests &amp; Headrest, Heavy Duty Metal Base (Black and Silver)",
  //         product_price: "₹5,499",
  //         product_original_price: "₹10,499",
  //         currency: "INR",
  //         product_star_rating: "3.7",
  //         product_num_ratings: 71,
  //         product_url: "https://www.amazon.in/dp/B0CNRT9WMP",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71RtACyG7JL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹5,499",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "600+ bought in past month",
  //         delivery: "FREE delivery Mon, 26 Feb",
  //       },
  //       {
  //         asin: "B07951XLHV",
  //         product_title:
  //           "Green Soul® Vienna Premium Leatherette Office Chair, High Back Ergonomic Home Office Executive Chair with Spacious Cushion Seat &amp; Heavy Duty Metal Base (Brown)",
  //         product_price: "₹7,499",
  //         product_original_price: "₹16,725",
  //         currency: "INR",
  //         product_star_rating: "4.2",
  //         product_num_ratings: 8606,
  //         product_url: "https://www.amazon.in/dp/B07951XLHV",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71xODXoLPkL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹7,499",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "200+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B0BH2CNRT8",
  //         product_title:
  //           "STAR WORK Zero Gravity Relax Chair for Lounge,Easy Chair for Lawn | Portable and Foldable Recliner Chair for Resting | Adjustable Pillow | Full Body Support, Alloy Steel, Black",
  //         product_price: "₹2,848",
  //         product_original_price: "₹4,999",
  //         currency: "INR",
  //         product_star_rating: "3.9",
  //         product_num_ratings: 627,
  //         product_url: "https://www.amazon.in/dp/B0BH2CNRT8",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81lQ40jzq-L._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹2,848",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "300+ bought in past month",
  //         delivery: "FREE delivery Sat, 24 Feb Or fastest delivery Thu, 22 Feb",
  //       },
  //       {
  //         asin: "B0CKLFSSF4",
  //         product_title:
  //           "PM Stylish and Durable Set of 2 Plastic Chairs - Perfect for Indoor and Outdoor Use",
  //         product_price: "₹1,436",
  //         product_original_price: "₹1,999",
  //         currency: "INR",
  //         product_star_rating: "3.8",
  //         product_num_ratings: 4,
  //         product_url: "https://www.amazon.in/dp/B0CKLFSSF4",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/51T0NOBZf8L._AA800_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹1,436",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: null,
  //         delivery: "FREE delivery Wed, 28 Feb Or fastest delivery Mon, 26 Feb",
  //       },
  //       {
  //         asin: "B0CSNGNRJJ",
  //         product_title:
  //           "NEWTURN™ Boom Office Revolving Chair Medium Back with Spacious Seat Computer Chair Teak Wood Study Workstation Revolving Chair for Office &amp; Home (Grey) with 2 Years Warranty",
  //         product_price: "₹3,134",
  //         product_original_price: "₹4,999",
  //         currency: "INR",
  //         product_star_rating: "4.6",
  //         product_num_ratings: 8,
  //         product_url: "https://www.amazon.in/dp/B0CSNGNRJJ",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81vJOVDbT0L._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹3,134",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: null,
  //         delivery: "FREE delivery Thu, 22 Feb",
  //       },
  //       {
  //         asin: "B07FVPYYZ9",
  //         product_title: "Ikea Italian Chair (Wood , Black)",
  //         product_price: "₹1,350",
  //         product_original_price: "₹2,219",
  //         currency: "INR",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 1634,
  //         product_url: "https://www.amazon.in/dp/B07FVPYYZ9",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71ql39fORGL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹1,350",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: null,
  //         delivery: "FREE delivery 26 - 28 Feb",
  //       },
  //       {
  //         asin: "B0BZPJQ2X2",
  //         product_title:
  //           "Da URBAN® Merlion Office Chair,High Back Mesh Ergonomic Home Office Desk Chair with 3 Years Warranty, Adjustable Armrests,Adjustable Lumbar Support,Tilt Lock Mechanism (Grey)",
  //         product_price: "₹7,499",
  //         product_original_price: "₹26,999",
  //         currency: "INR",
  //         product_star_rating: "4.4",
  //         product_num_ratings: 3329,
  //         product_url: "https://www.amazon.in/dp/B0BZPJQ2X2",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/61qEhDtYkRL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹7,499",
  //         is_best_seller: true,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery: "FREE delivery as soon as Thu, 22 Feb, 7 am - 9 pm",
  //       },
  //       {
  //         asin: "B09HNTMPRK",
  //         product_title:
  //           "beAAtho® Verona Mesh Mid-Back Ergonomic Desk Office Chair with Tilting Mechanism, Comfortable Seat, and Revolving Heavy Duty Metal Base | Ideal for Work from Home &amp; Study (Grey)",
  //         product_price: "₹3,789",
  //         product_original_price: "₹9,999",
  //         currency: "INR",
  //         product_star_rating: "4.4",
  //         product_num_ratings: 7695,
  //         product_url: "https://www.amazon.in/dp/B09HNTMPRK",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81qK4hCqfAL._AA1080_AC_FMwebp_QL65_.jpg",
  //         product_num_offers: 0,
  //         product_minimum_offer_price: "₹3,789",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         climate_pledge_friendly: false,
  //         sales_volume: "200+ bought in past month",
  //         delivery: "FREE delivery 24 - 27 Feb",
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      {searched && searched !== "" && (
        <SearchPage
          filterBar={true}
          data={res.data.products}
          dataLength={res.data.products.length}
          totalProducts={res.data.total_products || 38691}
        />
      )}
      {searchParamNotAvailable && <MainShop />}
    </>
  );
}
