import React from "react";
import { useNavigate } from "react-router-dom";
import comming from "../../../assets/200w.webp";
import "../css/coming.css";
export default function Coming() {
  const navigate = useNavigate()

  return (
    // <div className="align-items-center container flex-column d-flex justify-content-around my-5 py-5 ">
    //   <img src={comming} alt="coming" className="img-fluid" />
    //   <button className="btn btn-secondary" onClick={()=>navigate("/")}>
    //     Go To Home
    //   </button>
    // </div>
    <div className="card">
      <div className="header1">
        <div className="logo">
          <p onClick={()=>navigate("/")}>DAAC SAAB</p>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1>We are working on it.</h1>
          <p>This Feature is coming soon. Please check back here again after some time.</p>
        </div>
        <a href="/">
          <div className="cta">Head back to home screen</div>
        </a>
      </div>
      <div className="footer">
        <span>Made by <a className="underlined" href="https://github.com/pesto-students/daac-saab--frontend-p4-team-tanish-2" target="_blank" rel="noopener noreferrer">Gantavya and Bajrang</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/pesto-students/daac-saab--frontend-p4-team-tanish-2" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
      </div>
    </div>

  );
}
