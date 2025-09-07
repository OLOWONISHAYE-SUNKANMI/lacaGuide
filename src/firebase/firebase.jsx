import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh_22fFZcaXpgHKgPzJ4SLvvto2KXuqTE",
  authDomain: "lacacaguide.firebaseapp.com",
  projectId: "lacacaguide",
  storageBucket: "lacacaguide.firebasestorage.app",
  messagingSenderId: "373178954277",
  appId: "1:373178954277:web:a9fe417282430abf4505cc",
  measurementId: "G-EW6W13V5L1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);