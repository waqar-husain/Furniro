import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDD6eYYR9AD_vqO0KDqglSE-Pcx6ovT83c",
  authDomain: "furniro-44994.firebaseapp.com",
  projectId: "furniro-44994",
  storageBucket: "furniro-44994.appspot.com",
  messagingSenderId: "524420866719",
  appId: "1:524420866719:web:b1f9e463b35e2a9c7078aa",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
