"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemToShow: true, //True = "Tiles" and False = "List"
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    showItems(state, action) {
      state.itemToShow = action.payload.type;
    },
  },
});

export const shopAction = shopSlice.actions;
