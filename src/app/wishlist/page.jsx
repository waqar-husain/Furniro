import React from "react";
import style from "./wishlist.module.css";

import PageHeader from "../../components/pageHeader";
import BottomBanner from "../../components/bottomBanner";
import NoItem from "../../components/noItem";
import WishlistItems from "../../components/wishlistItems";

export default function Wishlist() {
  return (
    <>
      <PageHeader heading="Wishlist" />
      <main>
        <section className={style.cartSec}>
          <WishlistItems />
        </section>
      </main>
      <BottomBanner />
    </>
  );
}
