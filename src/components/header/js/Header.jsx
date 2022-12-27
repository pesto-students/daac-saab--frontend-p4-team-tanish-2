import React, { useState } from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import "../css/header.css";
import { useParams, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import mobile from "../../../assets/Vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../Store/Slice/LoginSlice";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div onClick={() => navigate("")} className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <span className="nav">Product Features</span>
        <span
          className="nav cursor-pointer"
          onClick={() => navigate("/About-us")}
        >
          {params === "doctor" ? "Healthcare" : "About us"}
        </span>
        <span className="nav">Resoures</span>
      </div>
      <div className="navbarBtn col-2">
        <button className="logInBtn" onClick={() => dispatch(showModal())}>
          Login
        </button>
        <button className="signUpBtn">SignUp</button>
      </div>

      {isMobile ? (
        <img
          src={mobile}
          alt="mobileNav"
          className="d-none"
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
      ) : (
        <>
          {showMobileNav && (
            <>
              <div className="navbar">
                <span className="nav">Product Features</span>
                <span
                  className="nav cursor-pointer"
                  onClick={() => navigate("/About-us")}
                >
                  {params === "doctor" ? "Healthcare" : "About us"}
                </span>
                <span className="nav">Resoures</span>
              </div>
              <div className="navbarBtn col-2">
                <button className="logInBtn">Login</button>
                <button className="signUpBtn">SignUp</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
