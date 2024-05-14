import React from "react";
import SearchPage from "../searchPage";
import { notFound } from "next/navigation";
import fetchReq from "@/src/util/fetchFunction";

export default async function Categories({ params, searchParams }) {
  const categories = [
    "best-sellers",
    "most-wished-for",
    "gift-ideas",
    "new-releases",
  ];
  const category = categories.find((e) => e === params.categories);

  if (!category) notFound();
  if (!searchParams.page) notFound();

  const { data } = await fetchReq(
    `${
      process.env.NEXT_PUBLIC_RAPIDAPI_URL
    }best-sellers?category=kitchen/1380441031&type=${category
      .toUpperCase()
      .replace("-", "_")}&page=${searchParams.page}&country=IN`
  );

  return (
    <>
      <SearchPage
        data={data.best_sellers.slice(2)}
        dataLength={data.best_sellers.length}
        totalProducts={100}
        filterBar={false}
      />
    </>
  );
}
