"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../config/firebase";
import { userAction } from "../store/slices/userSlice";
import { cartAction } from "../store/slices/cartSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { wishlistAction } from "../store/slices/wishlistSlice";

export default function UserAuth() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    const updateCart = async (user) => {
      const cartRef = doc(
        db,
        "users",
        user.localId,
        "cart",
        `cart-${user.localId}`
      );

      await updateDoc(cartRef, { cart: cart });
    };
    if (userState) {
      updateCart(userState);
    }
  }, [cart.cartList]);

  useEffect(() => {
    const updateWishlist = async (user) => {
      const wishlistRef = doc(
        db,
        "users",
        user.localId,
        "wishlist",
        `wishlist-${user.localId}`
      );

      await updateDoc(wishlistRef, { wishlist });
    };
    if (userState) {
      updateWishlist(userState);
    }
  }, [wishlist]);

  useEffect(() => {
    const cartHandler = async (user) => {
      const cartRef = doc(
        db,
        "users",
        user.localId,
        "cart",
        `cart-${user.localId}`
      );
      const cartRes = await getDoc(cartRef);
      const cart = await cartRes.data()?.cart;
      if (cart) dispatch(cartAction.setCart(cart));
    };

    const wishlistHandler = async (user) => {
      const wishlistRef = doc(
        db,
        "users",
        user.localId,
        "wishlist",
        `wishlist-${user.localId}`
      );
      const wishlistRes = await getDoc(wishlistRef);
      const wishlist = await wishlistRes.data()?.wishlist;
      if (wishlist) dispatch(wishlistAction.setWishlist({ wishlist }));
    };

    if (userState) {
      cartHandler(userState);
      wishlistHandler(userState);
    } else {
      //  Set the value of cart from local storage
    }
  }, [userState]);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      dispatch(userAction.setUser({ user: user.reloadUserInfo }));
    } else {
      dispatch(userAction.setUser({ user: false }));
    }
  });

  return <></>;
}
