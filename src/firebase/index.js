// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDimI4doDgsii0TEaPvhu2vxRfuzWg29RM",
  authDomain: "simplechatbot-55afb.firebaseapp.com",
  projectId: "simplechatbot-55afb",
  storageBucket: "simplechatbot-55afb.appspot.com",
  messagingSenderId: "310120267269",
  appId: "1:310120267269:web:b6ddcbb18d223ca351a66c",
  measurementId: "G-B2H479PGXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);