import React, { useState } from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import "../css/header.css";
import { useParams, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import mobile from "../../../assets/Vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../Store/Slice/LoginSlice";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isProductHovering, setIsProductHovering] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div onClick={() => navigate("")}>
        <img src={logo} alt="logo" />
      </div>
      <div
        className="navbar position-relative"
        onMouseLeave={() => setIsProductHovering(false)}
      >
        <span className="nav" onMouseEnter={() => setIsProductHovering(true)}>
          Product Features
        </span>
        {isProductHovering && (
          <div className="product-section d-flex flex-column text-start position-absolute">
            <span
              className="my-2 cursor-pointer"
              onClick={() => navigate("/One-tap")}
            >
              One-tap
            </span>
            <span
              className="my-2 cursor-pointer"
              onClick={() => navigate("/Coming-soon")}
            >
              Blogs
            </span>
            <span
              className="my-2 cursor-pointer"
              onClick={() => navigate("/Coming-soon")}
            >
              Wellness
            </span>
          </div>
        )}
        <span
          className="nav cursor-pointer"
          onClick={() => navigate("/About-us")}
        >
          {params === "doctor" ? "Healthcare" : "About us"}
        </span>
        <span className="nav">Resoures</span>
      </div>

      <div className="navbarBtn col-2">
        {isAuthenticated ? (
          <div className="ms-auto pe-3">
            <AccountCircleIcon
              color="secondary"
              onClick={() => navigate("/User-profile")}
            />
          </div>
        ) : (
          <div>
            <button className="logInBtn" onClick={() => loginWithRedirect()}>
              Login
            </button>
            <button className="signUpBtn">SignUp</button>
          </div>
        )}
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
