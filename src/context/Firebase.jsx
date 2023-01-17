// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { React, createContext, useContext, useState, useEffect } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBDKdjd4kLRIM56eZEe-kHj_lv66hP7jbM",
//   authDomain: "daac-saab.firebaseapp.com",
//   projectId: "daac-saab",
//   storageBucket: "daac-saab.appspot.com",
//   messagingSenderId: "862001265012",
//   appId: "1:862001265012:web:35345270db89038817d421",
//   measurementId: "G-NRXZ37NN50",
//   databaseURL:
//     "https://console.firebase.google.com/u/2/project/daac-saab/database/daac-saab-default-rtdb/data/~2F",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const FirebaseContext = createContext(null);
// const firebaseAuth = getAuth(firebaseApp);
// export const useFirebase = () => useContext(FirebaseContext);

// export const FirebaseProvider = (props) => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     onAuthStateChanged(firebaseAuth, (user) => {
//       if (user) setUser(user);
//       else setUser(null);
//     });
//   }, []);

//   const signUpUserWithEmailAndPassword = (email, password) => {
//     return createUserWithEmailAndPassword(firebaseAuth, email, password);
//   };

//   const signInUserWithEmailAndPassword = (email, password) => {
//     return signInUserWithEmailAndPassword(firebaseAuth, email, password);
//   };

//   const isLoggedIn = user ? true : false;
//   return (
//     <FirebaseProvider
//       value={{ signUpUserWithEmailAndPassword, signInUserWithEmailAndPassword , isLoggedIn }}
//     >
//       {props.children}
//     </FirebaseProvider>
//   );
// };

// // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
