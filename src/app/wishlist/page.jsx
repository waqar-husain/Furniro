import React from "react";
import style from "./wishlist.module.css";

import PageHeader from "../../components/partials/pageHeader/pageHeader";
import BottomBanner from "../../components/partials/bottomBanner/bottomBanner";
import WishlistItems from "../../components/wishlist/wishlistItems";

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
