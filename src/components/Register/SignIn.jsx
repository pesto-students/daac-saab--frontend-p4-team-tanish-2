import React from 'react'
import {getAuth}
const SignIn = () => {

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column">
      <label className="mt-5">Enter your email ! </label> 
      <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} required placeholder="Enter your Email here !"/>
      <label>Enter your password ! </label> 
      <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} required placeholder="Enter your password here !"/>
      <button className="btn-primary">
        Login
      </button>
      </div>
    
    </div>
  )
}

export default SignIn