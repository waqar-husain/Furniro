"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  sortedData: [2, 2, 2, 2, 2, 2, 2, 2, 2, , 2, 2],
  noOfItems: 16,
  sortBy: "RELEVANCE",
  itemToShow: true, //True = "Tiles" and False = "List"
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addDataArr(state, action) {
      state.data = action.payload;
    },

    showItems(state, action) {
      state.itemToShow = action.payload.type;
    },

    setFilter(state, action) {
      state.sortBy = action.payload.filter;
    },
  },
});

export const shopAction = shopSlice.actions;
