import React, { useState,useEffect } from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import "../css/header.css";
import { useParams, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import mobile from "../../../assets/Vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../Store/Slice/LoginSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignIn from "../../Register/SignIn";
import RegisterPage from "../../Register/js/RegisterPage";
import { User,getAuth,onAuthStateChanged,signOut } from "firebase/auth";


export default function Header() {


  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isProductHovering, setIsProductHovering] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
          setUser(user)
        }else{
          setUser(null)
        }
    })
  }, []);

  // const handleLogin=()=>{
  //   if(user===null){
  //     return (
  //       <>
  //       <RegisterPage />
  //       </>
  //     )
  //   }
  // }

  return (
    <div className="main">
      <div onClick={() => navigate("")} className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar " onMouseLeave={() => setIsProductHovering(false)}>
        <span
          className="py-2 px-2 cursor-pointer"
          
          onClick={() => navigate("/One-tap")}
        >
          One-tap Prescription
        </span>
        <span
          className="nav cursor-pointer position-relative"
          onMouseEnter={() => setIsProductHovering(true)}
        >
          Product Features
        </span>
        {isProductHovering && (
          <div className="product-section d-flex flex-column text-start position-absolute">
            <span
              className="py-2 px-2 cursor-pointer"
              onClick={() => navigate("/Coming-soon")}
            >
              Blogs
            </span>
            <span
              className="py-2 px-2 cursor-pointer"
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
        <span
          className="nav cursor-pointer"
          onClick={() => navigate("/Coming-soon")}
        >
          Resources
        </span>
      </div>

      <div className="navbarBtn col-2">
        {user?
        <div className="ms-auto pe-3">
            <AccountCircleIcon
              color="secondary"
              onClick={() => navigate("/User-profile")}
            />
          </div>:

        <div>
          <button
            className="logInBtn mx-4"
            onClick={() => navigate("/Sign-In")}
          >
            Login
          </button>
          <button className="signUpBtn" onClick={() => navigate("/Sign-Up")}>
            SignUp
          </button>
        </div>}
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
