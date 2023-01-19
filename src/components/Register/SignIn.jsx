import React from "react";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup } from "firebase/auth";
import { app } from "../../context/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider =  new GoogleAuthProvider();

const SignIn = () => {


  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider).then(()=>{
      navigate("/")
    })
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        alert("Logged in successfully")
      })
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
        <br />
        <button onClick={signInWithGoogle}>Sign in with google</button>
         <button className="btn-primary" onClick={signInUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
