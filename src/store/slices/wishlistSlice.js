import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [{ id: 1 }],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = [...state.wishlist].find(
        (el) => el.id === action.payload.id
      );
      if (existingItem) return;
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeItem(state, action) {
      state.wishlist = [...state.wishlist].filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const wishlistAction = wishlistSlice.actions;
