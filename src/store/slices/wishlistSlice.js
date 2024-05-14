import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = [...state.wishlist].find(
        (el) => el.asin === action.payload.asin
      );
      if (existingItem) return;
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeItem(state, action) {
      state.wishlist = [...state.wishlist].filter(
        (el) => el.asin !== action.payload.asin
      );
    },
    setWishlist(state, action) {
      state.wishlist = [...action.payload.wishlist];
    },
  },
});

export const wishlistAction = wishlistSlice.actions;
