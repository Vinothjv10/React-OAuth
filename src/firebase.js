import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQBMftnZU7wYasibkCubiuJXD6gCEqqiM",
  authDomain: "o-auth-33bc9.firebaseapp.com",
  projectId: "o-auth-33bc9",
  storageBucket: "o-auth-33bc9.appspot.com",
  messagingSenderId: "418006938320",
  appId: "1:418006938320:web:bef0222ae04828d038e4d5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();