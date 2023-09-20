// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUUeRyblKoc8I-gL_LRiHUZbTxoFkvXI4",
  authDomain: "ecommerce-reactapp-aeaf1.firebaseapp.com",
  projectId: "ecommerce-reactapp-aeaf1",
  storageBucket: "ecommerce-reactapp-aeaf1.appspot.com",
  messagingSenderId: "917088998633",
  appId: "1:917088998633:web:ac2a7a7130b76195a40c78",
  measurementId: "G-6TSBBNDY5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
