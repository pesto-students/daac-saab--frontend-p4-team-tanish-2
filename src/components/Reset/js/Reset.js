import React, { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";
import { auth,sendPasswordReset } from "../../../context/Firebase";
import "../css/Reset.css";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading){
       <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
      }
      if (user) navigate("/");
    }, [user, loading]);
    return (
      <div className="reset container">
        <div className="reset__container">
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="reset__btn"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset email
          </button>
          <div>
            Don't have an account? <Link to="/Sign-Up">Sign Up</Link> now.
          </div>
        </div>
      </div>
    );
  }
  export default Reset;