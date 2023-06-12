// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   sendPasswordResetEmail,
   signOut,} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCf--cgIdIyOgjCXCBfBsDBALFSfQuggIs",
  authDomain: "oauth-authentication-e69d7.firebaseapp.com",
  projectId: "oauth-authentication-e69d7",
  storageBucket: "oauth-authentication-e69d7.appspot.com",
  messagingSenderId: "710989197704",
  appId: "1:710989197704:web:5ad528be58afe582ce4a3d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const googleprovider = new GoogleAuthProvider();
const signInWithGoogle =

export {auth, provider};