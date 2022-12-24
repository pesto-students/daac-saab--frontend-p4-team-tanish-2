import React from "react";
import "../css/aboutUs.css";
import groupPic from "../../../assets/group.svg";
export default function AboutUs() {
  return (
    <div>
      <div className="container d-flex align-items-center">
        <div className="d-flex flex-column col-6">
          <span className="teamText">We Are Daac Saab 🩺</span>
          <span className="healthCareText col-8">
            We believe we can <span>make healthcare better</span> for everyone
          </span>
          <span className="descriptionText col-8">
            We’re building a brand new healthcare platform that ensures
            financial protection from health risks and improves health outcomes
          </span>
        </div>
        <img alt="grp-pic" className="img-fluid col-6" src={groupPic} />
      </div>
      <div>
        
      </div>
    </div>
  );
}
