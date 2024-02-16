import React from "react";
import SearchPage from "../searchPage";
import { notFound } from "next/navigation";
import fetchReq from "@/src/util/fetchFunction";

export default function Categories({ params, searchParams }) {
  const categories = [
    "best-sellers",
    "most-wished-for",
    "gift-ideas",
    "new-releases",
  ];
  const category = categories.find((e) => e === params.categories);

  if (!category) notFound();
  if (!searchParams.page) notFound();
  // 'best-sellers?category=furniture&page=1&country=US''

  const { fetchedData } = fetchReq(
    `${
      process.env.NEXT_PUBLIC_RAPIDAPI_URL
    }${category}?category=furniture&type=${category
      .toUpperCase()
      .replace("-", "_")}&page=${searchParams.page}&country=US`
  );

  return (
    <>
      <SearchPage
        category={params.categories}
        data={fetchedData}
        filterBar={false}
      />
    </>
  );
}
