import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJZS_9rp5TNJeewmxbP-pUHPIVD-QwaWc",
  authDomain: "district-auth.firebaseapp.com",
  projectId: "district-auth",
  storageBucket: "district-auth.appspot.com",
  messagingSenderId: "136870138468",
  appId: "1:136870138468:web:ef0774a6f4e75895aa0571",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/*
// Better solution :

const firebaseConfig = {
  apiKey: process.env.loca.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJET_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
*/