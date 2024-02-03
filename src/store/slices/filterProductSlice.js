"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  sortedData: [2, 2, 2, 2, 2, 2, 2, 2, 2, , 2, 2],
  noOfItems: 16,
  sortBy: "default",
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

    setDefault(state) {
      state.sortBy = "default";
    },

    ascendData(state) {
      console.log("hi");
      // state.sortedData = state.data.sort(a-b)
      state.sortBy = "ascend";
    },

    descendData(state) {
      console.log("by");
      // state.sortedData = state.data.sort(b-a)
      state.sortBy = "descend";
    },
  },
});

export const shopAction = shopSlice.actions;
