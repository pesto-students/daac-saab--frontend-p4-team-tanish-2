// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,
  query,
  getDocs,
  collection,
  where,addDoc
} from "firebase/firestore";


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
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert.error(err);
    
  }
};


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

// Initialize Firebase

export {
  
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
