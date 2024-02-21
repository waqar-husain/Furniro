import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartList: [],
  subTotal: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    incrementCart(state, action) {
      if (!action.payload.price) return;
      const existingItemId = [...state.cartList].findIndex(
        (el) => el.id === action.payload.id
      );

      if (existingItemId === 0 || existingItemId > 0) {
        if (state.cartList[existingItemId].quantity > 4) return;
        const existingItem = state.cartList[existingItemId];
        //Increasing quantity by 1
        state.cartList[existingItemId].quantity++;

        //Calculating product Subtotal according to the quantity
        existingItem.productTotal = existingItem.quantity * existingItem.price;

        //Adding the amount in subtotal of the Cart
        state.subTotal = state.subTotal + existingItem.price;

        state.totalPrice = state.subTotal;
      } else {
        //Adding item to Cart List
        state.cartList = [...state.cartList, action.payload];
        //Adding amount in Cart Subtotal
        state.subTotal = state.subTotal + action.payload.price;

        state.totalPrice = state.subTotal;
      }
    },

    decrementCart(state, action) {
      const existingItemId = [...state.cartList].findIndex(
        (el) => el.id === action.payload.id
      );

      const existingItem = state.cartList[existingItemId];
      existingItem.quantity--;
      existingItem.productTotal = existingItem.quantity * existingItem.price;
      state.subTotal = state.subTotal - existingItem.price;
      state.totalPrice = state.subTotal;
    },

    removeItem(state, action) {
      state.cartList = [...state.cartList].filter(
        (el) => el.id !== action.payload.id
      );
      state.subTotal = state.subTotal - action.payload.productTotal;
      state.totalPrice = state.subTotal;
    },
  },
});

export const cartAction = cartSlice.actions;
