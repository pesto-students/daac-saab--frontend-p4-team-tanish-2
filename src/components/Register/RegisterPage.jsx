import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, useFirebase } from "../../context/Firebase";
import { useState } from "react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const googleProvider=new GoogleAuthProvider();

const RegisterPage = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  console.log(firebase)
  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log("Signing up a User");
    await firebase.signUpUserWithEmailAndPassword(email,password);
    console.log("Sign In Sucess !!")
  }

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert(`User registered with email ${email} and password ${password}`)
    );
  };

  const signUpWithGoogle=()=>{
      signInWithPopup(auth, googleProvider);
  }
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
        <br/>
        <button onClick={signUpWithGoogle}>
         Sign in with google
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
