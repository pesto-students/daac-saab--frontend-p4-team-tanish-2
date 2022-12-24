import React from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import "../css/header.css";
import { useParams, useNavigate } from "react-router-dom";

export default function Header() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div onClick={() => navigate("Home")}>
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <span className="nav">Product Features</span>
        <span className="nav">
          {params === "doctor" ? "Healthcare" : "About us"}
        </span>
        <span className="nav">Resoures</span>
      </div>
      <div className="navbarBtn col-2">
        <button className="logInBtn">Login</button>
        <button className="signUpBtn">SignUp</button>
      </div>
    </div>
  );
}
