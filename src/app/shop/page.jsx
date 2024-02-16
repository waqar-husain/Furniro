import React from "react";

import SearchPage from "./searchPage";
import PageHeader from "@/src/components/pageHeader";
import BottomBanner from "@/src/components/bottomBanner";
import { notFound } from "next/navigation";
import Section2 from "@/src/components/homepage/section2";

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

export default function Shop({ searchParams }) {
  const searchParamNotAvailable = Object.keys(searchParams).length === 0;
  console.log(searchParams);
  const searched = searchParams.search;
  if (!searched && !searchParamNotAvailable) notFound();

  return (
    <>
      {searched && searched !== "" && <SearchPage filterBar={true} />}
      {searchParamNotAvailable && <MainShop />}
    </>
  );
}
