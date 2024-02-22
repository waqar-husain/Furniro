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

  const res = {
    data: {
      products: [
        {
          rank: 51,
          asin: "B0852LNGML",
          product_title:
            "FLIPZON Multipurpose 4-Tiers Shoe Rack with Dustproof Zip Cover, Multiuse Wide Space Storage Rack made by Non Woven Fabric for footwear, Toys, clothes (4 Shelves) (Maroon), Plastic Non Woven",
          product_price: "₹599.00",
          product_star_rating: "4",
          product_num_ratings: 405,
          product_url: "https://www.amazon.in/dp/B0852LNGML",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61BZLf8SPkL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 52,
          asin: "B0BTNT8X6K",
          product_title:
            'amazon basics 2-in-1 Laptop and Mobile Stand, Ergonomic, Adjustable Height, Anti-Slip Base, Heat Dissipation, Portable, Lightweight, Compatible with All Laptops Up to 15.6" (Abs, Black)',
          product_price: "₹279.00",
          product_star_rating: "4.1",
          product_num_ratings: 415,
          product_url: "https://www.amazon.in/dp/B0BTNT8X6K",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61QxfC9mAGL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 53,
          asin: "B08427XSCY",
          product_title:
            "Springtek Amaze Eco 4-Inch Medium Firm Single Size High Density (HD Foam Mattress (72X36X4 Inches, 2 Year Warranty",
          product_price: "₹2,959.00",
          product_star_rating: "4.1",
          product_num_ratings: 415,
          product_url: "https://www.amazon.in/dp/B08427XSCY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/817dBQuaSdL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 54,
          asin: "B08DXX97RT",
          product_title:
            "AYSIS DIY Shoe Rack Organizer/Multi-Purpose Plastic 5 Layers Portable and Folding Shoe Rack (Black)",
          product_price: "₹1,785.00",
          product_star_rating: "4",
          product_num_ratings: 405,
          product_url: "https://www.amazon.in/dp/B08DXX97RT",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61lCAifKeJS._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 55,
          asin: "B07GZJL23P",
          product_title:
            "Ebee Metal 5 Shalves Shoe Cabinet ( Grey ), 58D x 28W x 91H Centimeters",
          product_price: "₹549.00",
          product_star_rating: "3.7",
          product_num_ratings: 375,
          product_url: "https://www.amazon.in/dp/B07GZJL23P",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/617LFaITiZL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 56,
          asin: "B083ZXNXLX",
          product_title:
            "BRANCO Bathroom Cabinet with Mirror | Storage Organiser | Strong Plastic Bathroom Shelves Wall Mounted | Bathroom Accessories| Mirror Cabinet 21 x 12",
          product_price: "₹1,174.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B083ZXNXLX",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/617BKqQH1WL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 57,
          asin: "B0C5738GMY",
          product_title:
            "PRIVILON GLOBAL Privilion Globle Foldable Wooden Mini Laptop Table For Bed, Study Table With Drawer, Tablet/Mobile Holder For Kids & Adults (Black Cotted)",
          product_price: "₹499.00",
          product_star_rating: "4",
          product_num_ratings: 405,
          product_url: "https://www.amazon.in/dp/B0C5738GMY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/617YBytukpL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 58,
          asin: "B0987V3K22",
          product_title:
            "Green Soul® | Jupiter Superb | Premium Office Chair | 3 Years Warranty | Smart Multi-Tilt Lock Mechanism | Ergonomic Chair for Home & Office | High Back (Black)",
          product_price: "₹8,999.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B0987V3K22",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/81Iq2OmkgVL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 59,
          asin: "B0CB65R2LY",
          product_title:
            "Amazon Brand - Solimo Beans Refill Pack Fillers for Bean Bag 1kg - White",
          product_price: "₹449.00",
          product_star_rating: "3.7",
          product_num_ratings: 375,
          product_url: "https://www.amazon.in/dp/B0CB65R2LY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/613pgN0Tx7L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 60,
          asin: "B0BZL9VZF8",
          product_title:
            "RIOMAX Wall Mounted Self-Adhesive Bathroom Corner Shelf/Kitchen Rack & Holder - Bathroom Accessories (Material-GI Metal, Powder Coated Finish, Black, L Shape Pack of 1)",
          product_price: "₹269.00",
          product_star_rating: "4.2",
          product_num_ratings: 425,
          product_url: "https://www.amazon.in/dp/B0BZL9VZF8",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61nYcf4utHL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 61,
          asin: "B0CQYDXVLY",
          product_title:
            "HOOBRO Shoe Rack DIY Portable Shoe Rack Organizer/Multi-Purpose Shelf Storage Cabinet Stand Expandable for Heels, Boots, Slippers Plastic Portable and Folding Shoe Rack (1",
          product_price: "₹2,694.00",
          product_star_rating: "4.8",
          product_num_ratings: 485,
          product_url: "https://www.amazon.in/dp/B0CQYDXVLY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/814LS9-2sIL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 62,
          asin: "B0BSG1DVY5",
          product_title:
            "TASMAX floating shelf, wall mounted for bathroom rack self adhesive for storage shelf bathroom organizer without drill PACK OF 1 | Polypropylene, White",
          product_price: "₹284.00",
          product_star_rating: "3.2",
          product_num_ratings: 325,
          product_url: "https://www.amazon.in/dp/B0BSG1DVY5",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51xEwinep2L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 63,
          asin: "B0BPY92JFN",
          product_title:
            "Lukzer Engineered Wood Computer Desk with One Tier Shelves Laptop Study Table for Office Home Workstation Writing Modern Desk (ST-004/ White / 90 x 50 x 77 cm)",
          product_price: "₹2,690.00",
          product_star_rating: "3.8",
          product_num_ratings: 385,
          product_url: "https://www.amazon.in/dp/B0BPY92JFN",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71JgEZUreIL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 64,
          asin: "B09MCWZBH2",
          product_title:
            "UHUD CRAFTS Hanging Shelves - Adjustable Rope Hanging Shelf, Wall Hanging Decor, Lightweight, Premium Wooden Shelf, Hanging Plant Shelf for Bedroom and Living Room (1 Pcs)",
          product_price: "₹169.00",
          product_star_rating: "4.1",
          product_num_ratings: 415,
          product_url: "https://www.amazon.in/dp/B09MCWZBH2",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61I3xo6idhL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 65,
          asin: "B0CGRN291M",
          product_title:
            "Zebronics NS3000 Portable Laptop & Tablet Stand Supports Upto 17” with Max. 5KG Support, Anti-Slip Silicone Pads, Foldable Design, Multi Angle Adjustment, Carbon Steel Body",
          product_price: "₹849.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B0CGRN291M",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/619Tufi3DHL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 66,
          asin: "B09JGKNV2Q",
          product_title:
            "Decazone ® Macramé Wall Hanging Shelf Pine Wood Floating Shelve with Wooden Dowel Modern Chic Woven Décor for Dorm Living Room Nursery Beige 55 x 43cm",
          product_price: null,
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B09JGKNV2Q",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51H2pAkicTL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 67,
          asin: "B01E6VBNJK",
          product_title: "Cello Novelty Compact Plastic Shoe Rack(Ice Brown)",
          product_price: "₹2,299.00",
          product_star_rating: "4.2",
          product_num_ratings: 425,
          product_url: "https://www.amazon.in/dp/B01E6VBNJK",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71fh2PaFj9L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 68,
          asin: "B0CRHNHFMG",
          product_title:
            "PRIVILiON Global Office Table for Home/Writing Desk for Office/Folding Table for School/Folding Study Table/Work from Home Multipurpose Table-> (Black cotted C Pipe)",
          product_price: "₹479.00",
          product_star_rating: "3.6",
          product_num_ratings: 365,
          product_url: "https://www.amazon.in/dp/B0CRHNHFMG",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51LQEbvRCbL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 69,
          asin: "B0BYF7BB5Q",
          product_title:
            "Redclip Laptop Stand Portable Invisible Laptop Riser Stand | Mini Aluminum Cooling Pad, Lightweight Laptop Desk Stand for MacBook, Lenovo, Dell, HP & Other Laptops",
          product_price: "₹199.00",
          product_star_rating: "4.4",
          product_num_ratings: 445,
          product_url: "https://www.amazon.in/dp/B0BYF7BB5Q",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61jAw+9v7WL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 70,
          asin: "B094R46BCW",
          product_title:
            "SATTVA Classy.Elegant.Stylish Beans Refill Pack 1 KG Fillers for Bean Bag",
          product_price: "₹449.00",
          product_star_rating: "3.9",
          product_num_ratings: 395,
          product_url: "https://www.amazon.in/dp/B094R46BCW",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61Kfa73Yk-L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 71,
          asin: "B0BSSCLF7N",
          product_title:
            "SOLIAM Each Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk for Office/Home/School (Black)",
          product_price: "₹379.00",
          product_star_rating: "4.1",
          product_num_ratings: 415,
          product_url: "https://www.amazon.in/dp/B0BSSCLF7N",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51s+vNjz5gL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 72,
          asin: "B08Q8DJRP1",
          product_title:
            "Wakefit Bed | 1 Year Warranty | Double Bed, Queen Size Bed, Taurus Engineered Wood Bed with Storage, Wooden Bed (Matte Finish_Brown)",
          product_price: "₹11,615.00",
          product_star_rating: null,
          product_num_ratings: null,
          product_url: "https://www.amazon.in/dp/B08Q8DJRP1",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61HcqU1ZFFL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 73,
          asin: "B0BTM8KQS2",
          product_title:
            "PHILOSHOP | 7 Layer Bookshelf for Home Library, Book Stand| Book Rack for Study Room| Book Stand Shelf 7 Layer Metal Rack",
          product_price: "₹799.00",
          product_star_rating: "3.3",
          product_num_ratings: 335,
          product_url: "https://www.amazon.in/dp/B0BTM8KQS2",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71zKPFFQd0L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 74,
          asin: "B0B87V99GV",
          product_title:
            "Prima Detachable Baby Desk Plastic Chair 130 | High Chair | Eating | Feeding Booster Seat with Detachable Tray",
          product_price: "₹943.00",
          product_star_rating: "4.4",
          product_num_ratings: 445,
          product_url: "https://www.amazon.in/dp/B0B87V99GV",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61O2Yzaa9EL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 75,
          asin: "B09LMK2XMY",
          product_title:
            "ELV Direct Book Holder Stand, Portable Handsfree Reading,Book Holding Tray, Sturdy, Lightweight, A4 Size (28cmX21cm)/(11 inchesX8.2 inches), Black",
          product_price: "₹299.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B09LMK2XMY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/712MQWnrAML._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 76,
          asin: "B0BSQDNW9W",
          product_title:
            "YOGIRAJ Wqw4Wuw Foldable Laptop Table Multipurpose With Cup Holder, Study Bed Breakfast Table Large Size And Portable/Ergonomic | Rounded Edges/Non-Slip Legs (Wood)",
          product_price: "₹379.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B0BSQDNW9W",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/41HeAaXYPrL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 77,
          asin: "B0CR3WHVW3",
          product_title:
            "Zemic DIY Shoe Storage Cabinet, Plastic Shoe Rack Organiser to 30 Pair Shoes, Foldable Shoe Storage with Shelves and Door for All Kinds of Shoes, Books, Toys and Clothing (6-Shelf, White)",
          product_price: "₹2,884.00",
          product_star_rating: "4.2",
          product_num_ratings: 425,
          product_url: "https://www.amazon.in/dp/B0CR3WHVW3",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61DZoELKCLL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 78,
          asin: "B0BR2C441L",
          product_title:
            "FLIPZON Premium 6-Tiers Shoe Rack/Multipurpose Storage Rack with Dustproof Cover (Iron Pipes, Non Woven Fabric, Plastic Connector) (Grey)",
          product_price: "₹795.00",
          product_star_rating: "4",
          product_num_ratings: 405,
          product_url: "https://www.amazon.in/dp/B0BR2C441L",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61qsyoJLibL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 79,
          asin: "B08GRY77P9",
          product_title:
            "Amazon Brand - Solimo Xxxl Bean Bag Filled With Beans (Black And Brown)(Faux Leather)",
          product_price: "₹1,699.00",
          product_star_rating: "3.9",
          product_num_ratings: 395,
          product_url: "https://www.amazon.in/dp/B08GRY77P9",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61em4XfIdEL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 80,
          asin: "B0BCVJ3PVP",
          product_title:
            "SupCares Aluminium 7 Height Adjustable, Ventilated, Foldable, Portable Laptop Stand for Desk & Table Mount Upto 15.6 inch Laptop with Carry Pouch (Silver)",
          product_price: "₹399.00",
          product_star_rating: "4.4",
          product_num_ratings: 445,
          product_url: "https://www.amazon.in/dp/B0BCVJ3PVP",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61RuWbxo+ZL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 81,
          asin: "B0813LZDLS",
          product_title:
            "iSTAR New Look Towel Rod Double Rod Silver Towel Holder 24 inch Longer 2 Bar Towel Rod (Stainless Steel) (1)",
          product_price: "₹397.00",
          product_star_rating: "4",
          product_num_ratings: 405,
          product_url: "https://www.amazon.in/dp/B0813LZDLS",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/6173uC6-uSL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 82,
          asin: "B0CJHZLBDD",
          product_title:
            "COSTEM Wall Shelves Kitchen Bathroom Shelf Self-Adhesive Sticker Hook Multipurpose Wall Holder Bathroom Storage Rack Box Strong Shower Rack Shelf (4 Bathroom Shelf) Plastic",
          product_price: "₹299.00",
          product_star_rating: "4.4",
          product_num_ratings: 445,
          product_url: "https://www.amazon.in/dp/B0CJHZLBDD",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71zHk4wHKkL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 83,
          asin: "B07CWMLKXV",
          product_title:
            "Plantex Stainless Steel Folding Towel Rack for Bathroom/Towel Stand/Hanger/Bathroom Accessories(24 Inch-Chrome)",
          product_price: "₹1,375.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B07CWMLKXV",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71dKjDhNqQL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 84,
          asin: "B09XX51X2G",
          product_title:
            "STRIFF Laptop Tabletop Stand, Fold-Up, Adjustable, Ventilated, Portable Holder For Desk, Aluminum Foldable Laptop Ergonomic Compatibility With Up To 15.6-Inch Laptop, All Mac, Tab, And Mobile (Silver)",
          product_price: "₹349.00",
          product_star_rating: "4.2",
          product_num_ratings: 425,
          product_url: "https://www.amazon.in/dp/B09XX51X2G",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61sbnriokCL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 85,
          asin: "B072Q4Y2Q8",
          product_title:
            "Bikri Kendra - Hexagon 20 Golden mirror stickers for wall, hexagon mirror wall stickers, acrylic mirror sticker, hexagonal mirror wall sticker, wall mirror stickers,wall stickers for hall room, (Gold)",
          product_price: "₹249.00",
          product_star_rating: "3.8",
          product_num_ratings: 385,
          product_url: "https://www.amazon.in/dp/B072Q4Y2Q8",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71yS-U+MRkL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 86,
          asin: "B0CTXDBPS6",
          product_title:
            "Zemic Shoe Rack DIY Portable Shoe Rack Organizer/Multi-Purpose Shelf Storage Cabinet Stand Expandable for Heels, Boots, Slippers Plastic Portable and Folding Shoe Rack (12-Shelf, Black)",
          product_price: "₹2,627.00",
          product_star_rating: "4.6",
          product_num_ratings: 465,
          product_url: "https://www.amazon.in/dp/B0CTXDBPS6",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/81itzOcxiXL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 87,
          asin: "B09RPSRL3H",
          product_title:
            "Motella Crafts Non-Slip Rectangular Floor Mat Pvc Cushion Noodle Kitchen Rug Mats With Rubber Back Looped Entrance Mat For Home Balcony Dirt Traper Foot Mat Bathroom Area Rug (2X3 Ft, Red Black)",
          product_price: "₹639.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B09RPSRL3H",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/A1Ssg66Xv-L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 88,
          asin: "B0CS48SBKF",
          product_title:
            "GIGLICK- Premium Imported Soft Vegan Leather Bean Bag with Rectangular Extra Comfortable Footrest & Comfy Cushion with Beans Filled I Bean Bag Chair (Ready to Use) Color- (XXXXXL, Brown)",
          product_price: "₹2,599.00",
          product_star_rating: "4.2",
          product_num_ratings: 425,
          product_url: "https://www.amazon.in/dp/B0CS48SBKF",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71828wYmvpL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 89,
          asin: "B0CR7JNLWL",
          product_title:
            "Hoodwin Wooden Wall Shelf Shelves Art Hanging Decor for Wall Diwali Decoration Items Home Decor - Floating Display Rack Shelves Artwork for Living Room Kitchen Bedroom Ideal for Gifting",
          product_price: "₹299.00",
          product_star_rating: "3.7",
          product_num_ratings: 375,
          product_url: "https://www.amazon.in/dp/B0CR7JNLWL",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71z8cR9t2UL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 90,
          asin: "B092QS6FJS",
          product_title:
            "Green Soul Seoul Office Chair, Mid Back Mesh Ergonomic Home Office Desk Chair with Comfortable & Spacious Seat, Rocking-tilt Mechanism & Heavy Duty Metal Base (Smart Black)",
          product_price: "₹3,899.00",
          product_star_rating: "4.1",
          product_num_ratings: 415,
          product_url: "https://www.amazon.in/dp/B092QS6FJS",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/71lNT6DN9YL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 91,
          asin: "B08HJHH3CQ",
          product_title:
            "STRIFF FLSB Laptop Stand, MacBook Stand, Portable Laptop Stand, Gaming Laptop Stand, Foldable Laptop Stand Compatible with MacBook, Laptop,Tablet (Blackish)",
          product_price: "₹199.00",
          product_star_rating: "3.9",
          product_num_ratings: 395,
          product_url: "https://www.amazon.in/dp/B08HJHH3CQ",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51nmZeBOGSL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 92,
          asin: "B0BQW2WSVK",
          product_title:
            "CELLBELL Tauras Lite C100 Mesh High Back Office Chair/Study Chair/Computer Chair/Revolving Chair/Desk Chair for Work from Home Metal Base Seat Height Adjustable Chair Grey",
          product_price: "₹6,990.00",
          product_star_rating: "4.4",
          product_num_ratings: 445,
          product_url: "https://www.amazon.in/dp/B0BQW2WSVK",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61G6l2K+pEL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 93,
          asin: "B0CVDZQ9JY",
          product_title:
            "Oumffy Portable Plastic DIY Shoe Rack Organizer with Door, Made of Plastic Shoe Storage Cabinet Easy Assembly, Adjustable Shoe Storage Organizer Stackable Detachable Shoe Rack (6-Layer, Black)",
          product_price: "₹2,884.00",
          product_star_rating: "5",
          product_num_ratings: 505,
          product_url: "https://www.amazon.in/dp/B0CVDZQ9JY",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61DZoELKCLL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 94,
          asin: "B07YNQ9R7S",
          product_title:
            "Aditya polymers (Pack of 6 pcs. - Adjustable Shoe Organizers/Organiser/Shoe Shelf/Rack/Slots/holders/Space Saver/double deck/layer/Storage Cum Organizer - Grey & White Combo, Plastic",
          product_price: "₹499.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B07YNQ9R7S",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51pQH5no9CL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 95,
          asin: "B0CGJDS2XQ",
          product_title:
            "JICOOT Appliance Wheels for Kitchen Appliances, 4 Pack Appliance Slider for Kitchen Countertop, Self Adhesive Mini Caster Wheels, 360 Degree Swivel Wheels for Moving Coffee Maker, Cooker, Air Fryer",
          product_price: "₹189.00",
          product_star_rating: "4.5",
          product_num_ratings: 455,
          product_url: "https://www.amazon.in/dp/B0CGJDS2XQ",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61FIyEd2WDL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 96,
          asin: "B0BRVBFKV4",
          product_title:
            "NYALKARAN Plastic Shoe Organizer Stand Space Saver Shoe Storage Rack Double Layer Free Standing Shoe Slipper Stacker Shelf (Pack Of 4) (Multicolor)",
          product_price: "₹569.00",
          product_star_rating: "3.3",
          product_num_ratings: 335,
          product_url: "https://www.amazon.in/dp/B0BRVBFKV4",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61mBwRwOsdL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 97,
          asin: "B0CTMJ45K9",
          product_title:
            "Swiner 4XL Bean Bag with Footstool & Cushion Ready to Use Filled with Beans | Faux Leather Bean Bag Chair for Home (Brown, XXXXL)",
          product_price: null,
          product_star_rating: "5",
          product_num_ratings: 505,
          product_url: "https://www.amazon.in/dp/B0CTMJ45K9",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61XNLCLry9L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 98,
          asin: "B07LFY25VB",
          product_title: "Ebee Shoe Rack with 3 Shelves (Grey, Metal)",
          product_price: "₹399.00",
          product_star_rating: "3.7",
          product_num_ratings: 375,
          product_url: "https://www.amazon.in/dp/B07LFY25VB",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/418Ncaf683L._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 99,
          asin: "B083RD1Q23",
          product_title:
            "CIPLAPLAST Rich Look Bathroom Cabinet with Mirror White | Storage Organiser | Strong Plastic Bathroom Shelves Wall Mounted | Bathroom Accessories| Mirror Cabinet- (Made in India)",
          product_price: "₹1,449.00",
          product_star_rating: "4.3",
          product_num_ratings: 435,
          product_url: "https://www.amazon.in/dp/B083RD1Q23",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/61HcBlHUVDL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
        {
          rank: 100,
          asin: "B09CQCL7RS",
          product_title:
            "Sulfar 0534 Mesh Ventilation Nylon Back Rest With Lumbar Support Mesh Cushion Pad, Universal Back Lumbar Support Chairs For Office Chair, Home, Car, Seat To Relieve Pain (Pack of 1) (Black)",
          product_price: "₹199.00",
          product_star_rating: "3.5",
          product_num_ratings: 355,
          product_url: "https://www.amazon.in/dp/B09CQCL7RS",
          product_photo:
            "https://images-eu.ssl-images-amazon.com/images/I/51WPbYic5gL._AC_UL900_SR900,600_.jpg",
          rank_change_label: null,
        },
      ],
      total_products: 0,
    },
  };

  return (
    <>
      {searched && searched !== "" && (
        <SearchPage
          filterBar={true}
          data={res.data.products}
          dataLength={res.data.products.length}
          totalProducts={res.data.total_products}
          query={searched}
        />
      )}
      {searchParamNotAvailable && <MainShop />}
    </>
  );
}
