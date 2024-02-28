"use client";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { userAction } from "../store/slices/userSlice";

export default function UserAuth() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(userAction.setUser({ user: user.reloadUserInfo }));
    } else {
      dispatch(userAction.setUser({ user: false }));
    }
  });

  return <></>;
}
