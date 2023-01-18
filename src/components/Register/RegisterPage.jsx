import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app} from "../../context/Firebase";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider =  new GoogleAuthProvider();
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert(`User registered with email ${email} and password ${password}`)
    );
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column ">
        <label className="mt-5">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your email here"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your Password"
        />
        <br />
        <button onClick={signInWithGoogle}>Sign in with google</button>
        <button className="btn-primary" onClick={signUpUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
