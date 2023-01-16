import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app,useFirebase } from "../../context/Firebase";
import { useState } from "react";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  console.log(firebase)
  const handleLogin=async (e)=>{
    e.preventDefault();
    console.log("Loggin in a User");
    await firebase.signInUserWithEmailAndPassword(email,password);
    console.log("Login In Sucess !!")
  }

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Successfully Logged In"))
      .catch((err) => console.log(err));
  };
    
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <label className="mt-5">Enter your email ! </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          required
          placeholder="Enter your Email here !"
        />
        <label>Enter your password ! </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          required
          placeholder="Enter your password here !"
        />
        <button className="btn-primary" onClick={signInUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
