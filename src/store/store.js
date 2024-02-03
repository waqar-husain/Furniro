"use client";

import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./slices/filterProductSlice";
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlistSlice";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
