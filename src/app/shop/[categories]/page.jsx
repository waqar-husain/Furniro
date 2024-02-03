import React from "react";
import SearchPage from "../searchPage";
import { notFound } from "next/navigation";

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
  return (
    <>
      <SearchPage category={params.categories} />
    </>
  );
}
