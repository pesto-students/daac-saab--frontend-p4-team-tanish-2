import React from "react";
import { useNavigate } from "react-router-dom";
import comming from "../../../assets/200w.webp";

export default function Coming() {
  const navigate = useNavigate()
  return (
    <div className="align-items-center container flex-column d-flex justify-content-around my-5 py-5 ">
      <img src={comming} alt="coming" className="img-fluid" />
      <button className="btn btn-secondary" onClick={()=>navigate("/")}>
        Go To Home
      </button>
    </div>
  );
}
