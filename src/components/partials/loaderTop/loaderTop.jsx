"use client";
import React from "react";
import { ProgressLoader } from "nextjs-progressloader";

export default function LoaderTop() {
  return <ProgressLoader color="var(--color-primary)" showSpinner={false} />;
}
