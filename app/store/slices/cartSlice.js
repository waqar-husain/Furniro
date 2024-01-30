import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartList: [{ id: 2, quantity: 1, subTotal: 2400, price: 2400 }],
  deliveryCharges: 0,
  subTotal: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    incrementCart(state, action) {
      const existingItemId = [...state.cartList].findIndex(
        (el) => el.id === action.payload.id
      );

      if (existingItemId === 0 || existingItemId > 0) {
        if (state.cartList[existingItemId].quantity > 4) return;
        const existingItem = state.cartList[existingItemId];
        //Increasing quantity by 1
        state.cartList[existingItemId].quantity++;

        //Calculating product Subtotal according to the quantity
        existingItem.subTotal = existingItem.quantity * existingItem.price;

        //Adding the amount in subtotal of the Cart
        state.subTotal = state.subTotal + existingItem.subTotal;
      } else {
        //Adding item to Cart List
        state.cartList = [...state.cartList, action.payload];
        //Adding amount in Cart Subtotal
        state.subTotal = state.subTotal + action.payload.subTotal;
      }
    },

    decrementCart(state, action) {
      const existingItemId = [...state.cartList].findIndex(
        (el) => el.id === action.payload.id
      );

      if (existingItemId === 0 || existingItemId > 0) {
        const existingItem = state.cartList[existingItemId];
        existingItem.quantity--;
        existingItem.subTotal = existingItem.quantity * existingItem.price;
      } else {
        state.cartList = [...state.cartList].filter(
          (el) => el.id !== action.payload.id
        );
      }
    },

    removeItem(state, action) {
      state.cartList = [...state.cartList].filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const cartAction = cartSlice.actions;
