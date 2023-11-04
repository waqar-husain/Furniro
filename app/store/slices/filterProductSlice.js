"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  sortedData: [],
  noOfItems: 16,
  sortBy: "Default",
  itemToShow: true, //True = "Tiles" and False = "List"
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addDataArr(state, action) {
      state.data = action.payload;
    },

    showItems(state) {
      state.itemToShow = !state.itemToShow;
    },

    ascendData(state) {
      // state.sortedData = state.data.sort(a-b)
      state.sortBy = "ascend";
    },

    descendData(state) {
      // state.sortedData = state.data.sort(b-a)
      state.sortBy = "descend";
    },
  },
});

export const shopAction = shopSlice.actions;
