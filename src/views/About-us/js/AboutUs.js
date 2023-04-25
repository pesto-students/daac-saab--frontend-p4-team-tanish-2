import React from "react";
import "../css/aboutUs.css";
import groupPic from "../../../assets/group.jpg";
import doc from "../../../assets/about_doc.svg";
import i1 from "../../../assets/i1.svg.svg";
import i2 from "../../../assets/i2.svg.svg";
import i3 from "../../../assets/i3.svg.svg";
import bottom from "../../../assets/footerBottom.svg";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate=useNavigate();
  return (
    <div className="py-5 my-5 position-relative">
      <div className="container d-flex align-items-center">
        <div className="d-flex flex-column col-6">
          <span className="teamText">We Are Daac Saab 🩺</span>
          <span className="healthCareText col-8">
            We believe we can <span>make healthcare better</span> for everyone
          </span>
          <span className="descriptionText col-8 mt-3">
            We’re building a brand new healthcare platform that ensures
            proper care and improves health outcomes
          </span>
        </div>
        <img alt="grp-pic" className="img-fluid col-6" src={groupPic} />
      </div>
      <div className="section2">
        <div className="container d-flex align-items-center my-5">
          <div className="d-flex flex-column col-6">
            <span className="teamText">HOW DO WE DO THIS?</span>
            <span className="healthCareText-new col-8 mt-3">
              Daac saab doctors <span className="peach-text">proactively keep you healthy,</span> not
              just treat you when you are sick.
            </span>
            {/* <span className="descriptionText col-8">
            We’re building a brand new healthcare platform that ensures
            financial protection from health risks and improves health outcomes
          </span> */}
          </div>
          <img alt="grp-pic" className="img-fluid col-3 ms-auto" src={doc} />
        </div>
      </div>
      <div className="container d-flex align-items-center my-5 col-12">
        <div className="col-6 d-flex flex-column">
          <label className="section3Label">
            How it <span>started</span>
          </label>
          <span className="section3Span my-3">
            Before Daac Saab, there was no quick solution in the market for general symptoms so our aim was to provide a prescription within minutes
          </span>
          <span className="section3Span my-3">
            Patients do not want to visit a doctor for small and minor inconveniences like headaches, nausea, common cold . That's where we 
            come in with our in-house "One Tap Prescription Feature" which lets user generate a prescription within a few taps and gives them 
            a catered prescription according to their symptoms . 
          </span>
          <span className="section3Desc my-3">
            Daac Saab is India’s quick healthcare service provider. We help
            patients get amazing health benefits for their them and their families and deliver
            the care with our own in-house team of more than 30 experienced doctors.
          </span>
        </div>
        <div className="col-6 ms-5 mb-5 pb-5">
          <div className="d-flex my-4">
            <img src={i1} alt="i1" className="img-fluid" />
            <div className="d-flex flex-column ms-2">
              <span className="compDescSPan1">
                In 2022, Daac-Saab was founded.
              </span>
              <span className="compDescDesc1">
                First integrated care provider
              </span>
            </div>
          </div>
          <div className="d-flex my-5">
            <img src={i2} alt="i2" className="img-fluid" />
            <div className="d-flex ms-2 flex-column">
              <span className="compDescSPan1">$2 Million Seed Round</span>
              <span className="compDescDesc1">
                Graduated Y-Combinator and provided amazing health benefits to
                the first 30 customers
              </span>
            </div>
          </div>
          <div className="d-flex my-5">
            <img src={i3} alt="i3" className="img-fluid" />
            <div className="d-flex ms-2 flex-column">
              <span className="compDescSPan1">130K+ Members added</span>
              <span className="compDescDesc1">
                Across 300+ companies, Loop provided a family doctor to each
                employee.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative container">
        <div className="container footerBottom d-flex position-absolute footerBottomPosition">
          <img src={bottom} alt="bottom" className="img-fluid" />
          <div className="d-flex flex-column col-6">
            <span className="bottomHeader my-4 col-7">
              Let’s take care of your you and your family
            </span>
            <span className="bottomDesc mb-3">
              Modern healthcare benefits for high power teams
            </span>
            <button onClick={()=>navigate("/")} className="bottomBtn col-3 mt-4 mb-2">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
