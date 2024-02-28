import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/src/config/firebase.js";

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
