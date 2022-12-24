import React from "react";
import "../css/footer.css";
import logo from "../../../assets/tightBounds.svg";
import call from "../../../assets/call.webp.svg";
import mail from "../../../assets/mail.webp.svg";
import linked from "../../../assets/linkedIn.svg";
import insta from "../../../assets/insta.svg.svg";
import youtube from "../../../assets/youtube.svg";
import { isMobile } from "react-device-detect";


export default function Footer() {
  return (
    <div className="parent py-5">
      <div
        className={` ${
          isMobile ? "flex-column" : ""
        } container d-flex col-12 py-5 root`}
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
        <div className={`${isMobile?"col-12":"col-2 align-items-center"} d-flex my-4 flex-column`}>
          <span className="footerHeader">OUR EXPERIENCE</span>
          <ul className="footerContentList">
            <li>One tap Prescription</li>
            <li>Health Blogs</li>
            <li>Daac Saab app</li>
            <li>Our Doctors</li>
            <li>Wellness</li>
          </ul>
        </div>
        <div className={`${isMobile?"col-12":"col-2 align-items-center"} d-flex my-4 flex-column`}>
          <span className="footerHeader">GROW WITH US</span>
          <ul className="footerContentList">
            <li>Careers</li>
            <li>Guides and Playbooks </li>
            <li>Checklists</li>
            <li>HR Community</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div className={`${isMobile?"col-12":"col-2 align-items-center"} d-flex my-4 flex-column`}>
          <span className="footerHeader">ABOUT US</span>
          <ul className="footerContentList">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Testimonials</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
