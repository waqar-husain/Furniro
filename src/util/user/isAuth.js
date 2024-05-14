import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/src/config/firebase.js";
import { db } from "@/src/config/firebase.js";
import { setDoc, doc } from "firebase/firestore";

export const isAuth = () => {
  const isAuth = localStorage.getItem("user");
  return isAuth;
};

const setUserId = (user) => {
  const JSONuser = JSON.stringify(user);
  localStorage.setItem("user", JSONuser);
};

export const signUp = async (userCred) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      userCred.email,
      userCred.password
    );

    await setDoc(
      doc(db, "users", res.user.uid, "userDetails", `user-${res.user.uid}`),
      {
        userDetails: {
          firstName: userCred.username,
          lastName: "",
          companyName: "",
          country: "",
          province: "",
          streetAddress: "",
          city: "",
          zipCode: "",
          phone: "",
          emailAddress: userCred.email,
        },
      }
    );

    await setDoc(
      doc(db, "users", res.user.uid, "cart", `cart-${res.user.uid}`),
      {
        cart: {
          cartList: [],
          subTotal: 0,
          totalPrice: 0,
        },
      }
    );

    await setDoc(
      doc(db, "users", res.user.uid, "wishlist", `wishlist-${res.user.uid}`),
      {
        wishlist: [],
      }
    );

    await updateProfile(res.user, { displayName: userCred.username });
    setUserId(res.user.uid);
    return res;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userCred) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      userCred.email,
      userCred.password
    );
    setUserId(res.user.uid);
    return res;
  } catch (error) {
    throw error;
  }
};

export const signOutFunc = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    return error;
  }
};
