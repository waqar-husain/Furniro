import { redirect } from "next/navigation";
import React from "react";
const accountHandler = async () => {
  const isUserLoggedIn = false;

  if (!isUserLoggedIn) redirect("/");
  try {
  } catch (error) {}
};

export default async function Account() {
  await accountHandler();
  return <div>Account</div>;
}
