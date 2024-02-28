import PageHeader from "@/src/components/pageHeader";
import { getAuth } from "firebase/auth";
import { redirect } from "next/navigation";
import React from "react";

const accountHandler = async () => {
  const isUserLoggedIn = true;

  if (!isUserLoggedIn) redirect("/");
};

export default async function Account() {
  await accountHandler();
  return (
    <>
      <PageHeader heading="Account" />
    </>
  );
}
