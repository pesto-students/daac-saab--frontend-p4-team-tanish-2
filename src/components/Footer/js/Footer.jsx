import React from "react";
import "../css/footer.css";
import logo from "../../../assets/tightBounds.svg";
import call from "../../../assets/call.webp.svg";
import mail from "../../../assets/mail.webp.svg";
import linked from "../../../assets/linkedIn.svg";
import insta from "../../../assets/insta.svg.svg";
import youtube from "../../../assets/youtube.svg";
import { isMobile } from "react-device-detect";
import { useNavigate, useParams } from "react-router-dom";

export default function Footer() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(window.location.href.split("/")[3], "svsd");
  return (
    <div
      className={`${
        window.location.href.split("/")[3] === "About-us" ? "parent1" : "parent"
      }`}
    >
      <div
        className={`root ${
          isMobile ? "flex-column" : ""
        } container d-flex col-12 py-5`}
      >
        <div
          className={`${
            isMobile ? "col-12" : "col-5"
          } ms-auto d-flex flex-column my-3`}
        >
          <img alt="logo" src={logo} className="img-fluid col-4 my-2" />
          <span className="reachableText my-2">We are reachable 24x7</span>
          <span className="reachableText">
            {" "}
            <img className="img-fluid me-3 my-2" src={call} alt="call" />{" "}
            020-711-3885
          </span>
          <span className="reachableText my-2">
            {" "}
            <img className="img-fluid me-3" src={mail} alt="mail" />{" "}
            daacsaabhelp.com
          </span>
          <div className="d-flex justify-content-between col-3 my-2">
            <img
              src={linked}
              alt="linkedIn"
              className="img-fluid cursor-pointer"
            />
            <img src={insta} alt="insta" className="img-fluid cursor-pointer" />
            <img
              src={youtube}
              alt="youtube"
              className="img-fluid cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`${
            isMobile ? "col-12" : "col-2 align-items-center"
          } d-flex my-4 flex-column`}
        >
          <span className="footerHeader">OUR EXPERIENCE</span>
          <ul className="footerContentList">
            <li onClick={() => navigate("/One-tap")}>One tap Prescription</li>
            <li onClick={() => navigate("/Specialist")}>Symptoms</li>
            <li>Daac Saab app</li>
            <li onClick={() => navigate("/Doctor")}>Our Doctors</li>
            <li>Wellness</li>
          </ul>
        </div>
        <div
          className={`${
            isMobile ? "col-12" : "col-2 align-items-center"
          } d-flex my-4 flex-column`}
        >
          <span className="footerHeader">GROW WITH US</span>
          <ul className="footerContentList">
            <li>Careers</li>
            <li>Guides and Playbooks </li>
            <li>Checklists</li>
            <li>HR Community</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div
          className={`${
            isMobile ? "col-12" : "col-2 align-items-center"
          } d-flex my-4 flex-column`}
        >
          <span className="footerHeader">ABOUT US</span>
          <ul className="footerContentList">
            <li>Our Story</li>
            <li onClick={() => navigate("/About-us")}>About-us</li>
            <li>Testimonials</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
