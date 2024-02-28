"use client";

import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./slices/filterProductSlice";
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlistSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
