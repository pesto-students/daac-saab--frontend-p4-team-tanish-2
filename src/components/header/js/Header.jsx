import React from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import { makeStyles } from "@mui/styles";
import "../css/header.css";
import { useParams, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 9999,
  },
  nav: {
    color: "#ffffff",
  },
  logInBtn: {
    border: "1px solid #FFFFFF",
    borderRadius: "5px",
    color: "#FFFFFF",
    background: "none",
    padding: "7px 22px",
    fontWeight: 500,
    fontSize: "15.4px",
  },
  navbar: {
    width: "25%",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navbarBtn: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  signUpBtn: {
    background: "#BCDD33",
    border: "1px solid #BCDD33",
    borderRadius: "4px",
    color: "#025F4C",
    fontWeight: 500,
    fontSize: "15.4px",
    padding: "7px 22px",
  },
});

export default function Header() {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className={classes.main} spacing={12}>
      <div onClick={() => navigate("home")}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.navbar}>
        <span className={classes.nav}>Product Features</span>
        <span className={classes.nav}>
          {params === "doctor" ? "Healthcare" : "About us"}
        </span>
        <span className={classes.nav}>Resoures</span>
      </div>
      <div className={`${classes.navbarBtn} col-2`}>
        <button className={classes.logInBtn}>Login</button>
        <button className={classes.signUpBtn}>SignUp</button>
      </div>
    </div>
  );
}
