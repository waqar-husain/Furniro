import React from "react";

import SearchPage from "./searchPage";
import PageHeader from "@/src/components/partials/pageHeader/pageHeader";
import BottomBanner from "@/src/components/partials/bottomBanner/bottomBanner";
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
  let res;
  if (searched) {
    res = await fetchReq(
      `${process.env.NEXT_PUBLIC_RAPIDAPI_URL}search?query=${searched}&page=${searchParams.page}&country=IN&sort_by=${searchParams.sort_by}&category_id=furniture'`
    );
  }
  if (!searchParamNotAvailable && !searched) notFound();

  return (
    <>
      {searched && searched !== "" && (
        <SearchPage
          filterBar={true}
          data={res.data.products.slice(2)}
          dataLength={res.data.products.length}
          totalProducts={res.data.total_products}
          query={searched}
        />
      )}
      {searchParamNotAvailable && <MainShop />}
    </>
  );
}
