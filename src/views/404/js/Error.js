import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../../assets/giphy.gif";
import axios from "axios";
import logo from "../../../assets/logo192.png";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="align-items-center container d-flex flex-column justify-content-around my-5 py-5 ">
      <img src={error} alt="error" className="img-fluid" />
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go To Home
      </button>
    </div>
  );
}
