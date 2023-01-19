// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBDKdjd4kLRIM56eZEe-kHj_lv66hP7jbM",
  authDomain: "daac-saab.firebaseapp.com",
  projectId: "daac-saab",
  storageBucket: "daac-saab.appspot.com",
  messagingSenderId: "862001265012",
  appId: "1:862001265012:web:35345270db89038817d421",
  measurementId: "G-NRXZ37NN50",
  databaseURL:
    "https://console.firebase.google.com/u/2/project/daac-saab/database/daac-saab-default-rtdb/data/~2F",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
