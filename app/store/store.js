"use client";

import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./slices/filterProductSlice";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
  },
});

export default store;
