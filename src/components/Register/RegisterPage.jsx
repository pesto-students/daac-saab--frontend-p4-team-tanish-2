import React from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { app } from "../../services/Firebase";
import {useState} from 'react';


const auth = getAuth(app);

const RegisterPage = () => {

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const signUpUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then((value)=>alert(`User registered with email ${email} and password ${password}`));
  }
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column ">
      <label className="mt-5">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email here" />
      <label>Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your Password" />
      <button className="btn-primary" onClick={signUpUser}>Sign Up</button>
      </div>
      
      
    </div>
  );
};

export default RegisterPage;
